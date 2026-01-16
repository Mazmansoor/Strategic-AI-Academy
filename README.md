# Zavia AI Academy - The Complete AI Reskilling Platform

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-11.1-orange?style=flat&logo=firebase)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 **The Only Platform That Takes You From Python to the C-Suite**

Zavia AI Academy is a comprehensive learning management platform designed for both **B2C professionals** and **B2B enterprise teams**. We offer the complete journey: from foundational programming to strategic executive leadership in the AI era.

### **Why Zavia?**
- **Full Spectrum**: 18 courses covering Technical → Business → Strategic skills
- **Career Transformation**: From zero coding to AI strategy leadership
- **B2C + B2B Ready**: Individual subscriptions + Team management
- **Premium Quality**: Mentorship, certificates, career coaching
- **Modern Stack**: Firebase + Next.js + Stripe for scalability

---

## 🎯 **Platform Features**

### Core Capabilities
- ✅ **Firebase Authentication** - Google Sign-In, seamless auth
- ✅ **Cloud Firestore** - Real-time, scalable NoSQL database
- ✅ **Stripe Payments** - Tiered subscriptions (Basic, Pro, Enterprise, Team)
- ✅ **Course Management** - 18 courses from Python to Executive Leadership
- ✅ **Team Features** - Admin dashboards, member management, analytics
- ✅ **Progress Tracking** - Individual and team-level analytics
- ✅ **Diagnostic Assessment** - Skill-level evaluation with radar charts
- ✅ **Responsive UI** - Tailwind CSS + Lucide icons
- ✅ **Docker Support** - Containerized deployment ready

### Advanced Features
- 🔥 Real-time progress sync across devices
- 📊 Team analytics & reporting
- 🎓 Certificate generation
- 💬 Community forums
- 🎯 Personalized learning paths
- 📱 Mobile-responsive design

## 📚 **Course Catalog**

### Technical Foundation Track
1. **Python Fundamentals** (Beginner, 6 weeks)
2. **Advanced Python & OOP** (Intermediate, 8 weeks)
3. **SQL & Database Design** (Beginner, 6 weeks)
4. **Data Science with Python** (Intermediate, 10 weeks)
5. **Machine Learning Fundamentals** (Intermediate, 12 weeks)
6. **Deep Learning & Neural Networks** (Advanced, 14 weeks)
7. **LLMs & Prompt Engineering** (Intermediate, 8 weeks)
8. **Agentic AI & RAG Systems** (Advanced, 10 weeks)
9. **MLOps & Production ML** (Advanced, 10 weeks)

### Business & Strategy Track
10. **Data-Driven Decision Making** (Intermediate, 8 weeks)
11. **Product Management for AI** (Intermediate, 10 weeks)
12. **AI Strategy & Transformation** (Advanced, 12 weeks)
13. **Strategic Thinking & Planning** (Advanced, 10 weeks)
14. **Executive Leadership in the AI Era** (Expert, 12 weeks)

### Specialty Tracks
15. **Cloud Architecture (AWS/GCP/Azure)** (Intermediate, 12 weeks)
16. **DevOps & CI/CD** (Intermediate, 10 weeks)
17. **Cybersecurity Essentials** (Intermediate, 8 weeks)

**Total**: 18 courses, 170+ weeks of content

---

## 💰 **Pricing**

### B2C (Individuals)
- **Free**: 3 beginner courses, community access
- **Basic**: $29/month - All 18 courses
- **Pro**: $99/month - Basic + mentorship, certificates, career coaching
- **Enterprise**: $199/month - Pro + unlimited mentorship

### B2B (Teams)
- **Team**: $49/user/month (min 5 seats) - All Pro features + team dashboard
- **Enterprise**: Custom - SSO, LMS integration, custom content

See [PRICING_STRATEGY.md](PRICING_STRATEGY.md) for full details.

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Firebase Project

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init
# Select: Firestore, Storage, Hosting (optional)
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

Required variables:
- Firebase credentials (from Firebase Console)
- Stripe API keys (from Stripe Dashboard)
- Firebase Admin credentials (service account JSON)

