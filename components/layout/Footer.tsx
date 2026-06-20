"use client"

import { useState } from "react"
import Link from "next/link"
import { Zap, Github, Twitter, Linkedin, Youtube, Mail, ArrowRight, Check } from "lucide-react"

const footerLinks = {
  product: [
    { href: "/components",   label: "Components"      },
    { href: "/templates",    label: "Templates"       },
    { href: "/pricing",      label: "Pricing"         },
    { href: "/docs",         label: "Documentation"   },
    { href: "/changelog",    label: "Changelog"       },
    { href: "/ai-generator", label: "AI Generator"    },
  ],
  resources: [
    { href: "/blog",               label: "Blog"            },
    { href: "/docs/installation",  label: "Getting Started" },
    { href: "/docs/components",    label: "Component Guide" },
    { href: "/docs/templates",     label: "Template Guide"  },
    { href: "/community",          label: "Community"       },
  ],
  company: [
    { href: "/about",    label: "About"    },
    { href: "/careers",  label: "Careers"  },
    { href: "/contact",  label: "Contact"  },
  ],
  legal: [
    { href: "/privacy",  label: "Privacy Policy"   },
    { href: "/terms",    label: "Terms of Service" },
    { href: "/license",  label: "License"          },
    { href: "/cookies",  label: "Cookie Policy"    },
  ],
}

const socialLinks = [
  { href: "https://github.com",   icon: Github,   label: "GitHub"   },
  { href: "https://twitter.com",  icon: Twitter,  label: "Twitter"  },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com",  icon: Youtube,  label: "YouTube"  },
]

const Footer = () => {
  const [email, setEmail]       = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading]   = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubscribed(true)
    setEmail("")
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Newsletter strip */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Stay updated with new components
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Get the latest components, templates, and tips delivered to your inbox. No spam, unsubscribe anytime.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-3 px-6 py-3.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm font-medium text-green-700 dark:text-green-400">
                  You're subscribed! Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto gap-2">
                <div className="relative flex-1 lg:w-72">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-gray-900 dark:text-white placeholder-gray-400 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-xl hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/40 dark:border-gray-900/40 border-t-white dark:border-t-gray-900 rounded-full animate-spin" />
                  ) : (
                    <>Subscribe <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Zap className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Components
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Hub
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Premium Tailwind CSS components and templates for modern web apps.
            </p>
            <div className="flex gap-2 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(["product", "resources", "company", "legal"] as const).map((col) => (
            <div key={col}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks[col].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} ComponentsHub. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600">
            Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
