# Zavia AI Academy - Pricing Strategy

## Market Positioning
**"The One-Stop AI Reskilling Platform: From Python to Strategic Mastery"**

We position ourselves as the **only platform** that takes professionals from zero programming knowledge all the way to C-suite strategic AI leadership. Our competitors either focus on technical skills OR business skills - we're the bridge.

## Target Audiences

### B2C (Individual Learners)
- Career switchers entering AI/ML
- Software engineers upskilling
- Data professionals expanding to AI
- Mid-level managers learning technical foundations
- Executives seeking AI literacy

### B2B (Corporate Teams)
- Tech companies upskilling teams
- Enterprises undergoing digital transformation
- Consulting firms training consultants
- Startups building AI capabilities
- Government agencies modernizing workforce

## Pricing Tiers

### B2C PRICING

#### Free Tier
**$0/month**
- Access to 3 beginner courses
  - Python Fundamentals
  - SQL & Database Design
  - LLMs & Prompt Engineering (basics)
- Community forum access
- Limited diagnostic assessment
- **Goal**: Lead generation, taste of quality

#### Basic Plan
**$29/month** or **$290/year** (17% savings)
- Full access to ALL 18 courses
- All technical & business courses
- Progress tracking & analytics
- Community forum + office hours
- Downloadable resources
- Email support (48hr response)
- **Target**: Individual learners, hobbyists

#### Pro Plan (Most Popular)
**$99/month** or **$990/year** (17% savings)
- Everything in Basic, plus:
- 1:1 mentorship (2 sessions/month)
- Career coaching & resume review
- Official certificates
- Priority support (24hr response)
- Access to exclusive webinars
- Job placement assistance
- Private Slack/Discord community
- **Target**: Serious career switchers, professionals

#### Enterprise Individual
**$199/month** (custom yearly)
- Everything in Pro, plus:
- Unlimited 1:1 mentorship
- Custom learning path
- Direct instructor access
- Executive coaching (for leadership courses)
- Speaking opportunities
- Lifetime access to content
- **Target**: Executives, high-earners

---

### B2B PRICING

#### Team Plan
**$49/user/month** (minimum 5 seats)
**$39/user/month** if annual (20% savings)

**Includes:**
- All Pro plan features for each team member
- Team admin dashboard
- Learning path assignment
- Progress analytics & reporting
- Bulk certificate generation
- Dedicated account manager
- Priority support
- Custom branding (logo on certificates)
- **Target**: Small-medium teams (5-50 people)

#### Enterprise Plan
**Custom pricing** (starting ~$5,000/month for 50+ seats)

**Includes:**
- Everything in Team plan, plus:
- SSO integration (SAML, OAuth)
- LMS/LXP integration (Workday, Cornerstone, etc.)
- Custom course development
- On-site/virtual workshops
- White-label option
- Advanced analytics (skills gap analysis)
- API access
- Dedicated success manager
- SLA guarantees
- **Target**: Large enterprises (50+ people)

## Revenue Projections

### Year 1 Goals
- **B2C**: 500 Free, 200 Basic, 100 Pro, 10 Enterprise = **$13,000/month**
- **B2B**: 3 Team clients (avg 15 seats each) = **$6,615/month**
- **Total MRR**: **~$20,000**
- **Annual Run Rate**: **~$240,000**

### Year 2 Goals
- **B2C**: 2,000 Free, 800 Basic, 400 Pro, 50 Enterprise = **$59,000/month**
- **B2B**: 15 Team clients + 3 Enterprise = **$35,000/month**
- **Total MRR**: **~$94,000**
- **Annual Run Rate**: **~$1.1M**

### Year 3 Goals
- **B2C**: 5,000 Free, 2,000 Basic, 1,000 Pro, 200 Enterprise = **$177,000/month**
- **B2B**: 40 Team clients + 10 Enterprise = **$120,000/month**
- **Total MRR**: **~$297,000**
- **Annual Run Rate**: **~$3.5M**

## Competitive Analysis

### Competitors & Pricing

**Technical-Only Platforms:**
- Coursera: $39-79/month (single vertical)
- Udacity: $399/month (nanodegrees)
- DataCamp: $25-39/month (data science only)
- Pluralsight: $29-45/month (tech skills)

**Business-Only Platforms:**
- MasterClass: $10-20/month (entertainment focus)
- LinkedIn Learning: $40/month (broad, shallow)
- Reforge: $2,000-3,000/course (expensive)

**Our Advantage:**
- Full spectrum: Technical → Strategic
- Integrated learning paths
- Career-focused outcomes
- Community + mentorship
- More affordable than Udacity/Reforge
- More comprehensive than Coursera/DataCamp

## Pricing Psychology

### Anchoring
- Free tier establishes trust
- $99/month Pro is anchored against $199/month Enterprise
- Annual plans show "savings" percentage

### Value Perception
- "18 courses" = tangible value
- "Python to C-Suite" = transformation story
- Certificates & mentorship = career outcomes
- Team features = organizational impact

### Conversion Funnel
1. **Free tier** → taste of content (10% convert)
2. **Basic** → hook with full access (30% convert to Pro after 3 months)
3. **Pro** → serious learners (5% become enterprise advocates)
4. **Enterprise** → high LTV customers (referrals to B2B)

## Discounts & Promotions

### Launch Pricing
- First 100 users: 50% off first year
- Annual plans: Always 17% discount
- Student discount: 30% off (verify with email)

### Referral Program
- Refer a friend: Both get 1 month free
- Refer 5 friends: Get Pro for life
- Corporate referrals: $500 credit per closed deal

### Non-Profit/Education
- 40% discount for .edu, .gov, .org emails
- Free team licenses for code.org partners

## Stripe Integration

### Products to Create in Stripe

**B2C Products:**
1. Basic Monthly ($29)
2. Basic Yearly ($290)
3. Pro Monthly ($99)
4. Pro Yearly ($990)
5. Enterprise Individual (custom)

**B2B Products:**
6. Team Monthly (per seat, $49)
7. Team Yearly (per seat, $468)
8. Enterprise (custom quotes)

### Webhooks to Handle
- `checkout.session.completed` → Create subscription
- `customer.subscription.updated` → Update tier
- `customer.subscription.deleted` → Downgrade/cancel
- `invoice.payment_succeeded` → Extend access
- `invoice.payment_failed` → Suspend access

## Sales Strategy

### B2C Acquisition
- SEO/Content marketing (blog, YouTube)
- Free course advertising
- LinkedIn organic + ads
- Reddit (r/learnprogramming, r/datascience)
- Testimonials & case studies

### B2B Acquisition
- Outbound to HR/L&D leaders
- LinkedIn Sales Navigator
- Partner with training consultants
- Conference speaking
- Free pilot programs (5 seats, 30 days)

## Success Metrics

### B2C
- Free → Basic conversion: >10%
- Basic → Pro conversion: >20%
- Monthly churn: <5%
- Course completion rate: >60%
- NPS: >50

### B2B
- Demo → Pilot conversion: >30%
- Pilot → Paid conversion: >50%
- Logo churn: <10% annually
- Seats expansion: >20% YoY
- NPS: >60

## Future Pricing Moves

### Add-Ons (Year 2+)
- Certification exams ($99 each)
- Career services package ($299)
- Custom mentorship hours ($150/hr)
- Corporate workshops ($5,000/day)

### Potential Tier Adjustments
- Raise Basic to $39/month after reaching 500 paid users
- Introduce "Starter" tier at $19/month (limited courses)
- Premium Enterprise tier with guaranteed outcomes

## Conclusion

Our pricing strategy balances:
1. **Accessibility** - Free & Basic tiers for broad reach
2. **Value** - Pro tier with mentorship is core offering
3. **Scalability** - B2B drives revenue growth
4. **Flexibility** - Custom enterprise deals for large logos

The key differentiator: We're selling **transformation**, not just courses. From Python to the boardroom. That's worth a premium.
