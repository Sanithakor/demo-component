"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "Stripe", logo: "S" },
  { name: "Vercel", logo: "V" },
  { name: "Notion", logo: "N" },
  { name: "Linear", logo: "L" },
  { name: "Figma", logo: "F" },
  { name: "Slack", logo: "S" },
]

const TrustedBy = () => {
  return (
    <section className="py-12 border-y border-gray-100 dark:border-gray-800">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8"
        >
          Trusted by engineering teams at
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-600 dark:text-gray-400">
                {company.logo}
              </div>
              <span className="font-semibold">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy