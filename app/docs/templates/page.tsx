"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Download, Eye, Layers, Zap, Code2, Check } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const templateGuide = [
  {
    title: "Choosing a template",
    content: "Browse our template library and filter by category (SaaS, AI, Agency, etc.). Each template includes a live preview so you can see exactly what you're getting before purchasing.",
  },
  {
    title: "Downloading and setup",
    content: "After purchase, download the template as a ZIP file. Extract it and run `npm install` to install dependencies. The template is pre-configured with Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    title: "Customizing your template",
    content: "All templates use CSS variables for theming. Update the colors in `globals.css` to match your brand. Components are modular — swap, remove, or add sections as needed.",
  },
  {
    title: "Deploying to production",
    content: "Templates are optimized for deployment on Vercel, Netlify, or any Node.js hosting. Run `npm run build` to create a production build, then deploy using your preferred platform.",
  },
]

const templates = [
  { id: "saas-1", title: "SaaS Starter Kit", category: "SaaS", pages: 12, preview: "from-blue-500 to-purple-600" },
  { id: "ai-1", title: "AI Dashboard", category: "AI", pages: 8, preview: "from-violet-500 to-pink-600" },
  { id: "agency-1", title: "Agency Portfolio", category: "Agency", pages: 6, preview: "from-orange-500 to-red-600" },
]

export default function TemplatesDocsPage() {
  return (
    <div className="min-h-screen pt-16 flex">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Getting Started</p>
            <nav className="space-y-1">
              {[
                { href: "/docs", label: "Introduction" },
                { href: "/docs/installation", label: "Installation" },
                { href: "/docs/components", label: "Components" },
                { href: "/docs/templates", label: "Templates", active: true },
              ].map(item => (
                <Link key={item.href} href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    item.active
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}>
                  {item.active && <ChevronRight className="w-3 h-3" />}
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">On this page</p>
            <nav className="space-y-1">
              {templateGuide.map(g => (
                <a key={g.title} href={`#${g.title.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors">
                  {g.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="secondary" className="mb-4">Templates</Badge>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Template Guide</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about using ComponentsHub templates in your projects.
            </p>
          </motion.div>

          {/* Quick start */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-10 p-5 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-2xl">
            <p className="font-semibold text-indigo-800 dark:text-indigo-400 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Quick start
            </p>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              Download a template, run <code className="font-mono bg-indigo-100 dark:bg-indigo-900 px-1.5 py-0.5 rounded">npm install && npm run dev</code>, and you're live in minutes.
            </p>
          </motion.div>

          {/* Guide sections */}
          <div className="mt-10 space-y-10">
            {templateGuide.map((section, i) => (
              <motion.div key={section.title} id={section.title.toLowerCase().replace(/ /g, "-")}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (i + 1) }}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* What's included */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-indigo-500" /> What's included in every template
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Next.js App Router setup", "Tailwind CSS configuration", "Framer Motion animations",
                "Dark mode support", "TypeScript types", "Responsive layouts",
                "SEO meta tags", "Accessibility compliant", "Production optimized",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured templates */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {templates.map(t => (
                <Link key={t.id} href={`/templates/${t.id}`}>
                  <div className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                    <div className={`h-28 bg-gradient-to-br ${t.preview}`} />
                    <div className="p-3">
                      <p className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">{t.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.pages} pages</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Ready to get started?</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/templates">
                <Button className="gap-2">Browse Templates <ArrowRight className="w-4 h-4" /></Button>
              </Link>
              <Link href="/docs/installation">
                <Button variant="outline" className="gap-2">Installation Guide <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
