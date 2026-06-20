"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Heart, Download, Copy, Check, Monitor, Smartphone,
  Tablet, Sun, Moon, Share2, Tag, Clock, User,
  ChevronRight, ArrowLeft, Code2,
} from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import ComponentPreview from "@/components/ui/ComponentPreview"
import Link from "next/link"
import { allComponents } from "@/lib/data"

const codeSnippets: Record<string, { html: string; react: string; nextjs: string }> = {
  "hero-1": {
    html: `<section class="relative overflow-hidden bg-gray-900 py-24">
  <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
  <div class="relative max-w-7xl mx-auto px-6 text-center">
    <h1 class="text-5xl font-bold text-white">Build faster with
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
        Premium Components
      </span>
    </h1>
    <p class="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
      Production-ready Tailwind CSS components.
    </p>
    <div class="mt-10 flex gap-4 justify-center">
      <button class="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold">Get Started</button>
      <button class="px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold">Learn More</button>
    </div>
  </div>
</section>`,
    react: `export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-white">
          Build faster with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Premium Components
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Production-ready Tailwind CSS components.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}`,
    nextjs: `import { Button } from '@/components/ui'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-white">
          Build faster with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Premium Components
          </span>
        </h1>
        <div className="mt-10 flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  )
}`,
  },
}

// Fallback code for components without explicit snippets
function getCode(id: string, title: string, category: string) {
  if (codeSnippets[id]) return codeSnippets[id]
  const comp = allComponents.find(c => c.id === id)
  const base = `export default function ${title.replace(/\s+/g, "")}() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ${title} — ${category} */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          ${title}
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          ${comp?.description ?? "A beautiful, production-ready component."}
        </p>
      </div>
    </section>
  )
}`
  return { html: base.replace(/className/g, "class"), react: base, nextjs: base }
}

export default function ComponentDetailPage({ params }: { params: { id: string } }) {
  const component = allComponents.find(c => c.id === params.id) ?? allComponents[0]
  const code = getCode(params.id, component.title, component.category)
  const related = allComponents
    .filter(c => c.category === component.category && c.id !== component.id)
    .slice(0, 3)

  const [activeTab, setActiveTab] = useState<"html" | "react" | "nextjs">("react")
  const [copied, setCopied]       = useState(false)
  const [isDark, setIsDark]       = useState(true)
  const [device, setDevice]       = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [isFavorite, setIsFavorite] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom py-3.5">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/components" className="hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Components
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>{component.category}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">{component.title}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Main content ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Preview card */}
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between p-3.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                {/* Device switcher */}
                <div className="flex items-center gap-1">
                  {([["desktop", Monitor], ["tablet", Tablet], ["mobile", Smartphone]] as const).map(([d, Icon]) => (
                    <button
                      key={d}
                      onClick={() => setDevice(d)}
                      className={`p-2 rounded-lg transition-colors ${device === d ? "bg-white dark:bg-gray-800 shadow-sm text-indigo-600" : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg transition-colors"
                    title="Toggle preview theme"
                  >
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg transition-colors"
                    title="Copy link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Preview area */}
              <div className="p-6 bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-[320px]">
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`w-full rounded-2xl overflow-hidden shadow-2xl ${
                    device === "mobile" ? "max-w-[375px]" : device === "tablet" ? "max-w-[768px]" : "max-w-full"
                  }`}
                >
                  {/* Browser chrome */}
                  <div className={`flex items-center gap-2 px-4 py-2.5 ${isDark ? "bg-gray-800" : "bg-gray-100 border-b border-gray-200"}`}>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className={`flex-1 mx-6 h-5 rounded-md text-xs flex items-center justify-center ${isDark ? "bg-gray-700 text-gray-400" : "bg-white text-gray-400 border border-gray-200"}`}>
                      localhost:3000
                    </div>
                  </div>
                  <div className={`aspect-video relative overflow-hidden ${isDark ? "bg-gray-900" : "bg-white"}`}>
                    <ComponentPreview category={component.category} id={component.id} className="absolute inset-0 w-full h-full" />
                  </div>
                </motion.div>
              </div>
            </Card>

            {/* Code section */}
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center gap-1">
                  {(["html", "react", "nextjs"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                          : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      }`}
                    >
                      {tab === "html" ? "HTML" : tab === "react" ? "React" : "Next.js"}
                    </button>
                  ))}
                </div>
                <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-1.5">
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy code"}
                </Button>
              </div>
              <div className="bg-gray-900 dark:bg-gray-950 overflow-x-auto max-h-[480px] overflow-y-auto">
                <pre className="p-5 text-sm text-gray-100 font-mono leading-relaxed">
                  <code>{code[activeTab]}</code>
                </pre>
              </div>
            </Card>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-5">
            {/* Title & actions */}
            <Card className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <Badge variant="secondary" size="sm" className="mb-2">{component.category}</Badge>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{component.title}</h1>
                </div>
                {component.isPremium && (
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    PRO
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                {component.description ?? `A production-ready ${component.category} component built with Tailwind CSS.`}
              </p>
              <div className="space-y-2.5">
                <Button className="w-full gap-2" size="lg">
                  <Download className="w-4 h-4" /> Download Component
                </Button>
                <div className="grid grid-cols-2 gap-2.5">
                  <Button variant="outline" onClick={() => setIsFavorite(!isFavorite)} className="gap-1.5">
                    <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                    {isFavorite ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline" onClick={handleShare} className="gap-1.5">
                    <Share2 className="w-4 h-4" /> Share
                  </Button>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-5">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{component.downloads.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{component.likes}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Likes</div>
                </div>
              </div>
            </Card>

            {/* Info */}
            <Card className="p-5 space-y-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Details</h3>
              {[
                { icon: User,  label: "Author",  value: component.author ?? "ComponentsHub" },
                { icon: Clock, label: "Updated", value: component.updatedAt ?? "Recently"  },
                { icon: Code2, label: "License", value: "MIT / Commercial"                 },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm">
                  <Icon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="text-gray-500 dark:text-gray-400">{label}</span>
                  <span className="ml-auto font-medium text-gray-900 dark:text-white text-right">{value}</span>
                </div>
              ))}
            </Card>

            {/* Tags */}
            {component.tags && component.tags.length > 0 && (
              <Card className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-1.5">
                  {component.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" size="sm" className="gap-1">
                      <Tag className="w-2.5 h-2.5" /> {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            {/* Related components */}
            {related.length > 0 && (
              <Card className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Related</h3>
                <div className="space-y-2">
                  {related.map((comp) => (
                    <Link key={comp.id} href={`/components/${comp.id}`}>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">{comp.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{comp.category}</p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
