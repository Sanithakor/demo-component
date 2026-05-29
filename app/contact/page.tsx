"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MessageSquare, MapPin, Send, Github, Twitter, Linkedin } from "lucide-react"
import { Button, Input, Badge, Card } from "@/components/ui"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "support@componentshub.com", href: "mailto:support@componentshub.com" },
    { icon: MessageSquare, label: "Discord", value: "Join our community", href: "https://discord.gg/componentshub" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ]

  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question, suggestion, or need help? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <Card key={item.label} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                    <item.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-indigo-500 hover:text-indigo-600 mt-1 block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="https://github.com" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="https://twitter.com" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="https://linkedin.com" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">We'll get back to you as soon as possible.</p>
                  <Button onClick={() => setSubmitted(false)} className="mt-6">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    label="Subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your question or feedback..."
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto" size="lg" isLoading={isSubmitting}>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Before you contact us...
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Check our FAQ or documentation for quick answers to common questions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/docs">
              <Button variant="outline">View Documentation</Button>
            </a>
            <a href="/pricing#faq">
              <Button variant="outline">See FAQ</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}