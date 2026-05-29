"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Eye, Download, Heart, Share2, Check, Star, Monitor, Smartphone, Tablet, ChevronRight, Zap, Code2, Layers, Globe } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import TemplatePreview from "@/components/ui/TemplatePreview"
import Link from "next/link"
import { useState } from "react"

const templates: Record<string, {
  id: string; title: string; description: string; category: string;
  price: number; isPremium: boolean; pages: number; components: number;
  preview: string; author: string; updatedAt: string; tags: string[];
  features: string[]; techStack: string[];
}> = {
  "saas-1": {
    id: "saas-1", title: "SaaS Starter Kit", description: "A complete, production-ready SaaS landing page with pricing, features, testimonials, and auth pages. Built with Next.js App Router and Tailwind CSS.", category: "SaaS", price: 49, isPremium: true, pages: 12, components: 45, preview: "from-blue-500 to-purple-600", author: "ComponentsHub", updatedAt: "May 20, 2024", tags: ["SaaS", "Landing", "Auth", "Pricing"], features: ["Responsive design", "Dark mode", "Framer Motion animations", "SEO optimized", "TypeScript ready", "12 pages included"], techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  "ai-1": {
    id: "ai-1", title: "AI Dashboard", description: "Modern AI application dashboard with chat interface, analytics, and settings. Perfect for AI SaaS products.", category: "AI", price: 79, isPremium: true, pages: 8, components: 32, preview: "from-violet-500 to-pink-600", author: "ComponentsHub", updatedAt: "May 18, 2024", tags: ["AI", "Dashboard", "Chat", "Analytics"], features: ["AI chat interface", "Analytics charts", "User management", "Dark mode", "Mobile responsive", "8 pages included"], techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  "agency-1": {
    id: "agency-1", title: "Agency Portfolio", description: "Creative agency portfolio with case studies, team pages, and contact forms. Stunning animations and modern design.", category: "Agency", price: 39, isPremium: false, pages: 6, components: 24, preview: "from-orange-500 to-red-600", author: "ComponentsHub", updatedAt: "May 15, 2024", tags: ["Agency", "Portfolio", "Creative", "Animations"], features: ["Case study pages", "Team section", "Contact form", "Smooth animations", "Mobile first", "6 pages included"], techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  "finance-1": {
    id: "finance-1", title: "Finance Dashboard", description: "Financial analytics dashboard with charts, reporting, and portfolio management. Clean and professional design.", category: "Finance", price: 69, isPremium: true, pages: 10, components: 38, preview: "from-green-500 to-teal-600", author: "ComponentsHub", updatedAt: "May 12, 2024", tags: ["Finance", "Dashboard", "Charts", "Analytics"], features: ["Portfolio charts", "Transaction history", "Budget tracking", "Dark mode", "Export reports", "10 pages included"], techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  "portfolio-1": {
    id: "portfolio-1", title: "Developer Portfolio", description: "Personal portfolio for developers with blog, projects showcase, and skills section. Clean and minimal design.", category: "Portfolio", price: 29, isPremium: false, pages: 5, components: 18, preview: "from-cyan-500 to-blue-600", author: "ComponentsHub", updatedAt: "May 10, 2024", tags: ["Portfolio", "Developer", "Blog", "Projects"], features: ["Projects showcase", "Blog section", "Skills display", "Contact form", "Dark mode", "5 pages included"], techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  "dashboard-1": {
    id: "dashboard-1", title: "Admin Dashboard", description: "Complete admin dashboard with tables, charts, user management, and settings. Enterprise-grade design.", category: "Dashboard", price: 59, isPremium: true, pages: 15, components: 52, preview: "from-indigo-500 to-purple-600", author: "ComponentsHub", updatedAt: "May 8, 2024", tags: ["Admin", "Dashboard", "Tables", "Charts"], features: ["Data tables", "Analytics charts", "User management", "Role permissions", "Dark mode", "15 pages included"], techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
}

const relatedTemplates = [
  { id: "ai-1", title: "AI Dashboard", category: "AI", preview: "from-violet-500 to-pink-600" },
  { id: "dashboard-1", title: "Admin Dashboard", category: "Dashboard", preview: "from-indigo-500 to-purple-600" },
  { id: "finance-1", title: "Finance Dashboard", category: "Finance", preview: "from-green-500 to-teal-600" },
]

export default function TemplateDetailPage({ params }: { params: { id: string } }) {
  const template = templates[params.id] ?? templates["saas-1"]
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [isFavorite, setIsFavorite] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom py-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/templates" className="hover:text-gray-900 dark:hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Templates
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white">{template.title}</span>
        </div>
      </div>

      <div className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Preview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Device switcher */}
            <div className="flex items-center gap-2">
              {([["desktop", Monitor], ["tablet", Tablet], ["mobile", Smartphone]] as const).map(([d, Icon]) => (
                <button key={d} onClick={() => setDevice(d)}
                  className={`p-2.5 rounded-xl border transition-all ${device === d ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600" : "border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300"}`}>
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* Preview window */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className={`mx-auto transition-all duration-300 ${device === "mobile" ? "max-w-sm" : device === "tablet" ? "max-w-2xl" : "max-w-full"}`}>
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-900/10">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4 px-3 py-1 bg-white dark:bg-gray-700 rounded-md text-xs text-gray-400 text-center">
                    componentshub.com/preview/{template.id}
                  </div>
                </div>
                {/* Preview content */}
                <div className={`h-[420px] relative overflow-hidden`}>
                  <TemplatePreview category={template.category} id={template.id} className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-500" /> What's included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {template.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Tech Stack */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-500" /> Tech stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {template.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Related */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Related templates</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedTemplates.filter(r => r.id !== template.id).slice(0, 3).map((rel) => (
                  <Link key={rel.id} href={`/templates/${rel.id}`}>
                    <div className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                      <div className="h-28 relative overflow-hidden">
                        <TemplatePreview category={rel.category} id={rel.id} className="absolute inset-0 w-full h-full" />
                      </div>
                      <div className="p-3">
                        <p className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">{rel.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{rel.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Info panel */}
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="p-6 space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" size="sm" className="mb-2">{template.category}</Badge>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{template.title}</h1>
                  </div>
                  {template.isPremium && <Badge className="bg-amber-500 text-white">PRO</Badge>}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">${template.price}</span>
                  <span className="text-gray-500 text-sm">one-time</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[{ label: "Pages", value: template.pages }, { label: "Components", value: template.components }].map(s => (
                    <div key={s.label} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 text-center">
                      <p className="text-xl font-bold text-gray-900 dark:text-white">{s.value}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" /> Purchase Template
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Eye className="w-4 h-4 mr-2" /> Live Preview
                  </Button>
                  <div className="flex gap-3">
                    <Button variant="ghost" className="flex-1" onClick={() => setIsFavorite(!isFavorite)}>
                      <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                      {isFavorite ? "Saved" : "Save"}
                    </Button>
                    <Button variant="ghost" className="flex-1" onClick={handleShare}>
                      {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Share2 className="w-4 h-4 mr-2" />}
                      {copied ? "Copied!" : "Share"}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Meta */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Details</h3>
                {[
                  { label: "Author", value: template.author },
                  { label: "Last updated", value: template.updatedAt },
                  { label: "License", value: "Commercial" },
                  { label: "Support", value: "6 months included" },
                ].map(d => (
                  <div key={d.label} className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{d.label}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{d.value}</span>
                  </div>
                ))}
              </Card>
            </motion.div>

            {/* Tags */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Rating */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">5.0</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Based on 48 reviews</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
