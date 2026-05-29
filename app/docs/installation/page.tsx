"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Terminal, Copy, Check, Package, ArrowRight, ChevronRight } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Install dependencies",
    description: "Install ComponentsHub and its peer dependencies using your package manager.",
    code: `npm install @components-hub/react framer-motion lucide-react clsx tailwind-merge`,
    lang: "bash",
  },
  {
    step: "02",
    title: "Configure Tailwind CSS",
    description: "Add ComponentsHub to your Tailwind CSS content paths to enable all utility classes.",
    code: `// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@components-hub/react/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}`,
    lang: "js",
  },
  {
    step: "03",
    title: "Add CSS variables",
    description: "Add the required CSS variables to your global stylesheet for theming support.",
    code: `/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --radius: 0.75rem;
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
  }
}`,
    lang: "css",
  },
  {
    step: "04",
    title: "Import and use",
    description: "Import components and start building your UI.",
    code: `import { Button, Card } from '@components-hub/react'

export default function App() {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <Button className="mt-4">Get Started</Button>
    </Card>
  )
}`,
    lang: "tsx",
  },
]

export default function InstallationPage() {
  const [copied, setCopied] = useState<number | null>(null)

  const handleCopy = (code: string, i: number) => {
    navigator.clipboard.writeText(code)
    setCopied(i)
    setTimeout(() => setCopied(null), 2000)
  }

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
                { href: "/docs/installation", label: "Installation", active: true },
                { href: "/docs/components", label: "Components" },
                { href: "/docs/templates", label: "Templates" },
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
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 lg:ml-0">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="secondary" className="mb-4">Installation</Badge>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Installation Guide</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Get ComponentsHub set up in your project in under 5 minutes.
            </p>
          </motion.div>

          {/* Requirements */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-10 p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl">
            <p className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Prerequisites</p>
            <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
              <li>• Node.js 18.0 or higher</li>
              <li>• React 18.0 or higher</li>
              <li>• Tailwind CSS 3.0 or higher</li>
              <li>• Next.js 13+ (recommended) or any React framework</li>
            </ul>
          </motion.div>

          {/* Steps */}
          <div className="mt-10 space-y-10">
            {steps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (i + 1) }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{step.description}</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800 dark:bg-gray-900">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-400 font-mono">{step.lang}</span>
                    </div>
                    <button onClick={() => handleCopy(step.code, i)}
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                      {copied === i ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied === i ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="p-4 bg-gray-900 dark:bg-gray-950 overflow-x-auto">
                    <code className="text-sm text-gray-100 font-mono">{step.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next steps */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Next steps</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/docs/components">
                <Button variant="outline" className="gap-2">Browse Components <ArrowRight className="w-4 h-4" /></Button>
              </Link>
              <Link href="/docs/templates">
                <Button variant="ghost" className="gap-2">View Templates <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
