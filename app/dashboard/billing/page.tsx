"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, CreditCard, Download, Sparkles, Clock, ShieldCheck } from "lucide-react"
import { Button, Card, CardHeader, CardTitle, CardContent, Badge, Input } from "@/components/ui"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Community access for rapid prototyping.",
    highlights: ["Basic component library", "Limited downloads", "Community support"],
    tier: "Free",
  },
  {
    name: "Pro",
    price: "$49",
    description: "Powerful toolkit for teams and launch-ready products.",
    highlights: ["Unlimited downloads", "Premium templates", "Priority support"],
    tier: "Popular",
  },
  {
    name: "Lifetime",
    price: "$249",
    description: "One-time purchase for long-term access.",
    highlights: ["All current products", "Future updates", "Commercial license"],
    tier: "Best value",
  },
]

const invoices = [
  { id: "INV-0321", date: "Apr 18, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-0287", date: "Mar 09, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-0243", date: "Feb 12, 2026", amount: "$0.00", status: "Free" },
]

export default function BillingPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Billing & subscription</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">Plans, invoices, and usage</h1>
          </div>
          <Button className="w-full sm:w-auto">Review billing details</Button>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">Keep your team subscription in sync with growth, payment methods, and usage insights designed for modern SaaS teams.</p>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Current Plan</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Pro</h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Billed annually • Renews May 12, 2027</p>
              </div>
              <div className="space-y-2 text-right">
                <Badge className="bg-emerald-500 text-white">Active</Badge>
                <Button className="w-full sm:w-auto">Upgrade</Button>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Team seats", value: "12" },
                { label: "AI credits", value: "420" },
                { label: "Downloads", value: "Unlimited" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Payment method", value: "Visa ending 4242", icon: CreditCard },
              { label: "Next renewal", value: "May 12, 2027", icon: Clock },
              { label: "Support", value: "Priority email", icon: ShieldCheck },
            ].map((item) => (
              <Card key={item.label} className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-indigo-500" />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage your cards and billing address.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-[1.75rem] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Visa</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">**** 4242</p>
                  </div>
                  <div className="text-right text-sm text-slate-600 dark:text-slate-400">Expires 08/28</div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Name on card" placeholder="Olivia Bennett" />
                <Input label="Billing address" placeholder="1234 Market Street" />
              </div>
              <Button className="w-full">Add new card</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <CardHeader>
              <CardTitle>Usage Statistics</CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-400">Track your plan activity at a glance.</p>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                { label: "Downloads used", value: "1,268", progress: 72 },
                { label: "AI credits", value: "420", progress: 58 },
                { label: "Team seats", value: "12 / 20", progress: 60 },
              ].map((item) => (
                <div key={item.label} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.label}</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8">
            <CardHeader>
              <CardTitle>Invoice History</CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-400">Download receipts and review past billing activity.</p>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-600 dark:text-slate-300">
                <thead>
                  <tr>
                    <th className="pb-3 font-semibold text-slate-900 dark:text-white">Invoice</th>
                    <th className="pb-3 font-semibold text-slate-900 dark:text-white">Date</th>
                    <th className="pb-3 font-semibold text-slate-900 dark:text-white">Amount</th>
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-colors">
                      <td className="py-4 font-medium text-slate-900 dark:text-white">{invoice.id}</td>
                      <td className="py-4">{invoice.date}</td>
                      <td className="py-4">{invoice.amount}</td>
                      <td className="py-4 text-right">
                        <Button variant="ghost" size="sm">Download</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
