"use client"

import { motion } from "framer-motion"
import { Cookie, Shield, Settings, BarChart2, Mail } from "lucide-react"
import { Badge, Card } from "@/components/ui"
import Link from "next/link"

const cookieTypes = [
  {
    icon: Shield,
    name: "Essential Cookies",
    purpose: "Required for the website to function correctly. These cannot be disabled.",
    examples: ["Session authentication", "Security tokens", "Cart & checkout state"],
    canDisable: false,
  },
  {
    icon: BarChart2,
    name: "Analytics Cookies",
    purpose: "Help us understand how visitors interact with our site so we can improve it.",
    examples: ["Page view counts", "Session duration", "Traffic sources"],
    canDisable: true,
  },
  {
    icon: Settings,
    name: "Preference Cookies",
    purpose: "Remember your settings and personalise your experience.",
    examples: ["Dark/light mode preference", "Language selection", "Sidebar state"],
    canDisable: true,
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Legal</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Cookie Policy</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">Last updated: May 28, 2024</p>
        </motion.div>

        {/* Intro card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="flex items-start gap-4 p-7 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 rounded-2xl mb-12">
          <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/60 rounded-xl shrink-0">
            <Cookie className="w-6 h-6 text-indigo-500" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">What are cookies?</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They help us remember
              your preferences, keep you signed in, and understand how you use our site so we can improve it.
            </p>
          </div>
        </motion.div>

        {/* Cookie types */}
        <div className="space-y-5 mb-12">
          {cookieTypes.map((type, i) => (
            <motion.div key={type.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.07 }}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl shrink-0">
                    <type.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{type.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        type.canDisable
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      }`}>
                        {type.canDisable ? "Optional" : "Required"}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">{type.purpose}</p>
                    <ul className="mt-3 space-y-1">
                      {type.examples.map(ex => (
                        <li key={ex} className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Managing cookies */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="p-7 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 mb-10">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Managing your cookie preferences</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            You can control and delete cookies through your browser settings. Note that disabling certain cookies
            may affect functionality. Most browsers allow you to refuse cookies or delete them after browsing.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Questions about our cookie policy?</p>
          <a href="mailto:privacy@componentshub.com"
            className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium transition-colors">
            <Mail className="w-4 h-4" />
            privacy@componentshub.com
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white underline underline-offset-2">Privacy Policy</Link>
            <span className="text-gray-300">·</span>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white underline underline-offset-2">Terms of Service</Link>
            <span className="text-gray-300">·</span>
            <Link href="/license" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white underline underline-offset-2">License</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
