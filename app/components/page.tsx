"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Grid, List, ChevronDown } from "lucide-react"
import ComponentCard from "@/components/home/ComponentCard"

const categories = [
  { id: "all",          name: "All Components", count: 256 },
  { id: "hero",         name: "Hero Sections",  count: 45  },
  { id: "pricing",      name: "Pricing",        count: 32  },
  { id: "dashboard",    name: "Dashboards",     count: 28  },
  { id: "testimonials", name: "Testimonials",   count: 24  },
  { id: "navigation",   name: "Navigation",     count: 38  },
  { id: "auth",         name: "Auth Forms",     count: 18  },
  { id: "forms",        name: "Forms",          count: 42  },
  { id: "ai",           name: "AI Sections",    count: 15  },
  { id: "bento",        name: "Bento Grids",    count: 22  },
  { id: "cta",          name: "CTA Sections",   count: 31  },
]

const sortOptions = [
  { id: "popular",   name: "Most Popular"   },
  { id: "newest",    name: "Newest"         },
  { id: "downloads", name: "Most Downloaded"},
  { id: "likes",     name: "Most Liked"     },
]

const allComponents = [
  { id: "hero-1",         title: "Modern Hero Section",      description: "A beautiful, responsive hero section with gradient backgrounds and animated elements.",          category: "Hero",         isPremium: false, downloads: 1234, likes: 89  },
  { id: "hero-2",         title: "Startup Hero",             description: "Clean startup hero with value proposition and CTA buttons.",                                    category: "Hero",         isPremium: false, downloads: 856,  likes: 67  },
  { id: "hero-3",         title: "SaaS Hero Dark",           description: "Dark-themed hero section with animated gradient and floating UI elements.",                     category: "Hero",         isPremium: true,  downloads: 1102, likes: 94  },
  { id: "pricing-1",      title: "SaaS Pricing Table",       description: "Clean pricing cards with monthly/yearly toggle and feature comparison.",                        category: "Pricing",      isPremium: true,  downloads: 2341, likes: 156 },
  { id: "pricing-2",      title: "Pricing Comparison",       description: "Detailed pricing comparison table with highlighted features.",                                  category: "Pricing",      isPremium: true,  downloads: 1567, likes: 98  },
  { id: "pricing-3",      title: "Simple Pricing Cards",     description: "Minimal pricing cards with clean typography and clear CTAs.",                                   category: "Pricing",      isPremium: false, downloads: 987,  likes: 72  },
  { id: "dashboard-1",    title: "Analytics Dashboard",      description: "Complete dashboard layout with charts, tables, and sidebar navigation.",                        category: "Dashboard",    isPremium: true,  downloads: 3421, likes: 234 },
  { id: "dashboard-2",    title: "E-commerce Dashboard",     description: "E-commerce analytics dashboard with sales metrics and product tables.",                         category: "Dashboard",    isPremium: true,  downloads: 2156, likes: 167 },
  { id: "dashboard-3",    title: "SaaS Metrics Board",       description: "Key metrics dashboard with sparklines, KPIs, and activity feed.",                               category: "Dashboard",    isPremium: true,  downloads: 1890, likes: 143 },
  { id: "testimonials-1", title: "Testimonial Grid",         description: "Masonry-style testimonial grid with star ratings and author avatars.",                          category: "Testimonials", isPremium: false, downloads: 1123, likes: 88  },
  { id: "testimonials-2", title: "Testimonial Carousel",     description: "Auto-playing testimonial carousel with smooth transitions.",                                    category: "Testimonials", isPremium: false, downloads: 876,  likes: 65  },
  { id: "navigation-1",   title: "Mega Menu Navbar",         description: "Full-featured navbar with mega dropdown menus and mobile drawer.",                              category: "Navigation",   isPremium: true,  downloads: 1456, likes: 112 },
  { id: "navigation-2",   title: "Minimal Sticky Navbar",    description: "Clean sticky navbar with scroll-aware background and smooth transitions.",                      category: "Navigation",   isPremium: false, downloads: 2034, likes: 178 },
  { id: "auth-1",         title: "Split Screen Login",       description: "Modern split-screen login with social auth and form validation.",                               category: "Auth",         isPremium: false, downloads: 1678, likes: 134 },
  { id: "auth-2",         title: "Glassmorphism Auth",       description: "Frosted glass authentication form with animated background.",                                   category: "Auth",         isPremium: true,  downloads: 1234, likes: 98  },
  { id: "forms-1",        title: "Multi-step Form",          description: "Wizard-style multi-step form with progress indicator and validation.",                          category: "Forms",        isPremium: true,  downloads: 1345, likes: 107 },
  { id: "forms-2",        title: "Contact Form",             description: "Clean contact form with floating labels and success state.",                                    category: "Forms",        isPremium: false, downloads: 2109, likes: 165 },
  { id: "ai-1",           title: "AI Chat Interface",        description: "Modern AI chat UI with typing indicators, message bubbles, and prompt suggestions.",            category: "AI",           isPremium: true,  downloads: 1876, likes: 156 },
  { id: "ai-2",           title: "AI Prompt Generator",      description: "Prompt input with suggestions, history, and generated output display.",                         category: "AI",           isPremium: true,  downloads: 1432, likes: 118 },
  { id: "bento-1",        title: "Bento Grid Layout",        description: "Modern bento-style grid with hover effects and responsive design.",                             category: "Bento",        isPremium: false, downloads: 1567, likes: 98  },
  { id: "bento-2",        title: "Feature Bento",            description: "Feature showcase using bento grid layout with icons and descriptions.",                         category: "Bento",        isPremium: false, downloads: 987,  likes: 76  },
  { id: "cta-1",          title: "Gradient CTA Banner",      description: "Full-width CTA section with gradient background and animated button.",                          category: "CTA",          isPremium: false, downloads: 1234, likes: 95  },
  { id: "cta-2",          title: "Dark CTA Section",         description: "Dark themed CTA with glowing button and background particles.",                                 category: "CTA",          isPremium: true,  downloads: 876,  likes: 68  },
]

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy]                     = useState("popular")
  const [searchQuery, setSearchQuery]           = useState("")
  const [viewMode, setViewMode]                 = useState<"grid" | "list">("grid")

  const filtered = allComponents.filter(c => {
    const matchCat    = selectedCategory === "all" || c.category.toLowerCase() === selectedCategory
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Components</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Browse our collection of {categories[0].count}+ production-ready components
          </p>
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none pl-4 pr-10 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white cursor-pointer"
            >
              {sortOptions.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {(["grid","list"] as const).map(mode => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`p-2.5 rounded-lg transition-colors ${viewMode === mode ? "bg-white dark:bg-gray-700 shadow-sm" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              >
                {mode === "grid"
                  ? <Grid className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  : <List className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:w-56 flex-shrink-0"
          >
            <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Categories</h3>
                <button onClick={() => setSelectedCategory("all")} className="text-xs text-indigo-500 hover:text-indigo-600">
                  Clear
                </button>
              </div>
              <div className="space-y-0.5">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-sm text-gray-500 dark:text-gray-400 mb-5"
            >
              Showing {filtered.length} component{filtered.length !== 1 ? "s" : ""}
            </motion.p>

            {filtered.length > 0 ? (
              <div className={`grid gap-5 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                {filtered.map((component, index) => (
                  <motion.div
                    key={component.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * (index % 6) }}
                  >
                    <ComponentCard {...component} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No components found</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Try adjusting your search or filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
