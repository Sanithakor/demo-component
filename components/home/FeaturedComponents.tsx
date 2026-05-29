"use client"

import { motion } from "framer-motion"
import ComponentCard from "./ComponentCard"
import Link from "next/link"

const featuredComponents = [
  {
    id: "hero-1",
    title: "Modern Hero Section",
    description: "A beautiful, responsive hero section with gradient backgrounds and animated elements.",
    category: "Hero",
    isPremium: false,
    downloads: 1234,
    likes: 89,
  },
  {
    id: "pricing-1",
    title: "SaaS Pricing Table",
    description: "Clean pricing cards with monthly/yearly toggle and feature comparison.",
    category: "Pricing",
    isPremium: true,
    downloads: 856,
    likes: 67,
  },
  {
    id: "dashboard-1",
    title: "Analytics Dashboard",
    description: "Complete dashboard layout with charts, tables, and sidebar navigation.",
    category: "Dashboard",
    isPremium: true,
    downloads: 2341,
    likes: 156,
  },
  {
    id: "bento-1",
    title: "Bento Grid Layout",
    description: "Modern bento-style grid with hover effects and responsive design.",
    category: "Bento",
    isPremium: false,
    downloads: 1567,
    likes: 98,
  },
]

const FeaturedComponents = () => {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured Components
          </h2>
          <p className="mt-4 text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Hand-picked premium components to accelerate your development workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredComponents.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <ComponentCard {...component} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/components"
            className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
          >
            View all components
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedComponents
