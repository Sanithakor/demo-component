"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Home, Search, Zap, FileQuestion, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui"

const quickLinks = [
  { href: "/components", label: "Browse Components", desc: "500+ production-ready components" },
  { href: "/templates", label: "View Templates", desc: "Premium website templates" },
  { href: "/pricing", label: "Pricing Plans", desc: "Free and Pro plans available" },
  { href: "/docs", label: "Documentation", desc: "Guides and API reference" },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Components<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Hub</span>
            </span>
          </Link>
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div className="text-[10rem] sm:text-[14rem] font-black leading-none select-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              404
            </span>
          </div>
          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-24 h-24 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl shadow-gray-900/10 dark:shadow-gray-900/30 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
              <FileQuestion className="w-12 h-12 text-indigo-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Looks like this page took a detour. It might have been moved, deleted, or never existed.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button size="lg" className="gap-2">
              <Home className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
          <Link href="/components">
            <Button variant="outline" size="lg" className="gap-2">
              <Search className="w-4 h-4" /> Browse Components
            </Button>
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider">
            Popular pages
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.05 }}
              >
                <Link href={link.href}>
                  <div className="group flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-all">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{link.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-sm text-gray-400 dark:text-gray-600"
        >
          Think this is a mistake?{" "}
          <Link href="/contact" className="text-indigo-500 hover:text-indigo-600 transition-colors">
            Contact support
          </Link>
        </motion.p>
      </div>
    </div>
  )
}
