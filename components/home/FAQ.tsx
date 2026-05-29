"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is ComponentsHub?",
    answer: "ComponentsHub is a premium marketplace for production-ready Tailwind CSS components, templates, and UI kits. We provide high-quality, customizable components that you can copy and paste directly into your projects."
  },
  {
    question: "How do I use the components?",
    answer: "Simply browse our collection, find a component you like, and click the copy button. Each component comes with full code for HTML, React, and Next.js. Paste it into your project and customize as needed."
  },
  {
    question: "What's included in the Pro plan?",
    answer: "The Pro plan gives you access to all premium components, templates, AI generator access, priority support, and a commercial license. You'll also get early access to new components before they're released to the public."
  },
  {
    question: "Can I use these components in commercial projects?",
    answer: "Yes! All components come with a commercial license that allows you to use them in unlimited personal and commercial projects. The only restriction is that you cannot redistribute or resell the components as-is."
  },
  {
    question: "Do you offer team licensing?",
    answer: "Yes, we offer team licenses for up to 10 members. Contact us for custom enterprise pricing for larger teams. Team licenses include shared access and admin management features."
  },
  {
    question: "How often do you add new components?",
    answer: "We add new components every week. Pro and Lifetime members get early access to new components before they're released to the public. Follow our changelog to stay updated."
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about ComponentsHub
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