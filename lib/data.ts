// ─── Centralised dummy data ───────────────────────────────────────────────────
// Replace these with real API calls when the backend is ready.

export interface Component {
  id: string
  title: string
  description: string
  category: string
  isPremium: boolean
  downloads: number
  likes: number
  author?: string
  updatedAt?: string
  tags?: string[]
}

export interface Template {
  id: string
  title: string
  description: string
  category: string
  price: number
  isPremium: boolean
  pages: number
  components: number
}

// ─── Components ───────────────────────────────────────────────────────────────
export const allComponents: Component[] = [
  { id: "hero-1",         title: "Modern Hero Section",     description: "A beautiful, responsive hero section with gradient backgrounds and animated elements.",         category: "Hero",         isPremium: false, downloads: 1234, likes: 89,  author: "Sarah Chen",    updatedAt: "May 15, 2024", tags: ["Hero","Landing","Gradient","Animated"] },
  { id: "hero-2",         title: "Startup Hero",            description: "Clean startup hero with value proposition and CTA buttons.",                                   category: "Hero",         isPremium: false, downloads: 856,  likes: 67,  author: "Alex Rivera",   updatedAt: "May 12, 2024", tags: ["Hero","Startup","Minimal"] },
  { id: "hero-3",         title: "SaaS Hero Dark",          description: "Dark-themed hero section with animated gradient and floating UI elements.",                    category: "Hero",         isPremium: true,  downloads: 1102, likes: 94,  author: "Emma Watson",   updatedAt: "May 10, 2024", tags: ["Hero","Dark","SaaS"] },
  { id: "pricing-1",      title: "SaaS Pricing Table",      description: "Clean pricing cards with monthly/yearly toggle and feature comparison.",                       category: "Pricing",      isPremium: true,  downloads: 2341, likes: 156, author: "John Smith",    updatedAt: "May 8, 2024",  tags: ["Pricing","SaaS","Toggle"] },
  { id: "pricing-2",      title: "Pricing Comparison",      description: "Detailed pricing comparison table with highlighted features.",                                 category: "Pricing",      isPremium: true,  downloads: 1567, likes: 98,  author: "Sarah Chen",    updatedAt: "May 6, 2024",  tags: ["Pricing","Comparison","Table"] },
  { id: "pricing-3",      title: "Simple Pricing Cards",    description: "Minimal pricing cards with clean typography and clear CTAs.",                                  category: "Pricing",      isPremium: false, downloads: 987,  likes: 72,  author: "Alex Rivera",   updatedAt: "May 4, 2024",  tags: ["Pricing","Minimal","Cards"] },
  { id: "dashboard-1",    title: "Analytics Dashboard",     description: "Complete dashboard layout with charts, tables, and sidebar navigation.",                       category: "Dashboard",    isPremium: true,  downloads: 3421, likes: 234, author: "Carlos Mendes", updatedAt: "May 3, 2024",  tags: ["Dashboard","Analytics","Charts"] },
  { id: "dashboard-2",    title: "E-commerce Dashboard",    description: "E-commerce analytics dashboard with sales metrics and product tables.",                        category: "Dashboard",    isPremium: true,  downloads: 2156, likes: 167, author: "Priya Nair",    updatedAt: "May 1, 2024",  tags: ["Dashboard","Ecommerce","Metrics"] },
  { id: "dashboard-3",    title: "SaaS Metrics Board",      description: "Key metrics dashboard with sparklines, KPIs, and activity feed.",                              category: "Dashboard",    isPremium: true,  downloads: 1890, likes: 143, author: "James Liu",     updatedAt: "Apr 28, 2024", tags: ["Dashboard","SaaS","KPI"] },
  { id: "testimonials-1", title: "Testimonial Grid",        description: "Masonry-style testimonial grid with star ratings and author avatars.",                         category: "Testimonials", isPremium: false, downloads: 1123, likes: 88,  author: "Emma Watson",   updatedAt: "Apr 25, 2024", tags: ["Testimonials","Grid","Masonry"] },
  { id: "testimonials-2", title: "Testimonial Carousel",    description: "Auto-playing testimonial carousel with smooth transitions.",                                   category: "Testimonials", isPremium: false, downloads: 876,  likes: 65,  author: "John Smith",    updatedAt: "Apr 22, 2024", tags: ["Testimonials","Carousel","Animated"] },
  { id: "navigation-1",   title: "Mega Menu Navbar",        description: "Full-featured navbar with mega dropdown menus and mobile drawer.",                             category: "Navigation",   isPremium: true,  downloads: 1456, likes: 112, author: "Sarah Chen",    updatedAt: "Apr 20, 2024", tags: ["Navigation","Mega","Dropdown"] },
  { id: "navigation-2",   title: "Minimal Sticky Navbar",   description: "Clean sticky navbar with scroll-aware background and smooth transitions.",                    category: "Navigation",   isPremium: false, downloads: 2034, likes: 178, author: "Alex Rivera",   updatedAt: "Apr 18, 2024", tags: ["Navigation","Sticky","Minimal"] },
  { id: "auth-1",         title: "Split Screen Login",      description: "Modern split-screen login with social auth and form validation.",                              category: "Auth",         isPremium: false, downloads: 1678, likes: 134, author: "Carlos Mendes", updatedAt: "Apr 15, 2024", tags: ["Auth","Login","Split"] },
  { id: "auth-2",         title: "Glassmorphism Auth",      description: "Frosted glass authentication form with animated background.",                                  category: "Auth",         isPremium: true,  downloads: 1234, likes: 98,  author: "Priya Nair",    updatedAt: "Apr 12, 2024", tags: ["Auth","Glass","Animated"] },
  { id: "forms-1",        title: "Multi-step Form",         description: "Wizard-style multi-step form with progress indicator and validation.",                         category: "Forms",        isPremium: true,  downloads: 1345, likes: 107, author: "James Liu",     updatedAt: "Apr 10, 2024", tags: ["Forms","Wizard","Validation"] },
  { id: "forms-2",        title: "Contact Form",            description: "Clean contact form with floating labels and success state.",                                   category: "Forms",        isPremium: false, downloads: 2109, likes: 165, author: "Emma Watson",   updatedAt: "Apr 8, 2024",  tags: ["Forms","Contact","Floating"] },
  { id: "ai-1",           title: "AI Chat Interface",       description: "Modern AI chat UI with typing indicators, message bubbles, and prompt suggestions.",           category: "AI",           isPremium: true,  downloads: 1876, likes: 156, author: "Sarah Chen",    updatedAt: "Apr 5, 2024",  tags: ["AI","Chat","Messages"] },
  { id: "ai-2",           title: "AI Prompt Generator",     description: "Prompt input with suggestions, history, and generated output display.",                        category: "AI",           isPremium: true,  downloads: 1432, likes: 118, author: "John Smith",    updatedAt: "Apr 3, 2024",  tags: ["AI","Prompt","Generator"] },
  { id: "bento-1",        title: "Bento Grid Layout",       description: "Modern bento-style grid with hover effects and responsive design.",                            category: "Bento",        isPremium: false, downloads: 1567, likes: 98,  author: "Alex Rivera",   updatedAt: "Apr 1, 2024",  tags: ["Bento","Grid","Layout"] },
  { id: "bento-2",        title: "Feature Bento",           description: "Feature showcase using bento grid layout with icons and descriptions.",                        category: "Bento",        isPremium: false, downloads: 987,  likes: 76,  author: "Carlos Mendes", updatedAt: "Mar 28, 2024", tags: ["Bento","Features","Icons"] },
  { id: "cta-1",          title: "Gradient CTA Banner",     description: "Full-width CTA section with gradient background and animated button.",                         category: "CTA",          isPremium: false, downloads: 1234, likes: 95,  author: "Priya Nair",    updatedAt: "Mar 25, 2024", tags: ["CTA","Gradient","Banner"] },
  { id: "cta-2",          title: "Dark CTA Section",        description: "Dark themed CTA with glowing button and background particles.",                                category: "CTA",          isPremium: true,  downloads: 876,  likes: 68,  author: "James Liu",     updatedAt: "Mar 22, 2024", tags: ["CTA","Dark","Glowing"] },
]

