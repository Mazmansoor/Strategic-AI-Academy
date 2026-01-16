import { Timestamp } from 'firebase/firestore';

// User types
export type SubscriptionTier = 'free' | 'basic' | 'pro' | 'enterprise' | 'team';
export type SubscriptionStatus = 'active' | 'inactive' | 'cancelled' | 'past_due' | 'trial';
export type UserRole = 'individual' | 'team_member' | 'team_admin';

export interface UserSubscription {
  tier: SubscriptionTier;
  status: SubscriptionStatus;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  currentPeriodStart?: Timestamp;
  currentPeriodEnd?: Timestamp;
  cancelAt?: Timestamp;
}

export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  subscription: UserSubscription;
  teamId?: string;
  role: UserRole;
  createdAt: Timestamp;
  lastLoginAt: Timestamp;
}

// Course types
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type CourseCategory = 'technical' | 'business' | 'strategic' | 'specialty';
export type ContentType = 'video' | 'text' | 'quiz' | 'project' | 'interactive';

export interface CoursePricing {
  free?: number; // 0 for included in free tier
  basic: number;
  pro: number;
  enterprise: number;
}

export interface Course {
  id: string;
  slug: string;
  domain: string;
  title: string;
  description: string;
  level: CourseLevel;
  category: CourseCategory;
  duration: string; // e.g., "8 weeks", "40 hours"
  price: CoursePricing;
  prerequisites: string[]; // Course IDs
  learningOutcomes: string[];
  instructor?: string;
  published: boolean;
  thumbnail?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CourseModule {
  id: string;
  courseId: string;
  order: number;
  title: string;
  description: string;
  duration: string; // e.g., "45 minutes"
  contentType: ContentType;
  contentUrl?: string; // Cloud Storage URL
  transcript?: string;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
  quiz?: Quiz;
}

export interface Quiz {
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  }>;
  passingScore: number;
}

// Enrollment types
export type EnrollmentStatus = 'active' | 'completed' | 'expired' | 'paused';

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  trackLevel: string;
  enrolledAt: Timestamp;
  expiresAt?: Timestamp;
  status: EnrollmentStatus;
  completedAt?: Timestamp;
}

// Progress types
export interface Progress {
  id: string;
  userId: string;
  courseId: string;
  moduleId: string;
  completed: boolean;
  completedAt?: Timestamp;
  timeSpent: number; // seconds
  quizScore?: number;
  lastAccessedAt: Timestamp;
}

// Team types
export type TeamSubscriptionTier = 'team' | 'enterprise';
export type TeamMemberRole = 'admin' | 'member' | 'viewer';

export interface TeamSubscription {
  tier: TeamSubscriptionTier;
  status: SubscriptionStatus;
  seats: number;
  seatsUsed: number;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  currentPeriodStart: Timestamp;
  currentPeriodEnd: Timestamp;
  pricePerSeat: number;
}

export interface Team {
  id: string;
  name: string;
  createdBy: string; // userId
  createdAt: Timestamp;
  subscription: TeamSubscription;
  settings: {
    allowSelfEnrollment: boolean;
    learningPaths?: string[]; // Course IDs
    emailDomain?: string; // For auto-join
  };
}

export interface TeamMember {
  id: string;
  teamId: string;
  userId: string;
  email: string;
  displayName: string | null;
  role: TeamMemberRole;
  joinedAt: Timestamp;
  invitedBy: string; // userId
}

// Payment types
export type PaymentStatus = 'pending' | 'succeeded' | 'failed' | 'refunded';

export interface Payment {
  id: string;
  userId: string;
  teamId?: string;
  stripePaymentIntentId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  description?: string;
  createdAt: Timestamp;
}

// Diagnostic types
export interface DiagnosticResult {
  id: string;
  userId: string;
  overallScore: number;
  level: string;
  domainScores: {
    [domain: string]: number;
  };
  recommendations: string[];
  completedAt: Timestamp;
}

// Analytics types
export interface CourseAnalytics {
  courseId: string;
  enrollments: number;
  completions: number;
  avgCompletionTime: number; // days
  avgRating: number;
  activeUsers: number;
}

export interface TeamAnalytics {
  teamId: string;
  totalMembers: number;
  activeMembers: number;
  coursesInProgress: number;
  coursesCompleted: number;
  avgCompletionRate: number;
  topPerformers: Array<{
    userId: string;
    coursesCompleted: number;
  }>;
}
