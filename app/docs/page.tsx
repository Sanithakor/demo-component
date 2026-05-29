"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Menu,
  ChevronRight,
  Copy,
  Check,
  Terminal,
  Package,
  Layout,
  Code2,
  BookOpen,
  Zap,
  ArrowRight,
  Settings,
} from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const docsSections = [
  {
    title: "Getting Started",
    items: [
      { href: "/docs", icon: BookOpen, label: "Introduction", active: true },
      { href: "/docs/installation", icon: Terminal, label: "Installation" },
      { href: "/docs/configuration", icon: Package, label: "Configuration" },
    ],
  },
  {
    title: "Components",
    items: [
      { href: "/docs/components", icon: Layout, label: "Using Components" },
      { href: "/docs/components#examples", icon: Code2, label: "Examples" },
      { href: "/docs/components#props", icon: Zap, label: "Component Props" },
    ],
  },
  {
    title: "Templates",
    items: [
      { href: "/docs/templates", icon: Package, label: "Template Guide" },
      { href: "/docs/templates#customization", icon: Settings, label: "Customization" },
      { href: "/docs/templates#deployment", icon: ArrowRight, label: "Deployment" },
    ],
  },
]

const codeExamples = {
  installation: `npm install @components-hub/react`,
  usage: `import { Button, Card } from '@components-hub/react'

export default function MyComponent() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  )
}`,
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto hidden lg:block">
          <div className="p-6">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search docs..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
              />
            </div>

            <nav className="space-y-6">
              {docsSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                            item.active
                              ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="container-custom py-12 max-w-4xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <Badge variant="secondary" className="mb-4">Documentation</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Getting Started
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Learn how to install and use ComponentsHub in your projects
              </p>
            </motion.div>

            {/* Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Installation
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Install ComponentsHub using your preferred package manager:
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 border-b border-gray-700">
                  <Terminal className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Terminal</span>
                </div>
                <div className="p-4 relative">
                  <pre className="text-sm text-gray-100 overflow-x-auto">
                    <code>npm install @components-hub/react</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(codeExamples.installation, "install")}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copied === "install" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Usage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Basic Usage
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Import and use components in your React application:
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 border-b border-gray-700">
                  <Code2 className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Example.tsx</span>
                </div>
                <div className="p-4 relative">
                  <pre className="text-sm text-gray-100 overflow-x-auto">
                    <code>{codeExamples.usage}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(codeExamples.usage, "usage")}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copied === "usage" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Type-Safe", desc: "Full TypeScript support with type definitions" },
                  { title: "Responsive", desc: "Mobile-first design that works on all devices" },
                  { title: "Customizable", desc: "Easy to theme and adapt to your brand" },
                  { title: "Accessible", desc: "Built with accessibility in mind" },
                ].map((feature) => (
                  <Card key={feature.title} className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{feature.desc}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Next Steps</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/docs/components">
                  <Button variant="outline">
                    Browse Components
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/templates">
                  <Button variant="outline">
                    View Templates
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/docs/installation">
                  <Button variant="ghost">
                    Installation Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}