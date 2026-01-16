import { NextRequest, NextResponse } from 'next/server';
import { saveDiagnosticResult } from '@/lib/db';
import { requireFirebaseUser } from '@/lib/firebase/server';

export async function POST(request: NextRequest) {
  try {
    const user = await requireFirebaseUser(request);
    const { email, domainScores, overallScore, level, recommendations } = await request.json();

    // Save diagnostic result
    const result = await saveDiagnosticResult({
      userId: user?.uid,
      email: email || user?.email || '',
      overallScore,
      level,
      domainScores,
      recommendations
    });

    return NextResponse.json(
      { message: 'Results saved successfully', result },
      { status: 201 }
    );
  } catch (error) {
    console.error('Diagnostic save error:', error);
    return NextResponse.json(
      { error: 'Failed to save results' },
      { status: 500 }
    );
  }
}
