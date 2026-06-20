"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith("/dashboard")

  if (isDashboard) {
    // Dashboard pages: only render Navbar (fixed), no Footer, no flex wrapper
    // The dashboard layout handles its own sidebar + content layout
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar />
        {/* pt-16/20 to push content below the fixed navbar */}
        <div className="pt-16 lg:pt-20">
          {children}
        </div>
      </div>
    )
  }

  // All other pages: full Navbar + main + Footer
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
