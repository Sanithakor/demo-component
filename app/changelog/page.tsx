"use client"

import { motion } from "framer-motion"
import { Tag, Calendar, ArrowRight, Zap, Bug, Sparkles } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"

const changes = [
  {
    version: "2.4.0",
    date: "May 28, 2024",
    type: "major",
    changes: [
      { type: "feature", description: "Added AI Component Generator with natural language input" },
      { type: "feature", description: "New Bento Grid components with 5 new layouts" },
      { type: "feature", description: "Dark mode support for all components" },
      { type: "improvement", description: "Improved accessibility across all components" },
      { type: "improvement", description: "Reduced bundle size by 15%" },
    ],
  },
  {
    version: "2.3.2",
    date: "May 20, 2024",
    type: "patch",
    changes: [
      { type: "fix", description: "Fixed pricing toggle animation issue" },
      { type: "fix", description: "Resolved mobile menu z-index conflict" },
      { type: "improvement", description: "Updated dependencies to latest versions" },
    ],
  },
  {
    version: "2.3.1",
    date: "May 15, 2024",
    type: "patch",
    changes: [
      { type: "fix", description: "Fixed hero section gradient on Safari" },
      { type: "fix", description: "Resolved TypeScript type errors in Button component" },
    ],
  },
  {
    version: "2.3.0",
    date: "May 10, 2024",
    type: "major",
    changes: [
      { type: "feature", description: "Added 20 new AI-themed components" },
      { type: "feature", description: "New template: AI Dashboard with chat interface" },
      { type: "feature", description: "Introduced component favorites system" },
      { type: "improvement", description: "Enhanced Framer Motion animations" },
    ],
  },
  {
    version: "2.2.0",
    date: "April 25, 2024",
    type: "minor",
    changes: [
      { type: "feature", description: "Added search functionality to component library" },
      { type: "feature", description: "New category filters for easier browsing" },
      { type: "improvement", description: "Improved component preview performance" },
    ],
  },
]

const getChangeIcon = (type: string) => {
  switch (type) {
    case "feature":
      return Sparkles
    case "fix":
      return Bug
    case "improvement":
      return Zap
    default:
      return Tag
  }
}

const getChangeColor = (type: string) => {
  switch (type) {
    case "feature":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    case "fix":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
    case "improvement":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
  }
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Badge variant="secondary" className="mb-4">Changelog</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            What's New
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Stay up to date with the latest features, improvements, and bug fixes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          {/* Changes */}
          <div className="space-y-8">
            {changes.map((change, index) => (
              <motion.div
                key={change.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative pl-20"
              >
                {/* Version Badge */}
                <div className="absolute left-0 top-0 w-16 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {change.version}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant={
                        change.type === "major"
                          ? "default"
                          : change.type === "minor"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {change.type === "major" ? "Major" : change.type === "minor" ? "Minor" : "Patch"}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {change.date}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {change.changes.map((item, itemIndex) => {
                      const Icon = getChangeIcon(item.type)
                      return (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className={`p-1 rounded mt-0.5 ${getChangeColor(item.type)}`}>
                            <Icon className="w-3 h-3" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{item.description}</span>
                        </li>
                      )
                    })}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline">
            Load More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}