### 4. Deploy Firestore Rules & Indexes

```bash
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

### 5. Set Up Stripe Products

Create products in Stripe Dashboard:
- Basic Monthly/Yearly
- Pro Monthly/Yearly
- Team per-seat pricing
- Enterprise custom pricing

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 7. Run Firebase Emulators (Optional)

```bash
npm run firebase:emulators
```

---

## 📖 **Documentation**

- [Firebase Migration Guide](FIREBASE_MIGRATION.md) - Detailed migration steps
- [Pricing Strategy](PRICING_STRATEGY.md) - B2C & B2B pricing breakdown
- [Deployment Guide](DEPLOYMENT.md) - Production deployment
- [API Documentation](API_DOCS.md) - API endpoints (coming soon)

## 📁 Project Structure

```
nextjs-app/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── api/               # API routes
│   │   ├── (auth)/           # Auth pages (login, signup)
│   │   ├── dashboard/        # User dashboard
│   │   ├── courses/          # Course pages
│   │   └── layout.tsx        # Root layout
│   ├── components/            # React components
│   ├── lib/                   # Utilities
│   │   ├── db/               # Database functions
│   │   ├── auth.ts           # NextAuth config
│   │   └── stripe.ts         # Stripe config
│   └── types/                 # TypeScript types
├── public/                    # Static files
└── package.json
```

## 🔑 Key Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Vercel Postgres Database
- ✅ NextAuth.js Authentication
- ✅ Stripe Payment Integration
- ✅ Course Progress Tracking
- ✅ Diagnostic Assessment
- ✅ User Dashboard

## 📊 Database Schema

### Tables:
- `users` - User accounts
- `diagnostic_results` - Quiz results
- `courses` - Course information
- `course_tracks` - Individual course levels
- `enrollments` - User course enrollments
- `user_progress` - Module completion tracking
- `subscriptions` - Stripe subscriptions
- `payments` - Payment records

## 🌐 Deployment

### Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Environment Variables on Vercel

Make sure to add all environment variables from `.env.local` to your Vercel project settings.

## 📝 Development Notes

### Adding a New API Route

Create a file in `src/app/api/your-route/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello' });
}
```

### Protected Routes

Use NextAuth session in server components:

```typescript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const session = await getServerSession(authOptions);
if (!session) {
  redirect('/login');
}
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Database**: Firebase Firestore 11.1
- **Auth**: Firebase Authentication (Google Sign-In)
- **Storage**: Firebase Cloud Storage
- **Payments**: Stripe 17.5
- **Charts**: Recharts 2.15
- **Icons**: Lucide React 0.460
- **Validation**: Zod 3.24
- **Deployment**: Firebase Hosting / Cloud Run / Vercel / Docker

### Why Firebase?
- **Simplified Backend**: No server management
- **Real-time Sync**: Live progress updates across devices
- **Generous Free Tier**: 50K reads/day, 20K writes/day
- **Scalability**: Auto-scales with usage
- **Unified Ecosystem**: Auth + Database + Storage + Hosting
- **Cost Effective**: ~$10-30/month initially vs $40-70 with Postgres

## 🔧 Additional Scripts

```bash
# Type checking
npm run type-check

# Linting with auto-fix
npm run lint:fix

# Code formatting
npm run format

# Check formatting without changes
npm run format:check
```

## 🐛 Troubleshooting

### Common Issues

**Database Connection Errors**
- Verify your `POSTGRES_URL` is correct in `.env.local`
- Check if the database is accessible from your network
- Ensure database tables are created (run schema.sql)

**NextAuth Session Issues**
- Generate a new `NEXTAUTH_SECRET` using `openssl rand -base64 32`
- Ensure `NEXTAUTH_URL` matches your app URL

**Stripe Webhook Failures**
- For local development, use Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- Ensure `STRIPE_WEBHOOK_SECRET` matches your webhook endpoint

**Build Errors**
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Run type checking: `npm run type-check`

## 📧 Support

For issues or questions, create an issue on GitHub.

## 📄 License

MIT License - see LICENSE file for details.
