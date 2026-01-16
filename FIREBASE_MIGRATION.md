# Firebase Migration Guide

## Overview
Migration from Vercel Postgres + NextAuth to Firebase (Firestore + Firebase Auth) for simplified backend management and scalability.

## Firebase Services Used

### 1. **Firebase Authentication**
- Google Sign-In (primary)
- Email/Password (optional backup)
- No session management complexity
- Built-in security token refresh

### 2. **Cloud Firestore**
- NoSQL document database
- Real-time sync capabilities
- Generous free tier (50K reads/day, 20K writes/day)
- Auto-scaling

### 3. **Cloud Storage**
- Course content (videos, PDFs)
- User-generated content
- Certificate storage

### 4. **Cloud Functions** (Optional - for backend logic)
- Stripe webhook handlers
- Certificate generation
- Email notifications

## Firestore Data Schema

### Collections Structure

```
/users/{userId}
  - email: string
  - displayName: string
  - photoURL: string
  - createdAt: timestamp
  - subscription: {
      tier: 'basic' | 'pro' | 'enterprise'
      status: 'active' | 'inactive' | 'cancelled'
      stripeCustomerId: string
      currentPeriodEnd: timestamp
    }
  - teamId: string (optional)
  - role: 'individual' | 'team_member' | 'team_admin'

  /enrollments/{enrollmentId}
    - courseId: string
    - trackLevel: string
    - enrolledAt: timestamp
    - expiresAt: timestamp
    - status: 'active' | 'completed' | 'expired'

  /progress/{progressId}
    - courseId: string
    - moduleId: string
    - completed: boolean
    - completedAt: timestamp
    - timeSpent: number (seconds)
    - quizScore: number (optional)

  /diagnostics/{diagnosticId}
    - overallScore: number
    - level: string
    - domainScores: map
    - completedAt: timestamp

/teams/{teamId}
  - name: string
  - createdBy: string (userId)
  - createdAt: timestamp
  - subscription: {
      tier: 'team' | 'enterprise'
      status: string
      seats: number
      seatsUsed: number
      stripeCustomerId: string
    }
  - settings: map

  /members/{memberId}
    - userId: string
    - email: string
    - role: 'admin' | 'member'
    - joinedAt: timestamp

  /subscriptions/{subscriptionId}
    - stripeSubscriptionId: string
    - status: string
    - currentPeriodStart: timestamp
    - currentPeriodEnd: timestamp

/courses/{courseId}
  - slug: string
  - domain: string
  - title: string
  - description: string
  - level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  - category: 'technical' | 'business' | 'strategic'
  - duration: string
  - price: {
      basic: number
      pro: number
      enterprise: number
    }
  - prerequisites: array<string>
  - learningOutcomes: array<string>
  - published: boolean

  /modules/{moduleId}
    - order: number
    - title: string
    - description: string
    - duration: string
    - contentType: 'video' | 'text' | 'quiz' | 'project'
    - contentUrl: string (Cloud Storage URL)

  /tracks/{trackId}
    - level: string
    - duration: string
    - modulesCount: number

/subscriptions/{subscriptionId}
  - userId: string (or teamId)
  - stripeSubscriptionId: string
  - stripeCustomerId: string
  - status: 'active' | 'cancelled' | 'past_due'
  - tier: 'basic' | 'pro' | 'enterprise'
  - currentPeriodStart: timestamp
  - currentPeriodEnd: timestamp

/payments/{paymentId}
  - userId: string
  - stripePaymentIntentId: string
  - amount: number
  - currency: string
  - status: string
  - createdAt: timestamp
```

## Pricing Tiers

### B2C (Individual)
- **Basic**: $29/month - Access to all courses, community support
- **Pro**: $99/month - Basic + 1:1 mentorship, certificates, priority support
- **Enterprise**: Custom - Pro + custom learning paths, dedicated account manager

### B2B (Teams)
- **Team**: $49/user/month (min 5 users) - All Pro features + team dashboard
- **Enterprise**: Custom - Team + SSO, LMS integration, custom content, analytics

## Migration Steps

### Phase 1: Setup Firebase Project
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in project
firebase init

# Select:
# - Firestore
# - Storage
# - Hosting (optional)
# - Functions (optional)
```

### Phase 2: Update Dependencies
```bash
npm install firebase firebase-admin
npm install @stripe/firestore-stripe-payments
npm uninstall next-auth @vercel/postgres
```

### Phase 3: Environment Variables
Update `.env.local`:
```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

# Firebase Admin (Server-side)
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=

# Stripe (keep existing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# App
NEXT_PUBLIC_APP_URL=
```

### Phase 4: Data Migration
1. Export existing Postgres data
2. Transform to Firestore schema
3. Import using Firebase Admin SDK
4. Verify data integrity
5. Run parallel for testing period

### Phase 5: Code Updates
- Replace NextAuth with Firebase Auth
- Replace SQL queries with Firestore queries
- Update API routes
- Update React components with Firebase SDK

### Phase 6: Testing
- Test authentication flows
- Test payment processing
- Test team features
- Load testing
- Security audit

### Phase 7: Deployment
- Deploy Firestore rules & indexes
- Deploy Cloud Functions (if any)
- Deploy Next.js app to Cloud Run or Vercel
- Update DNS/domain settings
- Monitor for issues

## Cost Comparison

### Current (Vercel Postgres)
- Postgres: ~$20-50/month
- Vercel Hosting: $20/month (Pro)
- Total: ~$40-70/month

### New (Firebase)
- Firestore: Free tier covers most early usage
- Storage: ~$0.026/GB/month
- Cloud Run (if used): Pay per use (~$10-30/month)
- Total: ~$10-30/month initially, scales with usage

## Rollback Plan
- Keep Postgres database for 30 days post-migration
- Feature flags for gradual rollout
- Quick rollback scripts ready
- Database backup before migration

## Course Curriculum Structure

### Technical Foundation Track
1. **Python Fundamentals** (Beginner)
2. **Advanced Python & OOP** (Intermediate)
3. **Data Science with Python** (Intermediate)
4. **SQL & Database Design** (Beginner-Intermediate)
5. **Machine Learning Fundamentals** (Intermediate)
6. **Deep Learning & Neural Networks** (Advanced)
7. **LLMs & Prompt Engineering** (Intermediate)
8. **Agentic AI & RAG Systems** (Advanced)
9. **MLOps & Production ML** (Advanced)

### Business & Strategy Track
10. **Data-Driven Decision Making** (Intermediate)
11. **Product Management for AI** (Intermediate)
12. **AI Strategy & Transformation** (Advanced)
13. **Strategic Thinking & Planning** (Advanced)
14. **Executive Leadership in the AI Era** (Expert)

### Specialty Tracks
15. **Cloud Architecture (AWS/GCP/Azure)** (Intermediate-Advanced)
16. **DevOps & CI/CD** (Intermediate)
17. **Cybersecurity Essentials** (Intermediate)

## Team Features (Phase 1)

### Team Admin Dashboard
- Invite team members
- Manage licenses/seats
- View team progress analytics
- Assign learning paths
- Download reports

### Team Member Features
- View assigned courses
- Track personal progress
- Compare with team benchmarks
- Team discussion boards

## Success Metrics
- User acquisition cost < $50
- Monthly churn < 5%
- Team conversion rate > 15%
- Course completion rate > 60%
- NPS > 50
