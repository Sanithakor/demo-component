"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, ArrowRight, Check, Zap } from "lucide-react"
import { Button, Input } from "@/components/ui"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setIsLoading(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen flex pt-16 lg:pt-20">
      {/* Left: Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Components<span className="text-gradient">Hub</span>
            </span>
          </Link>

          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Check your email</h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                We sent a password reset link to <span className="font-semibold text-gray-900 dark:text-white">{email}</span>
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Didn't receive it? Check your spam folder or{" "}
                <button onClick={() => setSent(false)} className="text-indigo-500 hover:text-indigo-600 font-medium">
                  try again
                </button>
              </p>
              <Link href="/login" className="mt-8 inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to sign in
              </Link>
            </motion.div>
          ) : (
            <>
              <Link href="/login" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to sign in
              </Link>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Forgot password?</h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                No worries. Enter your email and we'll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <Input
                  label="Email address"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  icon={<Mail className="w-5 h-5" />}
                  required
                />
                <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                  Send reset link
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                Remember your password?{" "}
                <Link href="/login" className="text-indigo-500 hover:text-indigo-600 font-medium">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </motion.div>
      </div>

      {/* Right: Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center p-12">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="max-w-lg text-center text-white">
          <div className="w-64 h-64 mx-auto mb-8 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center">
            <Mail className="w-24 h-24 text-white/80" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Secure account recovery</h2>
          <p className="text-lg opacity-80">
            We'll send a secure link to your email so you can reset your password safely.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
