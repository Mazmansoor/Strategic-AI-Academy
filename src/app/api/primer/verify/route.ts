import { NextRequest, NextResponse } from 'next/server';
import { isStripeConfigured, stripe } from '@/lib/stripe';
import { requireFirebaseUser } from '@/lib/firebase/server';
import { adminDb } from '@/lib/firebase/admin';
import { Timestamp } from 'firebase-admin/firestore';

export async function GET(request: NextRequest) {
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

    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session ID' },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

    if (checkoutSession.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    const metadataUserId = checkoutSession.metadata?.userId;
    const emailMatches =
      checkoutSession.customer_email &&
      user.email &&
      checkoutSession.customer_email.toLowerCase() === user.email.toLowerCase();

    if (metadataUserId && metadataUserId !== user.uid && !emailMatches) {
      return NextResponse.json(
        { error: 'Session does not match authenticated user' },
        { status: 403 }
      );
    }

    const purchaseRef = adminDb
      .collection('users')
      .doc(user.uid)
      .collection('primer_purchases')
      .doc(sessionId);
    const existingPurchase = await purchaseRef.get();

    if (!existingPurchase.exists) {
      await purchaseRef.set({
        stripeSessionId: sessionId,
        stripePaymentIntent: checkoutSession.payment_intent || null,
        amountCents: checkoutSession.amount_total || 14700,
        currency: checkoutSession.currency || 'usd',
        status: checkoutSession.payment_status,
        purchasedAt: Timestamp.now(),
      });
    }

    return NextResponse.json({
      success: true,
      hasAccess: true
    });
  } catch (error: any) {
    console.error('Purchase verification error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to verify purchase' },
      { status: 500 }
    );
  }
}
