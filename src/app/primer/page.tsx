import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function PrimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <article className="bg-white rounded-2xl shadow-sm border border-notion-border p-8 md:p-12 mb-16">
          {/* Title */}
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                Optional Premium Content
              </div>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                Free Content Available
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-notion-text mb-6 leading-tight">
              Strategic AI Judgment Primer
            </h1>
            <p className="text-xl text-notion-text-light leading-relaxed mb-4">
              A systematic 90-minute introduction to evaluating AI output in high-stakes decisions.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> This is optional premium content. All core learning materials, diagnostic tools, and foundation-level courses are completely free. <Link href="/signup" className="underline font-semibold">Start learning for free →</Link>
              </p>
            </div>
          </header>

          {/* What This Is */}
          <section className="pb-16 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900 mb-8">What This Is</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              This is not a course on prompting techniques. It is not a survey of AI tools. It is not productivity optimization.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              This is 90 minutes of systematic training on the specific failure modes that occur when decision-makers delegate judgment to AI without verification systems.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              You will work through real scenarios where AI output was plausible, confident, and wrong—and learn the exact verification steps that would have caught each error before it reached executives.
            </p>
          </section>

          {/* What You'll Do */}
          <section className="pb-16 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900 mb-8">What You'll Do</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-gray-400 pl-6">
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  Case 1: Financial Model Interpolation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  An LLM generates a quarterly summary with plausible-sounding metrics that were never in the source document. You'll identify the exact verification step that catches this before it reaches the board.
                </p>
              </div>
              <div className="border-l-2 border-gray-400 pl-6">
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  Case 2: Strategic Recommendation Drift
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI suggests a course of action that sounds strategically coherent but contradicts constraints specified three paragraphs earlier. You'll learn why human executives miss this and how to design prompts that prevent it.
                </p>
              </div>
              <div className="border-l-2 border-gray-400 pl-6">
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  Case 3: Confidence Without Accuracy
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A model produces a confident analysis with internally consistent logic that is fundamentally incorrect. You'll develop a systematic framework for distinguishing coherence from correctness.
                </p>
              </div>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="pb-16 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900 mb-8">Who This Is For</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Directors, VPs, and senior managers who sign off on AI-assisted decisions and need to verify output before it becomes organizational reality.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              This is for people who recognize that the gap between approving something and understanding it is growing—and want to close that gap before it becomes permanent.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              If you are optimizing for productivity, this is not for you. If you are preserving judgment, this is exactly what you need.
            </p>
          </section>

          {/* Format */}
          <section className="pb-16 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900 mb-8">Format</h2>
            <div className="space-y-4 text-base text-gray-700">
              <p className="leading-relaxed">
                <span className="font-medium text-gray-900">90 minutes total.</span> Self-paced.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium text-gray-900">3 case studies.</span> Each with real failure scenarios, systematic analysis, and decision frameworks you can apply immediately.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium text-gray-900">Written format.</span> No videos. Designed for slow reading and deliberate thought.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium text-gray-900">Lifetime access.</span> Return to the material as often as needed.
              </p>
            </div>
          </section>

          {/* What This Is Not */}
          <section className="pb-16 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900 mb-8">What This Is Not</h2>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="leading-relaxed">• Not a comprehensive course (see full capabilities for that)</li>
              <li className="leading-relaxed">• Not tool training or prompt engineering</li>
              <li className="leading-relaxed">• Not productivity optimization</li>
              <li className="leading-relaxed">• Not beginner-friendly if you've never used AI in decision-making</li>
            </ul>
          </section>

          {/* Pricing */}
          <section className="pb-16">
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-xl p-8">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-2xl font-bold text-notion-text">Investment</h2>
                <div className="text-4xl font-bold text-primary-600">$147</div>
              </div>
              <p className="text-base text-notion-text-light mb-8 leading-relaxed">
                One-time payment. Lifetime access. No subscription.
              </p>
              <Link
                href="/primer/checkout"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-notion-accent text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg mb-4"
              >
                Purchase Primer →
              </Link>
              <p className="text-sm text-notion-text-light text-center">
                Requires account. <Link href="/signup" className="text-primary-600 hover:text-primary-700 font-semibold">Create one here</Link> if you don't have one yet.
              </p>
            </div>
          </section>

          {/* Free Alternative */}
          <div className="pt-8 border-t border-notion-border bg-green-50 -mx-8 md:-mx-12 px-8 md:px-12 pb-8 rounded-b-2xl">
            <h3 className="font-bold text-notion-text mb-4">Prefer to start for free?</h3>
            <div className="space-y-3">
              <p className="text-sm text-notion-text-light">
                <Link href="/signup" className="text-primary-600 hover:text-primary-700 font-semibold">Create a free account</Link> to access foundation content, diagnostic tools, and community resources.
              </p>
              <p className="text-sm text-notion-text-light">
                <Link href="/diagnostic" className="text-primary-600 hover:text-primary-700 font-semibold">Take the free diagnostic</Link> to understand your current judgment patterns.
              </p>
              <p className="text-sm text-notion-text-light">
                <Link href="/courses" className="text-primary-600 hover:text-primary-700 font-semibold">View all free capabilities</Link> available without payment.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
