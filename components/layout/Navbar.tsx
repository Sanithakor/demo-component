"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Github,
  ArrowRight,
  Zap,
  Box,
  FileText,
  CreditCard,
  BookOpen,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/components", label: "Components", icon: Box },
  { href: "/templates", label: "Templates", icon: FileText },
  { href: "/pricing", label: "Pricing", icon: CreditCard },
  { href: "/docs", label: "Docs", icon: BookOpen },
]

const popularSearches = [
  { label: "Hero Section", href: "/components?category=hero" },
  { label: "Pricing Card", href: "/components?category=pricing" },
  { label: "Dashboard", href: "/components?category=dashboard" },
  { label: "Bento Grid", href: "/components?category=bento" },
  { label: "Navbar", href: "/components?category=navigation" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Persist dark mode in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const dark = saved === "dark" || (!saved && prefersDark)
    setIsDark(dark)
    document.documentElement.classList.toggle("dark", dark)
  }, [])

  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  // ESC closes search, Cmd+K opens it
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false)
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/components?search=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm dark:bg-gray-950/90 dark:border-gray-800/80"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
                <Zap className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 blur transition-opacity" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Components<span className="text-gradient">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  pathname === link.href || pathname?.startsWith(link.href + "/")
                    ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-1.5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline text-xs text-gray-400 dark:text-gray-500">
                <kbd className="font-sans">⌘K</kbd>
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleDark}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all hidden md:flex"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Sign In Button */}
            <Link
              href="/login"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              <User className="w-4 h-4" />
              Sign In
            </Link>

            {/* CTA Button */}
            <Link
              href="/pricing"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:opacity-90 transition-all shadow-md shadow-indigo-500/25"
            >
              Get Pro
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 lg:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsSearchOpen(false)}
          >
            <div className="container-custom pt-20 sm:pt-28">
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-200/50 dark:ring-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <form onSubmit={handleSearchSubmit}>
                  <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
                    <Search className="w-5 h-5 text-gray-400 shrink-0" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search components, templates, docs..."
                      className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-base"
                      autoFocus
                    />
                    <kbd className="hidden sm:block px-2 py-1 text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 rounded font-sans">
                      ESC
                    </kbd>
                  </div>
                </form>
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                    Popular searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsSearchOpen(false)}
                        className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
                    pathname === link.href
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-800 space-y-2">
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Sign In
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:opacity-90 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Pro
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar