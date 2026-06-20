"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 sm:p-14 lg:p-20 text-center"
        >
          {/* Background decorations */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Free to get started
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to build faster?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl mx-auto">
              Join thousands of developers shipping better products with ComponentsHub.
              No credit card required.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl shadow-black/20 min-w-[200px] font-semibold"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/components">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10 dark:border-white/40 dark:text-white min-w-[200px]"
                >
                  Browse Components
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              {["No credit card required", "Free plan forever", "500+ components", "New components weekly"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
