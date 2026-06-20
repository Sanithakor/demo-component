"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "Vercel",  abbr: "▲" },
  { name: "Stripe",  abbr: "S" },
  { name: "Notion",  abbr: "N" },
  { name: "Linear",  abbr: "◈" },
  { name: "Figma",   abbr: "F" },
  { name: "Supabase",abbr: "⚡" },
  { name: "Loom",    abbr: "L" },
]

const TrustedBy = () => {
  return (
    <section className="py-10 border-y border-gray-100 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-7"
        >
          Trusted by engineering teams at
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="flex items-center gap-2.5 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-bold text-gray-500 dark:text-gray-400 shrink-0">
                {company.abbr}
              </div>
              <span className="text-sm font-semibold tracking-tight">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
