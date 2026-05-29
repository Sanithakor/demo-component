"use client"

import { motion } from "framer-motion"
import {
  Layout,
  CreditCard,
  BarChart3,
  MessageSquare,
  Navigation,
  User,
  FileText,
  Sparkles,
  Grid,
  Zap,
} from "lucide-react"
import Link from "next/link"

const categories = [
  { icon: Layout, name: "Hero Sections", count: 45, href: "/components?category=hero", color: "from-blue-500 to-cyan-500" },
  { icon: CreditCard, name: "Pricing", count: 32, href: "/components?category=pricing", color: "from-green-500 to-emerald-500" },
  { icon: BarChart3, name: "Dashboards", count: 28, href: "/components?category=dashboard", color: "from-purple-500 to-violet-500" },
  { icon: MessageSquare, name: "Testimonials", count: 24, href: "/components?category=testimonials", color: "from-pink-500 to-rose-500" },
  { icon: Navigation, name: "Navigation", count: 38, href: "/components?category=navigation", color: "from-orange-500 to-amber-500" },
  { icon: User, name: "Auth Forms", count: 18, href: "/components?category=auth", color: "from-indigo-500 to-blue-500" },
  { icon: FileText, name: "Forms", count: 42, href: "/components?category=forms", color: "from-teal-500 to-cyan-500" },
  { icon: Sparkles, name: "AI Sections", count: 15, href: "/components?category=ai", color: "from-violet-500 to-purple-500" },
  { icon: Grid, name: "Bento Grids", count: 22, href: "/components?category=bento", color: "from-rose-500 to-pink-500" },
  { icon: Zap, name: "CTA Sections", count: 31, href: "/components?category=cta", color: "from-yellow-500 to-orange-500" },
]

const Categories = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Browse by Category
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find the perfect component for your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={category.href}>
                <div className="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/5 dark:hover:shadow-gray-900/10">
                  {/* Icon Background */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}>
                    <category.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  
                  <h3 className="mt-4 font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {category.count} components
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories