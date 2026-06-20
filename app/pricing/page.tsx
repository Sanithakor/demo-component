"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, HelpCircle, Zap, Crown, Sparkles } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: 0,
    period: "forever",
    icon: Zap,
    features: [
      { name: "Access to free components", included: true },
      { name: "Basic templates", included: true },
      { name: "Community support", included: true },
      { name: "Personal license", included: true },
      { name: "Premium components", included: false },
      { name: "AI generator access", included: false },
      { name: "Priority support", included: false },
      { name: "Commercial license", included: false },
    ],
    cta: "Get Started",
    variant: "outline",
    popular: false,
  },
  {
    name: "Pro",
    description: "For professional developers",
    price: 29,
    period: "month",
    icon: Crown,
    features: [
      { name: "All free features", included: true },
      { name: "Premium components", included: true },
      { name: "All templates", included: true },
      { name: "AI generator access", included: true },
      { name: "Priority support", included: true },
      { name: "Commercial license", included: true },
      { name: "Early access to new components", included: true },
      { name: "Custom component requests", included: false },
    ],
    cta: "Start Free Trial",
    variant: "primary",
    popular: true,
  },
  {
    name: "Lifetime",
    description: "One-time payment, lifetime access",
    price: 199,
    period: "one-time",
    icon: Sparkles,
    features: [
      { name: "All Pro features", included: true },
      { name: "Lifetime updates", included: true },
      { name: "All future components", included: true },
      { name: "All future templates", included: true },
      { name: "Extended commercial license", included: true },
      { name: "Dedicated support", included: true },
      { name: "Custom component requests", included: true },
      { name: "Team sharing (up to 5)", included: true },
    ],
    cta: "Get Lifetime Access",
    variant: "secondary",
    popular: false,
  },
]

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. For team licenses, we can also invoice via purchase order.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.",
  },
  {
    question: "What's included in the commercial license?",
    answer: "The commercial license allows you to use our components in unlimited personal and commercial projects. You can use them in client work, SaaS products, and any other commercial application.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact us within 14 days of your purchase for a full refund.",
  },
  {
    question: "Can I share my account with others?",
    answer: "Individual accounts are for single users only. For team usage, we offer team licenses that include shared access for up to 10 members with admin management features.",
  },
  {
    question: "How do I access the AI generator?",
    answer: "Pro and Lifetime members get access to our AI component generator. Simply log in to your account and navigate to the AI Generator page to start creating custom components.",
  },
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include access to our community.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Yearly
              <Badge variant="success" size="sm" className="ml-2">Save 20%</Badge>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
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

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl ${
                  plan.popular
                    ? "bg-indigo-100 dark:bg-indigo-900/30"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}>
                  <plan.icon className={`w-6 h-6 ${
                    plan.popular ? "text-indigo-600 dark:text-indigo-400" : "text-gray-600 dark:text-gray-400"
                  }`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">
                  ${billingCycle === "yearly" && plan.price > 0 
                    ? Math.round(plan.price * 0.8 * (plan.period === "month" ? 12 : 1))
                    : plan.price}
                </span>
                {plan.price > 0 && (
                  <span className="text-gray-500 dark:text-gray-400">
                    /{billingCycle === "yearly" && plan.period === "month" ? "year" : plan.period}
                  </span>
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

              <Link href={plan.name === "Free" ? "/register" : "/register?plan=" + plan.name.toLowerCase()}>
                <Button variant={plan.variant as any} className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Compare features
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">Free</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">Lifetime</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Free components", free: true, pro: true, lifetime: true },
                  { feature: "Premium components", free: false, pro: true, lifetime: true },
                  { feature: "All templates", free: false, pro: true, lifetime: true },
                  { feature: "AI generator", free: false, pro: true, lifetime: true },
                  { feature: "Commercial license", free: false, pro: true, lifetime: true },
                  { feature: "Priority support", free: false, pro: true, lifetime: true },
                  { feature: "Future updates", free: false, pro: true, lifetime: true },
                  { feature: "Custom requests", free: false, pro: false, lifetime: true },
                  { feature: "Team sharing", free: false, pro: false, lifetime: true },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{row.feature}</td>
                    <td className="text-center py-4 px-6">
                      {row.free ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.pro ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.lifetime ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="px-6 py-5 flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Still have questions?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We're here to help. Contact our support team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Contact Support</Button>
            </Link>
            <a href="mailto:support@componentshub.com" className="text-indigo-500 hover:text-indigo-600 font-medium">
              support@componentshub.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}