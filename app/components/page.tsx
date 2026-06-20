"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Search, Grid, List, ChevronDown } from "lucide-react"
import ComponentCard from "@/components/home/ComponentCard"
import { allComponents, componentCategories } from "@/lib/data"

const sortOptions = [
  { id: "popular",   name: "Most Popular"    },
  { id: "newest",    name: "Newest"          },
  { id: "downloads", name: "Most Downloaded" },
  { id: "likes",     name: "Most Liked"      },
]

function ComponentsPage() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy]                     = useState("popular")
  const [searchQuery, setSearchQuery]           = useState("")
  const [viewMode, setViewMode]                 = useState<"grid" | "list">("grid")

  // Read URL params on mount
  useEffect(() => {
    const cat = searchParams.get("category")
    const q = searchParams.get("search")
    if (cat) setSelectedCategory(cat)
    if (q) setSearchQuery(q)
  }, [searchParams])

  const filtered = allComponents
    .filter(c => {
      const matchCat    = selectedCategory === "all" || c.category.toLowerCase() === selectedCategory
      const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch
    })
    .sort((a, b) => {
      if (sortBy === "downloads") return b.downloads - a.downloads
      if (sortBy === "likes")     return b.likes - a.likes
      if (sortBy === "newest")    return b.id.localeCompare(a.id)
      // popular: weighted combination
      return (b.downloads * 0.7 + b.likes * 0.3) - (a.downloads * 0.7 + a.likes * 0.3)
    })

  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Components</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Browse our collection of {allComponents.length}+ production-ready components
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
                {componentCategories.map(cat => (
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

function ComponentsPageFallback() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 dark:text-gray-400">Loading components…</p>
      </div>
    </div>
  )
}

export default function ComponentsPageWrapper() {
  return (
    <Suspense fallback={<ComponentsPageFallback />}>
      <ComponentsPage />
    </Suspense>
  )
}
