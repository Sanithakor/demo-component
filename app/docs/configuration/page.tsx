"use client"

import { motion } from "framer-motion"
import { Copy, Check, ChevronRight, Settings } from "lucide-react"
import { Badge } from "@/components/ui"
import Link from "next/link"
import { useState } from "react"

const configSections = [
  {
    title: "Tailwind Config",
    description: "Extend your Tailwind configuration to include ComponentsHub design tokens.",
    code: `// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
}`,
  },
  {
    title: "CSS Variables",
    description: "Define design tokens as CSS custom properties in your global stylesheet.",
    code: `/* globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --radius: 0.75rem;
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --border: 217.2 32.6% 17.5%;
  }
}`,
  },
]

export default function ConfigurationPage() {
  const [copied, setCopied] = useState<number | null>(null)

  const handleCopy = (code: string, i: number) => {
    navigator.clipboard.writeText(code)
    setCopied(i)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen pt-16 flex">
      <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Getting Started</p>
            <nav className="space-y-1">
              {[
                { href: "/docs", label: "Introduction" },
                { href: "/docs/installation", label: "Installation" },
                { href: "/docs/configuration", label: "Configuration", active: true },
                { href: "/docs/components", label: "Components" },
                { href: "/docs/templates", label: "Templates" },
              ].map(item => (
                <Link key={item.href} href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    (item as any).active
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}>
                  {(item as any).active && <ChevronRight className="w-3 h-3" />}
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="secondary" className="mb-4">Configuration</Badge>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Configuration Guide</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Configure ComponentsHub to match your project's design system and preferences.
            </p>
          </motion.div>

          <div className="mt-10 space-y-10">
            {configSections.map((section, i) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (i + 1) }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{section.description}</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800 dark:bg-gray-900">
                    <span className="text-xs text-gray-400 font-mono">js</span>
                    <button onClick={() => handleCopy(section.code, i)}
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                      {copied === i ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied === i ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="p-4 bg-gray-900 dark:bg-gray-950 overflow-x-auto">
                    <code className="text-sm text-gray-100 font-mono">{section.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
