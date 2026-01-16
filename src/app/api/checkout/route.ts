import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession, isStripeConfigured } from '@/lib/stripe';
import { requireFirebaseUser } from '@/lib/firebase/server';
import { adminDb } from '@/lib/firebase/admin';

export async function POST(request: NextRequest) {
  try {
    if (!isStripeConfigured) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 503 }
      );
    }

    const user = await requireFirebaseUser(request);

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { courseId, trackLevel } = await request.json();

    if (!courseId || !trackLevel) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const courseIdValue = String(courseId);
    const courseSnap = await adminDb.collection('courses').doc(courseIdValue).get();
    if (!courseSnap.exists) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    const courseData = courseSnap.data() as {
      tracks?: Array<{ level: string; priceId?: string }>;
    };
    const track = courseData.tracks?.find(
      (item) => item.level.toLowerCase() === String(trackLevel).toLowerCase()
    );

    if (!track) {
      return NextResponse.json(
        { error: 'Track not found' },
        { status: 404 }
      );
    }

    if (!track.priceId) {
      return NextResponse.json(
        { error: 'Pricing not configured for this track' },
        { status: 503 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const checkoutSession = await createCheckoutSession({
      priceId: track.priceId,
      userId: user.uid,
      courseId: courseIdValue,
      trackLevel,
      successUrl: `${baseUrl}/dashboard?success=true`,
      cancelUrl: `${baseUrl}/courses?canceled=true`,
    });

    return NextResponse.json({ sessionId: checkoutSession.id, url: checkoutSession.url });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
