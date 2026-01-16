import { NextRequest, NextResponse } from 'next/server';
import { requireFirebaseUser } from '@/lib/firebase/server';
import { adminDb } from '@/lib/firebase/admin';

export async function GET(_request: NextRequest) {
  try {
    const user = await requireFirebaseUser(_request);

    if (!user) {
      return NextResponse.json(
        { hasAccess: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const purchaseSnap = await adminDb
      .collection('users')
      .doc(user.uid)
      .collection('primer_purchases')
      .orderBy('purchasedAt', 'desc')
      .limit(1)
      .get();

    const hasAccess = !purchaseSnap.empty;
    const purchaseDoc = purchaseSnap.docs[0];

    return NextResponse.json({
      hasAccess,
      purchaseDate: hasAccess ? purchaseDoc.data().purchasedAt?.toDate() : null
    });
  } catch (error: any) {
    console.error('Access check error:', error);

    return NextResponse.json(
      { hasAccess: false, error: error.message || 'Failed to check access' },
      { status: 500 }
    );
  }
}