// ─── Templates ────────────────────────────────────────────────────────────────
export const allTemplates: Template[] = [
  { id: "saas-1",      title: "SaaS Starter Kit",   description: "Complete SaaS landing page with pricing, features, and auth pages",        category: "SaaS",      price: 49, isPremium: true,  pages: 12, components: 45 },
  { id: "ai-1",        title: "AI Dashboard",        description: "Modern AI application dashboard with chat and analytics",                  category: "AI",        price: 79, isPremium: true,  pages: 8,  components: 32 },
  { id: "agency-1",    title: "Agency Portfolio",    description: "Creative agency portfolio with case studies and team pages",               category: "Agency",    price: 39, isPremium: false, pages: 6,  components: 24 },
  { id: "finance-1",   title: "Finance Dashboard",   description: "Financial analytics dashboard with charts and reporting",                  category: "Finance",   price: 69, isPremium: true,  pages: 10, components: 38 },
  { id: "portfolio-1", title: "Developer Portfolio", description: "Personal portfolio for developers with blog and projects",                 category: "Portfolio", price: 29, isPremium: false, pages: 5,  components: 18 },
  { id: "dashboard-1", title: "Admin Dashboard",     description: "Complete admin dashboard with tables, charts, and settings",               category: "Dashboard", price: 59, isPremium: true,  pages: 15, components: 52 },
]

// ─── Category metadata ────────────────────────────────────────────────────────
export const componentCategories = [
  { id: "all",          name: "All Components", count: allComponents.length },
  { id: "hero",         name: "Hero Sections",  count: allComponents.filter(c => c.category.toLowerCase() === "hero").length },
  { id: "pricing",      name: "Pricing",        count: allComponents.filter(c => c.category.toLowerCase() === "pricing").length },
  { id: "dashboard",    name: "Dashboards",     count: allComponents.filter(c => c.category.toLowerCase() === "dashboard").length },
  { id: "testimonials", name: "Testimonials",   count: allComponents.filter(c => c.category.toLowerCase() === "testimonials").length },
  { id: "navigation",   name: "Navigation",     count: allComponents.filter(c => c.category.toLowerCase() === "navigation").length },
  { id: "auth",         name: "Auth Forms",     count: allComponents.filter(c => c.category.toLowerCase() === "auth").length },
  { id: "forms",        name: "Forms",          count: allComponents.filter(c => c.category.toLowerCase() === "forms").length },
  { id: "ai",           name: "AI Sections",    count: allComponents.filter(c => c.category.toLowerCase() === "ai").length },
  { id: "bento",        name: "Bento Grids",    count: allComponents.filter(c => c.category.toLowerCase() === "bento").length },
  { id: "cta",          name: "CTA Sections",   count: allComponents.filter(c => c.category.toLowerCase() === "cta").length },
]

export const templateCategories = [
  { id: "all",       name: "All Templates" },
  { id: "saas",      name: "SaaS"       },
  { id: "ai",        name: "AI"         },
  { id: "agency",    name: "Agency"     },
  { id: "finance",   name: "Finance"    },
  { id: "portfolio", name: "Portfolio"  },
  { id: "dashboard", name: "Dashboard"  },
]
