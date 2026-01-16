import { adminDb } from '@/lib/firebase/admin';
import { Timestamp } from 'firebase-admin/firestore';

type CourseTrack = {
  level: string;
  duration: string;
  modules: number;
  priceCents: number;
  locked: boolean;
  priceId?: string;
};

type CourseDoc = {
  slug: string;
  domain: string;
  title?: string;
  description?: string;
  tracks?: CourseTrack[];
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
};

const formatTrack = (track: CourseTrack, courseId: string) => ({
  id: `${courseId}-${track.level}`,
  level: track.level,
  duration: track.duration,
  modules: track.modules,
  price_cents: track.priceCents,
  locked: track.locked,
  price_id: track.priceId || '',
});

const formatCourse = (docId: string, data: CourseDoc) => ({
  id: docId,
  slug: data.slug || docId,
  domain: data.domain,
  description: data.description || '',
  tracks: (data.tracks || []).map((track) => formatTrack(track, docId)),
});

export async function getAllCourses() {
  const snapshot = await adminDb.collection('courses').get();
  return snapshot.docs.map((doc) => formatCourse(doc.id, doc.data() as CourseDoc));
}

export async function getCourseBySlug(slug: string) {
  const courseRef = adminDb.collection('courses').doc(slug);
  const courseSnap = await courseRef.get();
  if (!courseSnap.exists) {
    return [];
  }
  return [formatCourse(courseSnap.id, courseSnap.data() as CourseDoc)];
}

export async function getUserEnrollments(userId: string) {
  const enrollmentsRef = adminDb
    .collection('users')
    .doc(userId)
    .collection('enrollments');
  const enrollmentsSnap = await enrollmentsRef.orderBy('enrolledAt', 'desc').get();

  if (enrollmentsSnap.empty) {
    return [];
  }

  const enrollmentDocs = enrollmentsSnap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as {
      courseId: string;
      trackLevel: string;
      status: string;
      enrolledAt: Timestamp;
    }),
  }));

  const uniqueCourseIds = Array.from(
    new Set(enrollmentDocs.map((enrollment) => enrollment.courseId))
  );

  const courseSnapshots = await Promise.all(
    uniqueCourseIds.map((courseId) => adminDb.collection('courses').doc(courseId).get())
  );

  const courseMap = new Map(
    courseSnapshots
      .filter((snap) => snap.exists)
      .map((snap) => [snap.id, snap.data() as CourseDoc])
  );

  return enrollmentDocs.map((enrollment) => {
    const course = courseMap.get(enrollment.courseId);
    return {
      id: enrollment.id,
      course_id: enrollment.courseId,
      track_level: enrollment.trackLevel,
      status: enrollment.status,
      enrolled_at: enrollment.enrolledAt?.toDate(),
      domain: course?.domain || '',
      slug: course?.slug || enrollment.courseId,
    };
  });
}

export async function createEnrollment(userId: string, courseId: string, trackLevel: string) {
  const enrollmentRef = adminDb
    .collection('users')
    .doc(userId)
    .collection('enrollments')
    .doc(`${courseId}-${trackLevel}`);

  await enrollmentRef.set(
    {
      courseId,
      trackLevel,
      status: 'active',
      enrolledAt: Timestamp.now(),
    },
    { merge: true }
  );

  const enrollmentSnap = await enrollmentRef.get();
  return {
    id: enrollmentSnap.id,
    ...enrollmentSnap.data(),
  };
}

export async function saveDiagnosticResult(data: {
  userId?: string;
  email: string;
  overallScore: number;
  level: string;
  domainScores: Record<string, number>;
  recommendations: string[];
}) {
  const payload = {
    userId: data.userId || null,
    email: data.email || '',
    overallScore: data.overallScore,
    level: data.level,
    domainScores: data.domainScores,
    recommendations: data.recommendations,
    completedAt: Timestamp.now(),
  };

  if (data.userId) {
    const docRef = await adminDb
      .collection('users')
      .doc(data.userId)
      .collection('diagnostics')
      .add(payload);
    return { id: docRef.id, ...payload };
  }

  const docRef = await adminDb.collection('diagnostics').add(payload);
  return { id: docRef.id, ...payload };
}

export async function getUserProgress(userId: string, courseId: string, trackLevel: string) {
  const progressRef = adminDb
    .collection('users')
    .doc(userId)
    .collection('progress');
  const snapshot = await progressRef
    .where('courseId', '==', courseId)
    .where('trackLevel', '==', trackLevel)
    .orderBy('moduleNumber', 'asc')
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as {
      courseId: string;
      trackLevel: string;
      moduleNumber: number;
      completed: boolean;
      completedAt?: Timestamp;
    }),
  }));
}

export async function updateModuleProgress(
  userId: string,
  courseId: string,
  trackLevel: string,
  moduleNumber: number,
  completed: boolean
) {
  const progressRef = adminDb
    .collection('users')
    .doc(userId)
    .collection('progress')
    .doc(`${courseId}-${trackLevel}-${moduleNumber}`);

  const completedAt = completed ? Timestamp.now() : null;

  await progressRef.set(
    {
      courseId,
      trackLevel,
      moduleNumber,
      completed,
      completedAt,
      lastAccessedAt: Timestamp.now(),
    },
    { merge: true }
  );

  const progressSnap = await progressRef.get();
  return {
    id: progressSnap.id,
    ...progressSnap.data(),
  };
}
