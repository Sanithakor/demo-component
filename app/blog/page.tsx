"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, Clock, Tag } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "Building Modern UI with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    category: "Tutorial",
    author: "Sarah Chen",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "10 Essential React Components for 2024",
    excerpt: "A curated list of must-have React components for modern web applications.",
    category: "React",
    author: "Alex Rivera",
    date: "May 10, 2024",
    readTime: "12 min read",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "How We Built the AI Component Generator",
    excerpt: "An inside look at the technology and design decisions behind our AI-powered component generator.",
    category: "Engineering",
    author: "Emma Watson",
    date: "May 5, 2024",
    readTime: "15 min read",
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    id: 4,
    title: "Best Practices for Component Library Design",
    excerpt: "Tips and tricks for creating maintainable, scalable component libraries.",
    category: "Design",
    author: "John Smith",
    date: "April 28, 2024",
    readTime: "10 min read",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Optimizing React Performance with Memoization",
    excerpt: "Deep dive into React performance optimization techniques.",
    category: "Performance",
    author: "Lisa Park",
    date: "April 20, 2024",
    readTime: "14 min read",
    image: "bg-gradient-to-br from-green-500 to-teal-500",
  },
  {
    id: 6,
    title: "The Future of Web Development in 2025",
    excerpt: "Predictions and trends shaping the future of web development.",
    category: "Trends",
    author: "Mike Johnson",
    date: "April 15, 2024",
    readTime: "6 min read",
    image: "bg-gradient-to-br from-violet-500 to-purple-500",
  },
]

const categories = [
  { id: "all", name: "All Posts" },
  { id: "tutorial", name: "Tutorial" },
  { id: "react", name: "React" },
  { id: "engineering", name: "Engineering" },
  { id: "design", name: "Design" },
  { id: "performance", name: "Performance" },
  { id: "trends", name: "Trends" },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
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
          <Badge variant="secondary" className="mb-4">Blog</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Latest Articles
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tips, tutorials, and insights on building modern web applications
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
              placeholder="Search articles..."
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
          className="flex flex-wrap gap-2 mb-12"
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

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={`/blog/${post.id}`}>
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className={`h-48 ${post.image}`} />
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" size="sm">{post.category}</Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No articles found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-gray-900 dark:bg-white rounded-3xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-900">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-gray-300 dark:text-gray-600 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and updates delivered to your inbox.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-4 py-3 bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-white dark:text-gray-900 placeholder:text-gray-400"
            />
            <Button size="lg" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}