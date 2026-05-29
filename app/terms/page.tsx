"use client"

import { motion } from "framer-motion"
import { FileText, Scale, Mail } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using ComponentsHub's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.`,
  },
  {
    title: "Use of Services",
    content: `ComponentsHub grants you a limited, non-exclusive, non-transferable license to use our components, templates, and services for personal or commercial projects. You may not redistribute, resell, or sublicense our products without explicit permission.`,
  },
  {
    title: "User Accounts",
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`,
  },
  {
    title: "Payments and Billing",
    content: `All purchases are subject to our pricing terms displayed at the time of purchase. We reserve the right to change our prices at any time. Subscription plans will be charged according to your selected billing cycle.`,
  },
  {
    title: "Intellectual Property",
    content: `All components, templates, and content provided by ComponentsHub are protected by intellectual property laws. You agree not to copy, modify, or distribute our products in violation of these laws.`,
  },
  {
    title: "Disclaimers",
    content: `ComponentsHub provides its services "as is" and "as available." We do not warrant that the services will be uninterrupted, timely, secure, or error-free.`,
  },
  {
    title: "Limitation of Liability",
    content: `In no event shall ComponentsHub be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.`,
  },
  {
    title: "Termination",
    content: `We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">Legal</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Last updated: May 28, 2024
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
              <Scale className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Legal Agreement
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                These terms govern your use of ComponentsHub's services, components, and templates. 
                Please read them carefully before using our platform.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {sections.map((section, index) => (
            <Card key={section.title} className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {index + 1}. {section.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {section.content}
              </p>
            </Card>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Questions about these terms?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Contact our legal team for any questions or concerns.
          </p>
          <div className="mt-6">
            <a href="mailto:legal@componentshub.com" className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium">
              <Mail className="w-4 h-4" />
              legal@componentshub.com
            </a>
          </div>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/privacy">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
          <Link href="/license">
            <Button variant="outline">License</Button>
          </Link>
          <Link href="/cookies">
            <Button variant="outline">Cookie Policy</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}