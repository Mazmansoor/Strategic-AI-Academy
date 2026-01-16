import { NextRequest, NextResponse } from 'next/server';

const buildReply = (message: string) => {
  const normalized = message.toLowerCase();

  if (normalized.includes('course') || normalized.includes('curriculum')) {
    return 'The curriculum spans technical, business, and strategic tracks. Tell me your background and I will suggest a starting path.';
  }

  if (normalized.includes('diagnostic')) {
    return 'The diagnostic assesses how you evaluate AI output. If you want, I can explain the archetypes and how to use the results.';
  }

  if (normalized.includes('price') || normalized.includes('payment') || normalized.includes('stripe')) {
    return 'All core courses are free during testing. Paid AI-powered add-ons will be introduced after validation.';
  }

  if (normalized.includes('agent') || normalized.includes('zavia')) {
    return 'I am your Zavia AI agent. I can help map goals to courses, critique AI outputs, or draft decision checklists.';
  }

  return "Tell me your goal and current experience. I'll propose a learning plan or a decision framework.";
};

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const reply = buildReply(message);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Agent chat error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
