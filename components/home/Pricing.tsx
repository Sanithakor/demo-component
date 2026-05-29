"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button, Badge } from "@/components/ui"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: 0,
    features: [
      { name: "Access to free components", included: true },
      { name: "Basic templates", included: true },
      { name: "Community support", included: true },
      { name: "Personal license", included: true },
      { name: "Premium components", included: false },
      { name: "AI generator access", included: false },
      { name: "Priority support", included: false },
    ],
    cta: "Get Started",
    variant: "outline",
  },
  {
    name: "Pro",
    description: "For professional developers",
    price: 29,
    period: "/month",
    popular: true,
    features: [
      { name: "All free features", included: true },
      { name: "Premium components", included: true },
      { name: "All templates", included: true },
      { name: "AI generator access", included: true },
      { name: "Priority support", included: true },
      { name: "Commercial license", included: true },
      { name: "Early access to new components", included: true },
    ],
    cta: "Start Free Trial",
    variant: "primary",
  },
  {
    name: "Lifetime",
    description: "One-time payment, lifetime access",
    price: 199,
    period: "one-time",
    features: [
      { name: "All Pro features", included: true },
      { name: "Lifetime updates", included: true },
      { name: "All future components", included: true },
      { name: "All future templates", included: true },
      { name: "Extended commercial license", included: true },
      { name: "Dedicated support", included: true },
      { name: "Custom component requests", included: true },
    ],
    cta: "Get Lifetime Access",
    variant: "secondary",
  },
]

const Pricing = () => {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include access to our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 bg-white dark:bg-gray-900 rounded-2xl border ${
                plan.popular
                  ? "border-indigo-500 shadow-xl shadow-indigo-500/10"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                {plan.period && (
                  <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
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

              <Link href={plan.popular ? "/pricing" : "/login"}>
                <Button variant={plan.variant as any} className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400">
            All plans include a 14-day money-back guarantee.{" "}
            <Link href="/pricing" className="text-indigo-500 hover:text-indigo-600 font-medium">
              View full comparison
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing