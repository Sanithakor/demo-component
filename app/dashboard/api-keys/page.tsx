"use client"

import { motion } from "framer-motion"
import { KeyRound, Plus, ShieldCheck, Copy, Trash2, Sparkles, ArrowRight } from "lucide-react"
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@/components/ui"

const keys = [
  { name: "Production key", id: "pk_live_3c7df...", created: "Apr 14, 2026", active: true },
  { name: "Staging key", id: "pk_test_1b9ab...", created: "Mar 02, 2026", active: false },
]

export default function ApiKeysPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Developer tools</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">API keys & access</h1>
          </div>
          <Button className="w-full sm:w-auto gap-2"><Plus className="w-4 h-4" /> Create new key</Button>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">Generate API credentials for integrations, environments, and custom workflows with secure rotation tooling.</p>
      </motion.div>

      <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
        <CardHeader>
          <CardTitle>Active keys</CardTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400">Keep only the keys you need and rotate credentials regularly.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {keys.map((key) => (
            <div key={key.id} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{key.name}</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">{key.id}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Created {key.created}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className={key.active ? "bg-emerald-500 text-white" : "bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-200"}>{key.active ? "Active" : "Inactive"}</Badge>
                <Button variant="outline" size="sm" className="gap-2"><Copy className="w-4 h-4" /> Copy</Button>
                <Button variant="ghost" size="sm" className="gap-2 text-rose-500 hover:text-rose-600"><Trash2 className="w-4 h-4" /> Revoke</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
        <CardHeader>
          <CardTitle>Security guidance</CardTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400">Use these best practices to keep your API traffic secure.</p>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: ShieldCheck, title: "Rotate keys", description: "Update keys every 90 days to reduce the risk of compromise." },
            { icon: KeyRound, title: "Limit scope", description: "Only enable the permissions required for each integration." },
            { icon: Sparkles, title: "Monitor usage", description: "Review API requests and revoke unused credentials." },
            { icon: ArrowRight, title: "Store securely", description: "Keep your secrets in a safe environment or vault." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5">
              <div className="flex items-center gap-3 text-indigo-500">
                <item.icon className="w-5 h-5" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
