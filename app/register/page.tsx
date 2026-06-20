"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Mail, Lock, User, Eye, EyeOff, Github, Twitter, ArrowRight, Zap, Check } from "lucide-react"
import { Button, Input } from "@/components/ui"

const perks = [
  "Access 500+ free components instantly",
  "Save favorites and build collections",
  "Copy production-ready code",
  "Get early access to new releases",
]

function RegisterForm() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan")
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex pt-16 lg:pt-20">
      {/* Left: Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 items-center justify-center p-12 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="relative z-10 max-w-md text-white">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">ComponentsHub</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Start building beautiful products today
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Join thousands of developers who ship faster with our premium component library.
          </p>
          <div className="space-y-4">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-white/90">{perk}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-gray-950">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-md">
          {/* Logo (mobile only) */}
          <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Components<span className="text-gradient">Hub</span>
            </span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create your account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {plan ? (
              <span>You selected the <strong className="text-indigo-600 dark:text-indigo-400 capitalize">{plan}</strong> plan. Sign up to continue.</span>
            ) : "Free forever. No credit card required."}
          </p>

          {/* Social */}
          <div className="mt-8 space-y-3">
            <Button variant="outline" className="w-full" size="lg">
              <Github className="w-5 h-5 mr-2" /> Continue with GitHub
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <Twitter className="w-5 h-5 mr-2" /> Continue with Twitter
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-950 text-gray-500">Or sign up with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              icon={<User className="w-5 h-5" />}
              required
            />
            <Input
              label="Email address"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              icon={<Mail className="w-5 h-5" />}
              required
            />
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                icon={<Lock className="w-5 h-5" />}
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Password strength */}
            {form.password && (
              <div className="space-y-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${
                      form.password.length >= i * 3
                        ? i <= 1 ? "bg-red-400" : i <= 2 ? "bg-yellow-400" : i <= 3 ? "bg-blue-400" : "bg-green-400"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`} />
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {form.password.length < 4 ? "Too short" : form.password.length < 8 ? "Weak" : form.password.length < 12 ? "Good" : "Strong"}
                </p>
              </div>
            )}

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the{" "}
                <Link href="/terms" className="text-indigo-500 hover:text-indigo-600">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-indigo-500 hover:text-indigo-600">Privacy Policy</Link>
              </span>
            </label>

            <Button type="submit" className="w-full" size="lg" isLoading={isLoading} disabled={!agreed}>
              Create account
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-500 hover:text-indigo-600 font-medium">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>}>
      <RegisterForm />
    </Suspense>
  )
}
