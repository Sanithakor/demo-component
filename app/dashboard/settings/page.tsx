"use client"

import { motion } from "framer-motion"
import { Bell, ShieldCheck, Eye, Sparkles, Trash2, Mail, CreditCard, CheckCircle, ArrowRight } from "lucide-react"
import { Button, Card, CardHeader, CardTitle, CardContent, Badge, Input } from "@/components/ui"

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-[0.24em]">Account Settings</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">Profile & security configuration</h1>
          </div>
          <Button className="w-full sm:w-auto">Save all changes</Button>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">Fine tune your account experience, manage access, and keep your profile secure with thoughtful controls designed for product teams.</p>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card className="space-y-6">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">Update your public profile and contact details.</p>
          </CardHeader>
          <CardContent className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Profile photo</label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center text-white text-xl font-semibold">OB</div>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">Upload image</Button>
                    <p className="text-sm text-slate-500 dark:text-slate-400">PNG, JPG up to 2MB</p>
                  </div>
                </div>
              </div>
              <Input label="First name" placeholder="Olivia" />
              <Input label="Last name" placeholder="Bennett" />
              <Input label="Username" placeholder="olivia_b" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Bio" placeholder="Designing delightful developer experiences." />
              <Input label="Website" placeholder="https://componentshub.com" />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email Settings</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Primary address</h2>
              </div>
              <Badge className="bg-emerald-500 text-white">Verified</Badge>
            </div>
            <div className="mt-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5">
              <p className="font-medium text-slate-900 dark:text-white">olivia@componentshub.com</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Used for account notifications, billing receipts, and security alerts.</p>
              <Button variant="outline" size="sm" className="mt-4">Change email</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Password & security</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Access controls</h2>
              </div>
              <ShieldCheck className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="mt-6 space-y-5">
              <Input label="Current password" type="password" placeholder="••••••••" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="New password" type="password" placeholder="Enter new password" />
                <Input label="Confirm password" type="password" placeholder="Confirm new password" />
              </div>
              <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                <p className="font-semibold text-slate-900 dark:text-white">Two-factor authentication</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Keep your account safe with an extra step when signing in.</p>
                <div className="mt-4 flex items-center justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Enabled</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Using authenticator app</p>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Appearance</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Theme & layout</h2>
              </div>
              <Sparkles className="w-6 h-6 text-amber-500" />
            </div>
            <div className="mt-6 space-y-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Light", value: "light" },
                  { label: "Dark", value: "dark" },
                  { label: "System", value: "system" },
                ].map((mode) => (
                  <button key={mode.value} className="rounded-3xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-white transition-all text-left">
                    <span>{mode.label}</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{mode.label === "System" ? "Auto detect device preferences" : `Use ${mode.label.toLowerCase()} mode`}</p>
                  </button>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Accent color</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {[
                    "from-indigo-500 to-violet-600",
                    "from-emerald-500 to-teal-500",
                    "from-rose-500 to-orange-500",
                    "from-sky-500 to-cyan-500",
                  ].map((gradient) => (
                    <button key={gradient} className={`h-12 w-12 rounded-3xl bg-gradient-to-br ${gradient} shadow-lg shadow-slate-900/10`} />
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Compact mode</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Reduce vertical spacing for dense workflows.</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-sm text-white">On</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Danger Zone</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Delete account</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">Once deleted, your account and all associated data will be permanently removed. This action cannot be undone.</p>
          </div>
          <Button variant="destructive" className="w-full max-w-xs">Delete account</Button>
        </div>
      </Card>
    </div>
  )
}
