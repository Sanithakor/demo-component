"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, ArrowRight, Zap, Heart, Users, Globe } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"

const openings = [
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain our component library with React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design beautiful, accessible UI components and templates for our marketplace.",
  },
  {
    title: "Developer Advocate",
    team: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Create tutorials, blog posts, and demos that help developers build faster.",
  },
  {
    title: "Full Stack Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Contract",
    description: "Help us build the backend systems powering our marketplace platform.",
  },
]

const perks = [
  { icon: Globe, title: "100% Remote", desc: "Work from anywhere in the world." },
  { icon: Clock, title: "Flexible Hours", desc: "Async-first culture — work when you're most productive." },
  { icon: Heart, title: "Great Benefits", desc: "Health, dental, vision, and generous PTO." },
  { icon: Users, title: "Small Team", desc: "High impact, low bureaucracy environment." },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Careers</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Join the team
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're building the best component marketplace for developers. Come help us shape the future of web development.
          </p>
        </motion.div>

        {/* Perks */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {perks.map((perk, i) => (
            <Card key={perk.title} className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center">
                <perk.icon className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{perk.title}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{perk.desc}</p>
            </Card>
          ))}
        </motion.div>

        {/* Open Roles */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Open positions</h2>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div key={job.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.05 }}>
                <Card className="p-6 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Badge variant="secondary" size="sm">{job.team}</Badge>
                        <Badge variant="outline" size="sm">{job.type}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{job.description}</p>
                      <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button variant="outline" className="shrink-0 group-hover:bg-indigo-50 group-hover:border-indigo-300 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/20 transition-all">
                        Apply now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No fit? */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-center text-white">
          <div className="w-14 h-14 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
            <Zap className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Don't see the right role?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            We're always looking for talented people. Send us your resume and tell us how you'd contribute.
          </p>
          <Link href="/contact" className="inline-block mt-8">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Get in touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
