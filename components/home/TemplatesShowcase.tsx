"use client"

import { motion } from "framer-motion"
import { ArrowRight, Eye, Heart } from "lucide-react"
import { Badge } from "@/components/ui"
import TemplatePreview from "@/components/ui/TemplatePreview"
import Link from "next/link"

const templates = [
  { id: "saas-1",    title: "SaaS Starter Kit",  description: "Complete SaaS landing page with pricing, features, and auth pages", category: "SaaS",   price: 49, isPremium: true  },
  { id: "ai-1",      title: "AI Dashboard",       description: "Modern AI application dashboard with chat and analytics",           category: "AI",    price: 79, isPremium: true  },
  { id: "agency-1",  title: "Agency Portfolio",   description: "Creative agency portfolio with case studies and team pages",        category: "Agency", price: 39, isPremium: false },
]

const TemplatesShowcase = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Premium Templates
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Complete website templates to jumpstart your next project
            </p>
          </div>
          <Link href="/templates" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium whitespace-nowrap">
            View all templates <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300"
            >
              {/* Preview */}
              <div className="relative h-52 overflow-hidden">
                <TemplatePreview category={template.category} id={template.id} className="absolute inset-0" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-white rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                    <Eye className="w-5 h-5 text-gray-900" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-white rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                    <Heart className="w-5 h-5 text-gray-900" />
                  </motion.button>
                </div>

                {template.isPremium && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
                      PRO
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <Badge variant="secondary" size="sm" className="mb-2">{template.category}</Badge>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{template.description}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">${template.price}</span>
                  <Link href={`/templates/${template.id}`} className="text-sm font-medium text-indigo-500 hover:text-indigo-600 transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TemplatesShowcase
