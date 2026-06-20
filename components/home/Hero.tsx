"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Code, Layers, Sparkles, Star, Check } from "lucide-react"
import { Button } from "@/components/ui"

const stats = [
  { value: "500+", label: "Components" },
  { value: "50+",  label: "Templates"  },
  { value: "10K+", label: "Developers" },
]

const features = [
  { icon: Zap,    title: "Lightning Fast",     desc: "Optimized for performance with minimal bundle size" },
  { icon: Code,   title: "Clean Code",          desc: "Well-documented, type-safe, and production-ready"  },
  { icon: Layers, title: "Fully Customizable", desc: "Easy to theme and adapt to your brand"              },
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-40   w-[500px] h-[500px] rounded-full bg-indigo-500/10  blur-3xl" />
        <div className="absolute  top-1/3 -right-40  w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute  bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-indigo-50/50 dark:from-indigo-950/20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Announcement pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/ai-generator">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-950 transition-colors cursor-pointer">
                <Sparkles className="w-3.5 h-3.5" />
                New: AI Component Generator is live
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
          >
            Premium UI for
            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Modern Web Apps
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Production-ready Tailwind CSS components, templates, and UI kits.
            Copy, paste, and ship your next project in record time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/components">
              <Button size="lg" className="group min-w-[180px]">
                Browse Components
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/templates">
              <Button variant="outline" size="lg" className="min-w-[180px]">
                View Templates
              </Button>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-2">
              {["from-indigo-400 to-purple-500","from-pink-400 to-rose-500","from-amber-400 to-orange-500","from-emerald-400 to-teal-500"].map((g, i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-white dark:border-gray-950 ring-1 ring-gray-200 dark:ring-gray-800`} />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by <strong className="text-gray-700 dark:text-gray-300">10,000+</strong> developers
              </span>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex items-start gap-4 p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
              >
                <div className="p-2.5 bg-indigo-500/10 rounded-xl shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
