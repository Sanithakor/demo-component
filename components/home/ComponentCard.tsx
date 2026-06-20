"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Download, Eye } from "lucide-react"
import { Badge } from "@/components/ui"
import ComponentPreview from "@/components/ui/ComponentPreview"
import Link from "next/link"

interface ComponentCardProps {
  id: string
  title: string
  description: string
  category: string
  isPremium?: boolean
  downloads: number
  likes: number
}

const ComponentCard = ({
  id,
  title,
  description,
  category,
  isPremium = false,
  downloads,
  likes,
}: ComponentCardProps) => {
  const [liked, setLiked] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-900/8 dark:hover:shadow-gray-900/30 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
    >
      {/* Preview */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <ComponentPreview category={category} id={id} className="absolute inset-0 w-full h-full" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2.5">
          <Link href={`/components/${id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-white rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              title="Preview"
            >
              <Eye className="w-4 h-4 text-gray-900" />
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.preventDefault(); setLiked(!liked) }}
            className="p-2.5 bg-white rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            title="Save"
          >
            <Heart className={`w-4 h-4 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-gray-900"}`} />
          </motion.button>
          <Link href={`/components/${id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-white rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              title="Download"
            >
              <Download className="w-4 h-4 text-gray-900" />
            </motion.button>
          </Link>
        </div>

        {/* PRO badge */}
        {isPremium && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30">
              PRO
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <Link href={`/components/${id}`} className="block p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" size="sm">{category}</Badge>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors line-clamp-1 text-sm">
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Download className="w-3 h-3" />
            <span>{downloads.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Heart className="w-3 h-3" />
            <span>{likes.toLocaleString()}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ComponentCard
