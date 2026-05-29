"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Eye, Heart, ArrowRight } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import TemplatePreview from "@/components/ui/TemplatePreview"
import Link from "next/link"

const templates = [
  {
    id: "saas-1",
    title: "SaaS Starter Kit",
    description: "Complete SaaS landing page with pricing, features, and auth pages",
    category: "SaaS",
    price: 49,
    isPremium: true,
    pages: 12,
    components: 45,
    preview: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    id: "ai-1",
    title: "AI Dashboard",
    description: "Modern AI application dashboard with chat and analytics",
    category: "AI",
    price: 79,
    isPremium: true,
    pages: 8,
    components: 32,
    preview: "bg-gradient-to-br from-violet-500 to-pink-600",
  },
  {
    id: "agency-1",
    title: "Agency Portfolio",
    description: "Creative agency portfolio with case studies and team pages",
    category: "Agency",
    price: 39,
    isPremium: false,
    pages: 6,
    components: 24,
    preview: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    id: "finance-1",
    title: "Finance Dashboard",
    description: "Financial analytics dashboard with charts and reporting",
    category: "Finance",
    price: 69,
    isPremium: true,
    pages: 10,
    components: 38,
    preview: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    id: "portfolio-1",
    title: "Developer Portfolio",
    description: "Personal portfolio for developers with blog and projects",
    category: "Portfolio",
    price: 29,
    isPremium: false,
    pages: 5,
    components: 18,
    preview: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    id: "dashboard-1",
    title: "Admin Dashboard",
    description: "Complete admin dashboard with tables, charts, and settings",
    category: "Dashboard",
    price: 59,
    isPremium: true,
    pages: 15,
    components: 52,
    preview: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
]

const categories = [
  { id: "all", name: "All Templates" },
  { id: "saas", name: "SaaS" },
  { id: "ai", name: "AI" },
  { id: "agency", name: "Agency" },
  { id: "finance", name: "Finance" },
  { id: "portfolio", name: "Portfolio" },
  { id: "dashboard", name: "Dashboard" },
]

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === "all" || template.category.toLowerCase() === selectedCategory
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">Templates</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Premium Website Templates
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Complete, production-ready templates to launch your website in minutes
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300"
            >
              {/* Preview */}
              <div className="relative h-56 overflow-hidden">
                <TemplatePreview category={template.category} id={template.id} className="absolute inset-0" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="p-3 bg-white rounded-xl hover:bg-gray-100 transition-colors">
                    <Eye className="w-5 h-5 text-gray-900" />
                  </button>
                  <button className="p-3 bg-white rounded-xl hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5 text-gray-900" />
                  </button>
                </div>

                {template.isPremium && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-amber-500 text-white">PRO</Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" size="sm">{template.category}</Badge>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {template.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{template.pages} pages</span>
                  <span>{template.components} components</span>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${template.price}
                  </span>
                  <Link href={`/templates/${template.id}`}>
                    <Button variant="ghost" size="sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No templates found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  )
}