"use client"

import { motion } from "framer-motion"
import { FileText, Check, X, CreditCard, Users, Globe, Store } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const licenseTypes = [
  {
    name: "Personal",
    price: "Free",
    description: "For individual developers and hobbyists",
    features: [
      { name: "Use in personal projects", included: true },
      { name: "Use in client projects", included: true },
      { name: "Modify components", included: true },
      { name: "Team sharing", included: false },
      { name: "Resale rights", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    name: "Commercial",
    price: "Included",
    description: "For businesses and commercial use",
    features: [
      { name: "Use in personal projects", included: true },
      { name: "Use in client projects", included: true },
      { name: "Modify components", included: true },
      { name: "Team sharing (up to 5)", included: true },
      { name: "Resale rights", included: false },
      { name: "Priority support", included: false },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams and organizations",
    features: [
      { name: "Use in personal projects", included: true },
      { name: "Use in client projects", included: true },
      { name: "Modify components", included: true },
      { name: "Unlimited team sharing", included: true },
      { name: "Resale rights", included: true },
      { name: "Dedicated support", included: true },
    ],
  },
]

const faqs = [
  {
    question: "What does the commercial license cover?",
    answer: "The commercial license allows you to use our components in unlimited personal and commercial projects. You can use them in client work, SaaS products, and any other commercial application. It includes team sharing for up to 5 team members.",
  },
  {
    question: "Can I use components in client projects?",
    answer: "Yes! With both our personal and commercial licenses, you can use the components in projects for your clients. The commercial license also allows for team sharing within your organization.",
  },
  {
    question: "What am I not allowed to do?",
    answer: "You cannot redistribute, resell, or sublicense our components as-is. You cannot claim ownership of our components. You cannot use our components in illegal or harmful applications.",
  },
  {
    question: "Do I need a separate license for each project?",
    answer: "No! All our licenses are perpetual and allow unlimited use across unlimited projects. Once you purchase a license, you can use the components in as many projects as you like.",
  },
  {
    question: "Can I modify the components?",
    answer: "Absolutely! We encourage you to customize and adapt our components to fit your needs. The license grants you the right to modify the components for your projects.",
  },
]

export default function LicensePage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">License</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Simple, Clear Licensing
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Use our components with confidence. Our licenses are designed to be simple and straightforward.
          </p>
        </motion.div>

        {/* License Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {licenseTypes.map((license, index) => (
            <motion.div
              key={license.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`relative p-8 bg-white dark:bg-gray-900 rounded-2xl border ${
                license.popular
                  ? "border-indigo-500 shadow-xl shadow-indigo-500/10"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              {license.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{license.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{license.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{license.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {license.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 dark:text-gray-600 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={license.popular ? "primary" : "outline"}
                className="w-full"
              >
                {license.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CreditCard, title: "Commercial Use", desc: "Use in client projects and commercial products" },
              { icon: Users, title: "Team Sharing", desc: "Share with your team according to your license" },
              { icon: Globe, title: "Unlimited Projects", desc: "Use in as many projects as you want" },
              { icon: Store, title: "Lifetime Access", desc: "Keep using components even after subscription ends" },
            ].map((item) => (
              <Card key={item.title} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Choose a plan and start building amazing things.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing">
              <Button size="lg">View Pricing</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Sales</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}