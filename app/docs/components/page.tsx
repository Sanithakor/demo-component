"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, ChevronRight, Search, Layers, Code2, Zap } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const componentDocs = [
  {
    name: "Button",
    description: "Versatile button component with multiple variants, sizes, and loading state.",
    variants: ["primary", "secondary", "outline", "ghost", "destructive"],
    code: `import { Button } from '@components-hub/react'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state
<Button isLoading>Loading...</Button>`,
  },
  {
    name: "Card",
    description: "Flexible card container with optional hover effects and glass morphism.",
    variants: ["default", "hover", "glass"],
    code: `import { Card, CardHeader, CardTitle, CardContent } from '@components-hub/react'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>

// With hover effect
<Card hover>
  <CardContent>Hoverable card</CardContent>
</Card>`,
  },
  {
    name: "Badge",
    description: "Small status indicator with multiple color variants.",
    variants: ["default", "secondary", "success", "warning", "destructive", "outline"],
    code: `import { Badge } from '@components-hub/react'

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`,
  },
  {
    name: "Input",
    description: "Form input with label, error state, and icon support.",
    variants: ["default", "with-icon", "with-error"],
    code: `import { Input } from '@components-hub/react'
import { Mail } from 'lucide-react'

// Basic
<Input label="Email" placeholder="you@example.com" />

// With icon
<Input
  label="Email"
  placeholder="you@example.com"
  icon={<Mail className="w-5 h-5" />}
/>

// With error
<Input
  label="Email"
  placeholder="you@example.com"
  error="Please enter a valid email"
/>`,
  },
]

export default function ComponentsDocsPage() {
  const [activeComponent, setActiveComponent] = useState("Button")
  const [copied, setCopied] = useState<string | null>(null)
  const [search, setSearch] = useState("")

  const filtered = componentDocs.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )
  const active = componentDocs.find(c => c.name === activeComponent) ?? componentDocs[0]

  const handleCopy = (code: string, name: string) => {
    navigator.clipboard.writeText(code)
    setCopied(name)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen pt-16 flex">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search components..."
              className="w-full pl-9 pr-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Components</p>
            <nav className="space-y-1">
              {filtered.map(c => (
                <button key={c.name} onClick={() => setActiveComponent(c.name)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                    activeComponent === c.name
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}>
                  {activeComponent === c.name && <ChevronRight className="w-3 h-3" />}
                  {c.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <motion.div key={active.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="secondary" className="mb-4">Component</Badge>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{active.name}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{active.description}</p>

            {/* Variants */}
            <div className="mt-6 flex flex-wrap gap-2">
              {active.variants.map(v => (
                <Badge key={v} variant="outline">{v}</Badge>
              ))}
            </div>

            {/* Preview */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-500" /> Preview
              </h2>
              <div className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-wrap items-center gap-4">
                {active.name === "Button" && (
                  <>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </>
                )}
                {active.name === "Badge" && (
                  <>
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="destructive">Error</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </>
                )}
                {active.name === "Card" && (
                  <Card className="w-full max-w-sm p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Card Title</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Card content goes here.</p>
                  </Card>
                )}
                {active.name === "Input" && (
                  <div className="w-full max-w-sm space-y-4">
                    <input placeholder="Basic input" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                )}
              </div>
            </div>

            {/* Code */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-500" /> Usage
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800 dark:bg-gray-900">
                  <span className="text-xs text-gray-400 font-mono">tsx</span>
                  <button onClick={() => handleCopy(active.code, active.name)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                    {copied === active.name ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied === active.name ? "Copied!" : "Copy"}
                  </button>
                </div>
                <pre className="p-4 bg-gray-900 dark:bg-gray-950 overflow-x-auto">
                  <code className="text-sm text-gray-100 font-mono">{active.code}</code>
                </pre>
              </div>
            </div>

            {/* Props table */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-500" /> Props
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      {["Prop", "Type", "Default", "Description"].map(h => (
                        <th key={h} className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {active.name === "Button" && [
                      ["variant", "string", "primary", "Visual style variant"],
                      ["size", "string", "md", "Button size: sm | md | lg | icon"],
                      ["isLoading", "boolean", "false", "Shows loading spinner"],
                      ["disabled", "boolean", "false", "Disables the button"],
                    ].map(([prop, type, def, desc]) => (
                      <tr key={prop} className="bg-white dark:bg-gray-900">
                        <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400">{prop}</td>
                        <td className="px-4 py-3 font-mono text-gray-600 dark:text-gray-400">{type}</td>
                        <td className="px-4 py-3 font-mono text-gray-500">{def}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{desc}</td>
                      </tr>
                    ))}
                    {active.name !== "Button" && (
                      <tr className="bg-white dark:bg-gray-900">
                        <td colSpan={4} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                          See full props documentation in the source code
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
