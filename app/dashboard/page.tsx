"use client"

import { motion } from "framer-motion"
import {
  Bell, Download, CreditCard, FileText, Heart,
  ChevronRight, Clock, TrendingUp, Sparkles, ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import { Button, Badge, Card, CardHeader, CardTitle, CardContent } from "@/components/ui"

const stats = [
  { label: "Total downloads", value: "1,234", change: "+12%", positive: true, icon: Download, color: "from-blue-500 to-indigo-500" },
  { label: "Favorites", value: "89", change: "+5%", positive: true, icon: Heart, color: "from-pink-500 to-rose-500" },
  { label: "Templates", value: "12", change: "+2", positive: true, icon: FileText, color: "from-violet-500 to-purple-500" },
  { label: "This month", value: "$49", change: "+23%", positive: true, icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
]

const recentDownloads = [
  { name: "SaaS Pricing Table", date: "2 hours ago", type: "Component", color: "from-indigo-500 to-violet-600" },
  { name: "AI Dashboard", date: "5 hours ago", type: "Template", color: "from-violet-500 to-pink-500" },
  { name: "Hero Section Pro", date: "1 day ago", type: "Component", color: "from-blue-500 to-cyan-500" },
  { name: "Bento Grid Layout", date: "2 days ago", type: "Component", color: "from-emerald-500 to-teal-500" },
]

const quickActions = [
  { label: "Manage billing", icon: CreditCard, href: "/dashboard/billing" },
  { label: "Review favorites", icon: Heart, href: "/dashboard/favorites" },
  { label: "Browse templates", icon: FileText, href: "/dashboard/templates" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Overview</p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Your workspace
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track downloads, favorites, and activity across your account.
          </p>
        </div>
        <Link href="/components">
          <Button className="gap-2 shrink-0">
            <Sparkles className="w-4 h-4" /> Browse components
          </Button>
        </Link>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05 }}
          >
            <Card className="p-5 hover:shadow-lg hover:shadow-slate-900/5 dark:hover:shadow-slate-900/20 transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
                <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className={`text-xs font-semibold ${stat.positive ? "text-emerald-500" : "text-red-500"}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-slate-400">vs last month</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent downloads */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2"
        >
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
              <div>
                <CardTitle className="text-base">Recent downloads</CardTitle>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Latest assets you accessed</p>
              </div>
              <Link href="/dashboard/downloads">
                <Button variant="ghost" size="sm" className="gap-1 text-xs">
                  View all <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {recentDownloads.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05 }}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                      <Download className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{item.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.type}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 flex-shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="space-y-5"
        >
          {/* Quick actions */}
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <CardHeader className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base">Quick actions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              {quickActions.map((action) => (
                <Link key={action.label} href={action.href}>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
                    <div className="h-8 w-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                      <action.icon className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {action.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                </Link>
              ))}
              <Link href="/pricing">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 cursor-pointer hover:opacity-90 transition-opacity mt-2">
                  <div className="h-8 w-8 rounded-xl bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-white">Upgrade to Pro</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
                </div>
              </Link>
            </CardContent>
          </Card>

          {/* Workspace status */}
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Workspace status</p>
              <Badge className="bg-emerald-500 text-white text-xs">Active</Badge>
            </div>
            <div className="space-y-3">
              {[
                { label: "Plan", value: "Pro" },
                { label: "Renewal", value: "May 12, 2027" },
                { label: "Support", value: "Priority" },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">{item.label}</span>
                  <span className="font-medium text-slate-900 dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3">
                <p className="text-xs text-slate-500 dark:text-slate-400">Latest update</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">
                  New premium templates added to the gallery.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
