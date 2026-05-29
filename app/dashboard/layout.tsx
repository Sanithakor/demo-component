"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import {
  Menu,
  X,
  LayoutDashboard,
  Heart,
  Download,
  Package,
  CreditCard,
  Settings,
  KeyRound,
  LogOut,
  Zap,
  ChevronRight,
} from "lucide-react"

const navItems = [
  { href: "/dashboard",           label: "Overview",   icon: LayoutDashboard },
  { href: "/dashboard/favorites", label: "Favorites",  icon: Heart },
  { href: "/dashboard/downloads", label: "Downloads",  icon: Download },
  { href: "/dashboard/templates", label: "Templates",  icon: Package },
  { href: "/dashboard/billing",   label: "Billing",    icon: CreditCard },
  { href: "/dashboard/settings",  label: "Settings",   icon: Settings },
  { href: "/dashboard/api-keys",  label: "API Keys",   icon: KeyRound },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname  = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  /* ─── shared sidebar markup ─── */
  const SidebarContent = () => (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow shrink-0">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">
              Components
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Hub
              </span>
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-widest">Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Nav links */}
      <div className="flex-1 overflow-y-auto px-3 py-5">
        <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Workspace
        </p>
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const active = pathname === item.href
            const Icon   = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                  active
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md shadow-slate-900/10"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all shrink-0 ${
                  active
                    ? "bg-white/20 dark:bg-slate-900/20"
                    : "bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700"
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="flex-1 truncate">{item.label}</span>
                {active && <ChevronRight className="w-3 h-3 opacity-50 shrink-0" />}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* User card */}
      <div className="px-3 pb-5 shrink-0">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-indigo-500/20 shrink-0">
              OB
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Olivia Bennett</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Product Designer</p>
            </div>
          </div>
          <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all">
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  )

  return (
    /*
     * The root app/layout.tsx already renders:
     *   <Navbar />          ← fixed, h-16
     *   <main className="flex-1">   ← this is where we live
     *     {children}        ← dashboard layout renders here
     *   </main>
     *   <Footer />
     *
     * So we must NOT add any extra top padding for the navbar.
     * We just need to offset for the sidebar width on desktop.
     */
    <div className="flex min-h-full bg-slate-50 dark:bg-slate-950">

      {/* ── Desktop sidebar ── fixed, starts right below the global navbar ── */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-20 overflow-hidden">
        <SidebarContent />
      </aside>

      {/* ── Mobile top bar ── sits below the global navbar ── */}
      <div className="lg:hidden fixed top-16 inset-x-0 z-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400">Dashboard</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {navItems.find(n => n.href === pathname)?.label ?? "Overview"}
            </p>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-slate-950 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <SidebarContent />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page content ── */}
      {/*
       * lg:pl-64  → offset for the fixed sidebar
       * pt-14 lg:pt-0 → on mobile, offset for the mobile top bar (h ≈ 56px)
       *                  on desktop, no extra offset needed (sidebar is beside, not above)
       */}
      <div className="flex-1 lg:pl-64 pt-14 lg:pt-0 min-w-0">
        <div className="p-5 lg:p-8 min-h-full">
          {children}
        </div>
      </div>
    </div>
  )
}
