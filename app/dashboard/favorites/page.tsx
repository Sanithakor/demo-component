"use client"

import { motion } from "framer-motion"
import { Star, Heart, FolderPlus, ArrowRight } from "lucide-react"
import { Button, Card, CardContent, Badge } from "@/components/ui"
import ComponentPreview from "@/components/ui/ComponentPreview"

const collections = ["SaaS UI", "Dashboard UI", "AI Sections", "Marketing Sections"]
const favorites = [
  { title: "Product Launch Hero", category: "SaaS", premium: true, tags: ["Hero", "Marketing"], preview: "from-indigo-600 to-violet-600" },
  { title: "Analytics Grid", category: "Dashboard", premium: false, tags: ["Dashboard", "Metrics"], preview: "from-slate-500 to-slate-700" },
  { title: "AI Assistant", category: "AI Startup", premium: true, tags: ["AI", "Chatbot"], preview: "from-emerald-500 to-teal-500" },
  { title: "Agency Showcase", category: "Portfolio", premium: false, tags: ["Agency", "Portfolio"], preview: "from-pink-500 to-rose-500" },
]

export default function FavoritesPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Saved components</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">Your favorite collections</h1>
          </div>
          <Button className="w-full sm:w-auto gap-2"><FolderPlus className="w-4 h-4" /> Add collection</Button>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">Keep your most valuable templates and components ready for the next design sprint with curated favorite collections.</p>
      </motion.div>

      <div className="flex flex-wrap gap-3">
        {collections.map((collection) => (
          <button key={collection} className="rounded-full border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-white transition-all">{collection}</button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {favorites.map((item) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} className="group">
            <Card className="overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-2xl hover:shadow-slate-900/10 transition-all">
              <div className={`h-52 relative overflow-hidden`}>
                <ComponentPreview category={item.category} id={item.title} className="absolute inset-0 w-full h-full" />
                <div className="absolute top-3 left-3">
                  <Badge className={item.premium ? "bg-amber-500 text-white" : "bg-slate-900 text-white"}>{item.premium ? "Premium" : "Free"}</Badge>
                </div>
                <div className="absolute bottom-3 left-3">
                  <h2 className="text-lg font-semibold text-white drop-shadow-lg">{item.title}</h2>
                </div>
              </div>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Star className="w-4 h-4" /> Saved
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="gap-2"><Heart className="w-4 h-4" /> Remove</Button>
                    <Button variant="outline" size="sm" className="gap-2"><ArrowRight className="w-4 h-4" /> Open</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
