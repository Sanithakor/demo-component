"use client"

import { motion } from "framer-motion"
import { Search, Download, Star, ShieldCheck, RefreshCw, Clock } from "lucide-react"
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@/components/ui"

const downloads = [
  { name: "Startup Hero Pack", date: "May 20, 2026", version: "v1.3", size: "2.1MB", premium: false },
  { name: "Analytics Dashboard", date: "May 18, 2026", version: "v2.0", size: "3.8MB", premium: true },
  { name: "AI Workspace", date: "May 14, 2026", version: "v1.8", size: "4.9MB", premium: true },
]

const history = [
  { id: "DL-1928", title: "Component kit", date: "May 12, 2026", size: "1.8MB" },
  { id: "DL-1845", title: "Template suite", date: "May 08, 2026", size: "3.4MB" },
  { id: "DL-1771", title: "Marketing bundle", date: "May 04, 2026", size: "2.9MB" },
]

export default function DownloadsPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Download manager</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">Your most recent downloads</h1>
          </div>
          <Button className="w-full sm:w-auto">View download history</Button>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">Search, filter, and manage the latest assets you’ve downloaded from the component marketplace.</p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Recent downloads</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Everything you need in one place</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
              <Search className="w-4 h-4" /> Search downloads
            </div>
          </div>
          <div className="mt-8 space-y-4">
            {downloads.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.date} • {item.size}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <Badge className={item.premium ? "bg-amber-500 text-white" : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200"}>
                    {item.premium ? "Premium" : "Free"}
                  </Badge>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.version}</span>
                  <Button variant="outline" size="sm" className="gap-2"><RefreshCw className="w-4 h-4" /> Re-download</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
          <CardHeader>
            <CardTitle>Download activity</CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">Track progress on downloads and file deliveries.</p>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">AI Template Bundle</p>
                    <p className="mt-2 font-semibold text-slate-900 dark:text-white">Download complete</p>
                  </div>
                  <Badge className="bg-emerald-500 text-white">Done</Badge>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Marketing Components</p>
                    <p className="mt-2 font-semibold text-slate-900 dark:text-white">In progress</p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">68%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Auto downloads</p>
                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">Enabled</p>
                </div>
                <Button variant="ghost" size="sm">Pause</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 mt-8">
        <CardHeader>
          <CardTitle>Download history</CardTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400">Full archive of downloads for your account.</p>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead>
              <tr>
                <th className="pb-3 font-semibold text-slate-900 dark:text-white">Reference</th>
                <th className="pb-3 font-semibold text-slate-900 dark:text-white">Item</th>
                <th className="pb-3 font-semibold text-slate-900 dark:text-white">Date</th>
                <th className="pb-3 font-semibold text-slate-900 dark:text-white">Size</th>
                <th className="pb-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-colors">
                  <td className="py-4 font-medium text-slate-900 dark:text-white">{item.id}</td>
                  <td className="py-4">{item.title}</td>
                  <td className="py-4">{item.date}</td>
                  <td className="py-4">{item.size}</td>
                  <td className="py-4 text-right">
                    <Button variant="ghost" size="sm">Download</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
