"use client"

import { motion } from "framer-motion"
import { Heart, Eye, Download, Filter, Grid } from "lucide-react"
import { Button, Card, CardContent, Badge } from "@/components/ui"
import TemplatePreview from "@/components/ui/TemplatePreview"

const categories = ["SaaS", "AI Startup", "Dashboard", "Agency", "Portfolio", "Finance"]
const templates = [
  {
    title: "Launchpad Pro",
    category: "SaaS",
    tags: ["React", "Tailwind", "API"],
    premium: true,
    preview: "from-indigo-500 to-violet-600",
  },
  {
    title: "AI Studio",
    category: "AI Startup",
    tags: ["Figma", "ML", "SaaS"],
    premium: true,
    preview: "from-emerald-500 to-teal-500",
  },
  {
    title: "Metrics Board",
    category: "Dashboard",
    tags: ["Analytics", "Charts", "UI"],
    premium: false,
    preview: "from-slate-500 to-slate-700",
  },
  {
    title: "Studio Portfolio",
    category: "Agency",
    tags: ["Portfolio", "Brand", "Web"],
    premium: false,
    preview: "from-pink-500 to-rose-500",
  },
]

export default function TemplatesPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Template library</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">Premium starter templates</h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" className="gap-2"><Filter className="w-4 h-4" /> Filter</Button>
            <Button className="gap-2"><Grid className="w-4 h-4" /> Grid</Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category} className="rounded-full border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">{category}</button>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => (
          <motion.div key={template.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} className="group">
            <Card className="overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-2xl hover:shadow-slate-900/10 transition-all">
              <div className="h-56 relative overflow-hidden">
                <TemplatePreview category={template.category} id={template.title} className="absolute inset-0 w-full h-full" />
                <div className="absolute top-3 left-3 z-10">
                  <Badge className={template.premium ? "bg-amber-500 text-white" : "bg-slate-900 text-white"}>
                    {template.premium ? "Premium" : "Free"}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <div className="rounded-full bg-black/30 backdrop-blur-sm px-3 py-1 text-xs text-white">{template.category}</div>
                </div>
                <div className="absolute bottom-3 left-3 z-10">
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg">{template.title}</h3>
                </div>
              </div>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <Badge key={tag} className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Heart className="w-4 h-4" />
                    <span>95</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Download className="w-4 h-4" />
                    <span>1.2k</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Button variant="outline" size="sm" className="gap-2"><Eye className="w-4 h-4" /> Preview</Button>
                  <Button size="sm" className="gap-2"><Download className="w-4 h-4" /> Download</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
