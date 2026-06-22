# ComponentsHub — Full-Stack Marketplace

A production-ready Next.js marketplace for premium Tailwind CSS components and templates, with authentication, payments, subscriptions, admin dashboard, and secure downloads.

## Tech Stack

| Layer       | Technology                            |
|-------------|---------------------------------------|
| Frontend    | Next.js 14 App Router, TypeScript     |
| Styling     | Tailwind CSS, Framer Motion           |
| Auth        | Auth.js v5 (NextAuth) + Prisma Adapter|
| Database    | PostgreSQL + Prisma ORM               |
| Storage     | AWS S3 or Supabase Storage            |
| Payments    | Razorpay (Stripe-ready architecture)  |
| Validation  | Zod + React Hook Form                 |
| File Upload | React Dropzone                        |

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Fill in your values:

```env
# Required
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/componentshub"
AUTH_SECRET="generate with: openssl rand -base64 32"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Razorpay (get from razorpay.com/dashboard)
RAZORPAY_KEY_ID="rzp_test_..."
RAZORPAY_KEY_SECRET="..."
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_..."

# Storage — choose one:
# AWS S3
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="ap-south-1"
AWS_S3_BUCKET="componentshub-files"

# OR Supabase
USE_SUPABASE="true"
SUPABASE_URL="https://xxx.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="..."
SUPABASE_STORAGE_BUCKET="products"
```

### 3. Set up the database

```bash
# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed with sample data
npm run db:seed
```

### 4. Start development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

**Default credentials after seeding:**
- Admin: `admin@componentshub.com` / `admin123`
- User:  `demo@componentshub.com`  / `user1234`

---

## Project Structure

```
demo-component/
├── app/
│   ├── admin/                    ← Admin dashboard (role-gated)
│   │   ├── page.tsx              ← Overview with charts
│   │   ├── products/             ← CRUD with drag-and-drop upload
│   │   ├── categories/           ← Category management
│   │   ├── orders/               ← Order history
│   │   ├── users/                ← User management + role control
│   │   ├── reviews/              ← Review moderation
│   │   └── subscriptions/        ← Subscriber management
│   ├── api/
│   │   ├── auth/[...nextauth]/   ← Auth.js handler
│   │   ├── download/[productId]/ ← Secure signed download URL
│   │   ├── products/             ← Public product listing API
│   │   └── webhooks/razorpay/    ← Payment webhook handler
│   ├── dashboard/                ← User dashboard (auth-gated)
│   ├── components/               ← Component library browser
│   ├── templates/                ← Template browser
│   ├── login/ register/          ← Auth pages (real server actions)
│   ├── pricing/                  ← Subscription plans
│   ├── sitemap.ts                ← Dynamic SEO sitemap
│   └── robots.ts                 ← Robots.txt
├── components/
│   ├── admin/                    ← Admin-specific components
│   │   ├── AdminSidebar.tsx
│   │   ├── AdminHeader.tsx
│   │   ├── ProductForm.tsx       ← Drag-and-drop upload form
│   │   ├── DeleteProductButton.tsx
│   │   └── UpdateUserRoleButton.tsx
│   ├── ui/
│   │   ├── PaymentButton.tsx     ← Razorpay product purchase
│   │   └── SubscribeButton.tsx   ← Razorpay subscription
│   ├── home/                     ← Landing page sections
│   └── layout/                   ← Navbar, Footer, wrappers
├── lib/
│   ├── prisma.ts                 ← Prisma client singleton
│   ├── storage.ts                ← S3 / Supabase abstraction
│   ├── razorpay.ts               ← Razorpay helpers
│   ├── data.ts                   ← Static/fallback data
│   ├── utils.ts                  ← Utility functions
│   └── actions/
│       ├── auth.actions.ts       ← Register, login, logout
│       ├── product.actions.ts    ← CRUD, save, review, access check
│       ├── payment.actions.ts    ← Order creation + verification
│       ├── download.actions.ts   ← Secure download with access gate
│       └── admin.actions.ts      ← Admin stats, user/review mgmt
├── prisma/
│   ├── schema.prisma             ← Full DB schema (9 models)
│   └── seed.ts                   ← Sample data seeder
├── types/
│   └── next-auth.d.ts            ← Session type augmentation
├── middleware.ts                 ← Auth + role-based routing
└── auth.ts                       ← NextAuth v5 configuration
```

---

## User Roles & Access

| Feature                     | Guest | User | Premium | Admin |
|-----------------------------|-------|------|---------|-------|
| Browse components            | ✅   | ✅   | ✅      | ✅   |
| Download free components     | ❌   | ✅   | ✅      | ✅   |
| Download premium components  | ❌   | ❌   | ✅      | ✅   |
| Purchase individual products | ❌   | ✅   | ✅      | ✅   |
| Subscribe to Pro plan        | ❌   | ✅   | ✅      | ✅   |
| Admin dashboard              | ❌   | ❌   | ❌      | ✅   |
| Upload products              | ❌   | ❌   | ❌      | ✅   |

---

## Download Logic

```
requestDownload(productId)
├── Not logged in          → "Please sign in"
├── Product is free        → Allow immediately
├── User has active Sub    → Allow
├── User has purchase Order→ Allow
└── None of the above      → "Upgrade to Premium or purchase"
```

Downloads generate a **signed, time-limited URL** (5 min) from S3/Supabase — the actual file is never exposed publicly.

---

## Subscription Plans

| Plan    | Price     | Duration | Access              |
|---------|-----------|----------|---------------------|
| Starter | ₹499/mo   | 30 days  | All premium content |
| Pro     | ₹3999/yr  | 365 days | All premium content |

Prices are in `lib/razorpay.ts` — change `PLAN_PRICES` to update.

---

## Switching to Stripe (Future)

1. Add `stripe` to dependencies
2. Create `lib/stripe.ts` mirroring `lib/razorpay.ts`
3. Add `verifyStripePayment` in `payment.actions.ts`
4. Add `/api/webhooks/stripe/route.ts`
5. Replace `PaymentButton` with a Stripe Elements version

The payment action layer is designed for this — `Order.paymentProvider` already supports both `RAZORPAY` and `STRIPE`.

---

## Deployment

### Vercel (recommended)

```bash
vercel deploy
```

Set all env vars in Vercel dashboard. Enable **Edge Runtime** for middleware.

### Self-hosted

```bash
npm run build
npm run start
```

Requires Node.js 18+, PostgreSQL, and network access to S3/Supabase.
