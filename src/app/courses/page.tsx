import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getAllCourses } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function CoursesPage() {
  const courses = await getAllCourses();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">
            100% Free Access
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-notion-text mb-6">Learning Capabilities</h1>
          <p className="text-lg text-notion-text-light leading-relaxed max-w-3xl">
            All core content is completely free. Each capability progresses through four levels of judgment mastery. Start with Foundation and advance as you demonstrate competence.
          </p>
        </div>

        <div className="space-y-16">
          {courses.map((course: any) => (
            <div key={course.id} className="border-t border-gray-200 pt-12">
              <div className="mb-8">
                <h2 className="text-2xl font-light text-gray-900 mb-3">{course.domain}</h2>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <div className="space-y-6">
                {course.tracks && course.tracks.map((track: any) => {
                  const priceDisplay = track.price_cents === 0
                    ? 'Free'
                    : `$${(track.price_cents / 100).toFixed(0)}`;

                  return (
                    <div
                      key={track.id}
                      className={`border-l-2 pl-6 ${
                        track.locked
                          ? 'border-gray-200'
                          : 'border-gray-400'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium">{track.level}</h3>
                        <span className="text-sm text-gray-500">{priceDisplay}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{track.duration} · {track.modules} modules</p>
                      {!track.locked && track.price_cents === 0 && (
                        <Link
                          href={`/courses/${course.slug}/${track.level.toLowerCase()}`}
                          className="inline-block text-sm text-gray-900 border-b border-gray-900 hover:border-gray-400 transition-colors mt-2"
                        >
                          Begin
                        </Link>
                      )}
                      {!track.locked && track.price_cents > 0 && (
                        <Link
                          href={`/courses/${course.slug}/${track.level.toLowerCase()}`}
                          className="inline-block text-sm text-gray-900 border-b border-gray-900 hover:border-gray-400 transition-colors mt-2"
                        >
                          View Details
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
