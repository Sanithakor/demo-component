"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Heart,
  Download,
  Copy,
  Check,
  Eye,
  Code2,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Share2,
  Tag,
  Clock,
  User,
  Star,
  ChevronRight,
} from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const componentData = {
  id: "hero-1",
  title: "Modern Hero Section",
  description: "A beautiful, responsive hero section with gradient backgrounds, animated elements, and smooth transitions. Perfect for landing pages and marketing sites.",
  category: "Hero",
  isPremium: false,
  author: "Sarah Chen",
  updatedAt: "May 15, 2024",
  downloads: 1234,
  likes: 89,
  tags: ["Hero", "Landing", "Gradient", "Animated"],
  code: {
    html: `<section class="relative overflow-hidden bg-gray-900">
  <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div class="text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
        Build faster with
        <span class="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Premium Components
        </span>
      </h1>
      <p class="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
        Production-ready Tailwind CSS components for modern web applications.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
        <button class="px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>`,
    react: `export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Build faster with
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Premium Components
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready Tailwind CSS components for modern web applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}`,
    nextjs: `import { Button } from '@/components/ui'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Build faster with
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Premium Components
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready Tailwind CSS components for modern web applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}`,
  },
  relatedComponents: [
    { id: "hero-2", title: "Startup Hero", category: "Hero" },
    { id: "hero-3", title: "SaaS Hero", category: "Hero" },
    { id: "cta-1", title: "CTA Section", category: "CTA" },
  ],
}

export default function ComponentDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<"html" | "react" | "nextjs">("html")
  const [copied, setCopied] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [isFavorite, setIsFavorite] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(componentData.code[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/components" className="hover:text-gray-900 dark:hover:text-white">
              Components
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>{componentData.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white">{componentData.title}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Preview */}
            <Card className="overflow-hidden">
              {/* Preview Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDevice("desktop")}
                    className={`p-2 rounded-lg transition-colors ${
                      device === "desktop" ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Monitor className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={() => setDevice("tablet")}
                    className={`p-2 rounded-lg transition-colors ${
                      device === "tablet" ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Tablet className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={() => setDevice("mobile")}
                    className={`p-2 rounded-lg transition-colors ${
                      device === "mobile" ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {isDark ? <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Preview Area */}
              <div className={`bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center ${
                device === "mobile" ? "max-w-sm mx-auto" : device === "tablet" ? "max-w-2xl mx-auto" : ""
              }`}>
                <div className={`w-full ${isDark ? "bg-gray-900" : "bg-white"} rounded-xl shadow-xl overflow-hidden transition-colors`}>
                  {/* Mock browser header */}
                  <div className={`h-8 ${isDark ? "bg-gray-800" : "bg-gray-100"} flex items-center gap-2 px-4`}>
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  {/* Mock content */}
                  <div className={`p-8 ${isDark ? "bg-gray-900" : "bg-white"}`}>
                    <div className="text-center">
                      <div className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                        Build faster with
                      </div>
                      <div className={`mt-2 text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400`}>
                        Premium Components
                      </div>
                      <div className={`mt-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        Production-ready Tailwind CSS components
                      </div>
                      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">Get Started</button>
                        <button className={`px-4 py-2 border rounded-lg text-sm ${isDark ? "border-gray-600 text-white" : "border-gray-300 text-gray-700"}`}>Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Code Section */}
            <Card>
              {/* Tabs */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  {["html", "react", "nextjs"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {tab === "html" ? "HTML" : tab === "react" ? "React" : "Next.js"}
                    </button>
                  ))}
                </div>
                <Button variant="ghost" size="sm" onClick={handleCopy}>
                  {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>

              {/* Code */}
              <div className="bg-gray-900 dark:bg-gray-950 p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{componentData.code[activeTab]}</code>
                </pre>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Title & Actions */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{componentData.title}</h1>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">{componentData.category}</p>
                </div>
                {componentData.isPremium && (
                  <Badge className="bg-amber-500 text-white">PRO</Badge>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">{componentData.description}</p>

              <div className="flex flex-col gap-3">
                <Button className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Component
                </Button>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                    {isFavorite ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{componentData.downloads.toLocaleString()}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{componentData.likes}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Likes</div>
                </div>
              </div>
            </Card>

            {/* Info */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Created by</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{componentData.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Updated</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{componentData.updatedAt}</span>
                </div>
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {componentData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Related Components */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Related Components</h3>
              <div className="space-y-3">
                {componentData.relatedComponents.map((comp) => (
                  <Link
                    key={comp.id}
                    href={`/components/${comp.id}`}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{comp.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{comp.category}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}