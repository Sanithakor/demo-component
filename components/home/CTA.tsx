"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gray-900 dark:bg-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-gray-900">
              Ready to build faster?
            </h2>
            <p className="mt-4 text-lg text-gray-300 dark:text-gray-600">
              Join thousands of developers who are shipping better products faster with ComponentsHub.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/components">
                <Button variant="outline" size="lg" className="border-white/30 text-white dark:border-gray-700 dark:text-gray-900 hover:bg-white/10 dark:hover:bg-gray-900/10">
                  Browse Components
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA