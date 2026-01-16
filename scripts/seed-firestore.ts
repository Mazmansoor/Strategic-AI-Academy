import { COURSE_CURRICULUM, LEARNING_PATHS } from '../src/data/curriculum';
import { diagnosticQuestions, pricingPlans } from '../src/lib/constants';
import { adminDb } from '../src/lib/firebase/admin';
import { Timestamp } from 'firebase-admin/firestore';

type TrackTemplate = {
  level: 'Foundation' | 'Application' | 'Systems' | 'Mastery';
  duration: string;
  modules: number;
  priceCents: number;
  locked: boolean;
  priceId?: string;
};

const parseWeeks = (duration?: string) => {
  if (!duration) {
    return null;
  }
  const match = duration.match(/\d+/);
  if (!match) {
    return null;
  }
  return parseInt(match[0], 10);
};

const buildTrackTemplates = (duration?: string): TrackTemplate[] => {
  const baseWeeks = parseWeeks(duration) || 6;

  return [
    {
      level: 'Foundation',
      duration: `${baseWeeks} weeks`,
      modules: Math.max(baseWeeks * 2, 8),
      priceCents: 0,
      locked: false,
    },
    {
      level: 'Application',
      duration: `${baseWeeks + 2} weeks`,
      modules: Math.max(baseWeeks * 2 + 4, 12),
      priceCents: 0,
      locked: false,
    },
    {
      level: 'Systems',
      duration: `${baseWeeks + 4} weeks`,
      modules: Math.max(baseWeeks * 2 + 8, 16),
      priceCents: 0,
      locked: false,
    },
    {
      level: 'Mastery',
      duration: `${baseWeeks + 6} weeks`,
      modules: Math.max(baseWeeks * 2 + 12, 20),
      priceCents: 0,
      locked: false,
    },
  ];
};

const seedCourses = async () => {
  const batch = adminDb.batch();
  const now = Timestamp.now();

  COURSE_CURRICULUM.forEach((course) => {
    if (!course.slug || !course.domain || !course.description) {
      return;
    }

    const docRef = adminDb.collection('courses').doc(course.slug);
    batch.set(
      docRef,
      {
        slug: course.slug,
        domain: course.domain,
        title: course.title || course.domain,
        description: course.description,
        level: course.level,
        category: course.category,
        duration: course.duration,
        prerequisites: course.prerequisites || [],
        learningOutcomes: course.learningOutcomes || [],
        published: course.published ?? true,
        tracks: buildTrackTemplates(course.duration),
        updatedAt: now,
        createdAt: now,
      },
      { merge: true }
    );
  });

  await batch.commit();
};

const seedLearningPaths = async () => {
  const batch = adminDb.batch();
  const now = Timestamp.now();

  Object.entries(LEARNING_PATHS).forEach(([key, path]) => {
    const docRef = adminDb.collection('learning_paths').doc(key);
    batch.set(
      docRef,
      {
        ...path,
        updatedAt: now,
        createdAt: now,
      },
      { merge: true }
    );
  });

  await batch.commit();
};

const seedDiagnosticQuestions = async () => {
  const batch = adminDb.batch();
  const now = Timestamp.now();

  diagnosticQuestions.forEach((question) => {
    const docRef = adminDb.collection('diagnostic_questions').doc(String(question.id));
    batch.set(
      docRef,
      {
        ...question,
        updatedAt: now,
        createdAt: now,
      },
      { merge: true }
    );
  });

  await batch.commit();
};

const seedPricingPlans = async () => {
  const batch = adminDb.batch();
  const now = Timestamp.now();

  pricingPlans.forEach((plan) => {
    const docRef = adminDb.collection('pricing_plans').doc(plan.id);
    batch.set(
      docRef,
      {
        ...plan,
        updatedAt: now,
        createdAt: now,
      },
      { merge: true }
    );
  });

  await batch.commit();
};

const run = async () => {
  await seedCourses();
  await seedLearningPaths();
  await seedDiagnosticQuestions();
  await seedPricingPlans();
  console.log('Firestore seed complete.');
};

run().catch((error) => {
  console.error('Firestore seed failed:', error);
  process.exit(1);
});
