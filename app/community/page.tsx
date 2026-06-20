"use client"

import { motion } from "framer-motion"
import { MessageSquare, Github, Twitter, Youtube, Star, Users, ArrowRight, Heart, Zap, BookOpen } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const channels = [
  {
    icon: MessageSquare,
    name: "Discord",
    desc: "Join our active Discord community to get help, share work, and connect with other developers.",
    count: "8,200+ members",
    href: "https://discord.gg/componentshub",
    color: "from-indigo-500 to-violet-500",
    cta: "Join Discord",
  },
  {
    icon: Github,
    name: "GitHub",
    desc: "Star our repo, report bugs, suggest features, and contribute to the codebase.",
    count: "3.1k stars",
    href: "https://github.com",
    color: "from-gray-700 to-gray-900",
    cta: "View on GitHub",
  },
  {
    icon: Twitter,
    name: "Twitter / X",
    desc: "Follow us for product updates, tips, and community highlights.",
    count: "12k followers",
    href: "https://twitter.com",
    color: "from-sky-400 to-blue-500",
    cta: "Follow us",
  },
  {
    icon: Youtube,
    name: "YouTube",
    desc: "Tutorials, walkthroughs, and live builds using our components.",
    count: "5.4k subscribers",
    href: "https://youtube.com",
    color: "from-red-500 to-rose-500",
    cta: "Subscribe",
  },
]

const highlights = [
  { author: "Alex Rivera", handle: "@alexdev", quote: "The components saved us weeks of work on our SaaS launch." },
  { author: "Priya Sharma", handle: "@priyabuilds", quote: "The design quality is unmatched. This is my go-to UI library now." },
  { author: "Tom Mueller", handle: "@tomcode", quote: "Dark mode support, TypeScript, Framer Motion — everything just works." },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Community</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Join the community
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            45,000+ developers building with ComponentsHub. Get help, share what you're building, and grow together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://discord.gg/componentshub" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <MessageSquare className="w-5 h-5" /> Join Discord
              </Button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-5 h-5" /> GitHub
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Community members", value: "45k+" },
            { label: "Discord members", value: "8.2k+" },
            { label: "GitHub stars", value: "3.1k" },
            { label: "Countries", value: "80+" },
          ].map((s) => (
            <Card key={s.label} className="p-6 text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{s.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Channels */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Where to find us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {channels.map((ch, i) => (
              <motion.div key={ch.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.05 }}>
                <Card className="p-6 hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${ch.color}`}>
                      <ch.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{ch.name}</h3>
                        <Badge variant="secondary" size="sm">{ch.count}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{ch.desc}</p>
                      <a href={ch.href} target="_blank" rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-500 hover:text-indigo-600 transition-colors">
                        {ch.cta} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community highlights */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What people are saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <Card key={h.author} className="p-6">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{h.quote}"</p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="font-medium text-gray-900 dark:text-white">{h.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{h.handle}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-20 bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Documentation", desc: "Full API docs and guides.", href: "/docs" },
              { icon: Zap, title: "Components", desc: "Browse 500+ ready-to-use components.", href: "/components" },
              { icon: Heart, title: "Templates", desc: "Professional full-page templates.", href: "/templates" },
            ].map((r) => (
              <Link key={r.title} href={r.href}>
                <Card className="p-6 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group">
                  <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl w-fit mb-4">
                    <r.icon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">{r.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{r.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
