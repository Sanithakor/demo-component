"use client"

import { motion } from "framer-motion"
import { ArrowRight, Heart, Sparkles, Users, Globe, Zap, ShieldCheck, Loader2 } from "lucide-react"
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@/components/ui"

const stats = [
  { label: "Components", value: "320+" },
  { label: "Developers", value: "45k+" },
  { label: "Downloads", value: "1.2M+" },
  { label: "Templates", value: "98" },
]

const values = [
  { icon: Heart, label: "Quality", description: "Production-ready components built with pixel-perfect craftsmanship." },
  { icon: Zap, label: "Speed", description: "Ship faster with copy-ready sections, templates, and dashboards." },
  { icon: ShieldCheck, label: "Developer Experience", description: "Accessible code, clean documentation, and intuitive design." },
  { icon: Globe, label: "Innovation", description: "Modern UI patterns for the next generation of SaaS products." },
]

const team = [
  { name: "Olivia Bennett", role: "Founder & CEO" },
  { name: "Marcus Lee", role: "Head of Design" },
  { name: "Sofia Patel", role: "Engineering Lead" },
]

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 px-6 py-16 text-white sm:px-10 sm:py-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="max-w-2xl space-y-6">
              <Badge className="bg-white/10 text-white">About ComponentsHub</Badge>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Premium components for modern SaaS teams and developer-first products.</h1>
              <p className="max-w-xl text-lg text-slate-200">Our platform brings together polished UI, reusable Tailwind sections, and professional templates that help teams build delightful web experiences faster.</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="gap-2 bg-white text-slate-950">Get started</Button>
                <Button variant="outline" className="gap-2 text-white border-white/20">View pricing</Button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20">
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Mission</p>
                  <p className="mt-3 text-xl font-semibold">Build the most polished, usable UI library for startups and enterprise teams.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Our story</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">A journey from idea to premium developer product.</h2>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">We started as a small group of designers and engineers obsessed with bringing craftsmanship, product thinking, and developer flexibility together in one beautiful component marketplace.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {[
            { step: "2024", title: "Launch", text: "Built the first library of production-ready SaaS sections." },
            { step: "2025", title: "Growth", text: "Expanded to templates, dashboards, and AI-ready UI components." },
            { step: "2026", title: "Scale", text: "Serving thousands of developers worldwide with premium design systems." },
          ].map((item) => (
            <div key={item.step} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <div className="h-10 w-10 rounded-3xl bg-slate-100 dark:bg-slate-900 grid place-items-center text-slate-900 dark:text-white font-semibold">{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="container-custom space-y-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Core metrics</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Built for teams that ship fast.</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label} className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
            </Card>
          ))}
        </motion.div>
      </section>

      <section className="container-custom space-y-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 lg:grid-cols-2">
          {values.map((item) => (
            <Card key={item.label} className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
              <div className="flex items-center gap-4 text-indigo-500">
                <item.icon className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.label}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </section>

      <section className="container-custom space-y-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Our team</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">People behind the product</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-2xl font-semibold shadow-lg shadow-indigo-500/20">{member.name.split(" ").map((word) => word[0]).join("")}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{member.role}</p>
              <div className="mt-6 flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400">
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Twitter</a>
                <span>•</span>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
              </div>
            </Card>
          ))}
        </motion.div>
      </section>

      <section className="container-custom grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Why choose ComponentsHub?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">We combine production-ready design, developer-first code, and premium UX to help modern teams move from concept to launch faster.</p>
          <div className="mt-8 grid gap-4">
            {[
              "Production-ready interfaces with Tailwind CSS.",
              "Designed for developers, product teams, and agencies.",
              "Responsive, accessible, and beautifully animated.",
              "Built with modern SaaS best practices in mind.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5">
                <p className="text-sm text-slate-600 dark:text-slate-400">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <div className="flex items-center gap-4 text-indigo-500">
              <Sparkles className="w-6 h-6" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Community</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">Loved by developers everywhere.</p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {[
                "\"The UI feels polished and customizable out of the box.\"",
                "\"Perfect for shipping SaaS experiences fast.\"",
                "\"Beautiful templates with clean code.\"",
              ].map((quote) => (
                <div key={quote} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5 text-sm text-slate-600 dark:text-slate-300">{quote}</div>
              ))}
            </div>
          </Card>
          <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Final CTA</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Join a growing community of product teams building faster with premium components.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button className="gap-2">Get started <ArrowRight className="w-4 h-4" /></Button>
              <Button variant="outline" className="gap-2">Explore pricing</Button>
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="container-custom py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">ComponentsHub</p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Premium Tailwind CSS components and templates designed for the modern web.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>Components</li>
              <li>Templates</li>
              <li>Pricing</li>
              <li>Docs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>Blog</li>
              <li>Guides</li>
              <li>Community</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>About</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
