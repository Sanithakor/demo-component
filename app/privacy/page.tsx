"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Mail, ChevronDown } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, payment information, and any other information you choose to provide.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to provide, maintain, and improve our services, process transactions, send you updates and marketing communications, and respond to your comments and questions.`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, such as payment processors and hosting providers.`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
  },
  {
    title: "Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to collect information about your browsing activities. You can set your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time.`,
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
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
              <Shield className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Privacy Matters
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We are committed to protecting your personal information and your right to privacy. 
                This policy explains how we collect, use, and safeguard your data.
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
                {section.title}
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
            Questions about our privacy policy?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Contact our privacy team for any questions or concerns.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:privacy@componentshub.com" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium">
              <Mail className="w-4 h-4" />
              privacy@componentshub.com
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
          <Link href="/terms">
            <Button variant="outline">Terms of Service</Button>
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