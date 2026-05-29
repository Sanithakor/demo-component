"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Twitter, Linkedin, Copy, Check, ChevronRight, BookOpen } from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"
import Link from "next/link"
import { useState } from "react"

const posts: Record<string, {
  id: number; title: string; excerpt: string; content: string[];
  category: string; author: string; authorRole: string; date: string;
  readTime: string; image: string; tags: string[];
}> = {
  "1": {
    id: 1, title: "Building Modern UI with Tailwind CSS", excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.", category: "Tutorial", author: "Sarah Chen", authorRole: "Frontend Lead", date: "May 15, 2024", readTime: "8 min read", image: "from-blue-500 to-cyan-500",
    tags: ["Tailwind CSS", "UI Design", "Frontend"],
    content: [
      "Tailwind CSS has revolutionized the way developers approach styling in modern web applications. Instead of writing custom CSS, you compose utility classes directly in your HTML, resulting in faster development and more consistent designs.",
      "One of the biggest advantages of Tailwind is its design system. Every spacing value, color, and typography scale is carefully chosen to work harmoniously together. This means you can build beautiful interfaces without needing a design background.",
      "Getting started with Tailwind is straightforward. Install it via npm, configure your content paths, and you're ready to go. The JIT (Just-In-Time) compiler ensures your final bundle only includes the classes you actually use.",
      "When building components, think in terms of utility classes. A button might use classes like `px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors`. This approach makes it easy to understand the styling at a glance.",
      "Responsive design in Tailwind uses intuitive breakpoint prefixes: `sm:`, `md:`, `lg:`, `xl:`. You can build mobile-first layouts by writing base styles and then adding responsive overrides as needed.",
      "Dark mode support is built-in with the `dark:` variant. Simply add `darkMode: 'class'` to your config and toggle a class on your root element to switch between light and dark themes.",
      "For complex components, consider extracting repeated utility patterns into component classes using `@apply`. This keeps your HTML clean while maintaining the benefits of utility-first CSS.",
      "The Tailwind ecosystem is rich with plugins and tools. Tailwind UI provides premium components, while the community has built countless open-source component libraries. ComponentsHub is one such platform offering production-ready components.",
    ],
  },
  "2": {
    id: 2, title: "10 Essential React Components for 2024", excerpt: "A curated list of must-have React components for modern web applications.", category: "React", author: "Alex Rivera", authorRole: "Senior Developer", date: "May 10, 2024", readTime: "12 min read", image: "from-purple-500 to-pink-500",
    tags: ["React", "Components", "Best Practices"],
    content: [
      "React's component ecosystem has matured significantly. In 2024, certain patterns and components have become essential for building production-grade applications. Here's our curated list of must-have components.",
      "1. Command Palette — A keyboard-driven search interface that lets users navigate your app quickly. Libraries like cmdk make this easy to implement with full accessibility support.",
      "2. Toast Notifications — Non-intrusive feedback messages that appear and disappear automatically. Sonner and react-hot-toast are excellent choices with beautiful default styles.",
      "3. Data Tables — Complex tables with sorting, filtering, and pagination. TanStack Table provides a headless solution that works with any UI library.",
      "4. Modal/Dialog — Accessible overlay components for confirmations, forms, and detailed views. Radix UI's Dialog primitive handles focus management and keyboard navigation automatically.",
      "5. Combobox/Autocomplete — Searchable select inputs that improve UX for large option sets. Downshift and Radix UI's Combobox are battle-tested solutions.",
      "6. Date Picker — Calendar-based date selection with range support. React Day Picker is lightweight and highly customizable.",
      "7. Rich Text Editor — WYSIWYG editing for user-generated content. Tiptap built on ProseMirror offers a modern, extensible solution.",
      "8. Infinite Scroll — Load more content as users scroll. TanStack Query combined with Intersection Observer makes this pattern clean and efficient.",
      "9. Drag and Drop — Reorderable lists and kanban boards. dnd-kit is the modern choice with excellent accessibility and performance.",
      "10. Charts and Visualizations — Data visualization components. Recharts and Tremor provide beautiful, responsive charts built on D3.",
    ],
  },
  "3": {
    id: 3, title: "How We Built the AI Component Generator", excerpt: "An inside look at the technology and design decisions behind our AI-powered component generator.", category: "Engineering", author: "Emma Watson", authorRole: "CTO", date: "May 5, 2024", readTime: "15 min read", image: "from-indigo-500 to-purple-500",
    tags: ["AI", "Engineering", "Product"],
    content: [
      "Building an AI-powered component generator was one of the most challenging and rewarding projects we've undertaken at ComponentsHub. Here's an inside look at how we built it.",
      "The core idea was simple: let developers describe what they want in plain English and have AI generate production-ready Tailwind CSS components. The execution, however, required careful thought about prompting, output validation, and user experience.",
      "We started with OpenAI's GPT-4 as our foundation model. The key insight was that raw LLM output needed significant post-processing to be truly useful. We built a pipeline that validates HTML structure, ensures Tailwind classes are valid, and formats the output consistently.",
      "Prompt engineering was crucial. We developed a system prompt that instructs the model to generate accessible, responsive, and semantically correct HTML. We include examples of good and bad outputs to guide the model's behavior.",
      "One challenge was handling ambiguous requests. 'Make a button' could mean many things. We implemented a clarification system that asks follow-up questions when the request is too vague, improving output quality significantly.",
      "The preview system uses a sandboxed iframe with Tailwind CDN loaded. This lets users see their generated component instantly without any build step. We cache generated components to reduce API costs and improve response times.",
      "We also built a feedback loop where users can rate generated components. This data helps us fine-tune our prompts and identify common failure modes. Over time, the generator has become significantly more accurate.",
      "Looking ahead, we're exploring fine-tuning a smaller model on our component library to reduce latency and costs. We're also working on multi-turn conversations that let users iteratively refine their components.",
    ],
  },
}

const relatedPosts = [
  { id: 2, title: "10 Essential React Components for 2024", category: "React", image: "from-purple-500 to-pink-500" },
  { id: 3, title: "How We Built the AI Component Generator", category: "Engineering", image: "from-indigo-500 to-purple-500" },
  { id: 4, title: "Best Practices for Component Library Design", category: "Design", image: "from-orange-500 to-red-500" },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts[params.id] ?? posts["1"]
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom py-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article */}
          <article className="lg:col-span-2">
            {/* Hero */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">{post.excerpt}</p>

              {/* Author row */}
              <div className="flex items-center gap-4 mt-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {post.author.split(" ").map(w => w[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.authorRole}</p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
              </div>
            </motion.div>

            {/* Cover image */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className={`mt-8 h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${post.image} flex items-center justify-center`}>
              <BookOpen className="w-16 h-16 text-white/60" />
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="mt-10 prose prose-gray dark:prose-invert max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </motion.div>

            {/* Share */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="mt-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <p className="font-semibold text-gray-900 dark:text-white mb-4">Share this article</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Twitter className="w-4 h-4" /> Twitter
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="gap-2" onClick={handleCopy}>
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy link"}
                </Button>
              </div>
            </motion.div>

            {/* Author bio */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-8 p-6 border border-gray-200 dark:border-gray-800 rounded-2xl flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                {post.author.split(" ").map(w => w[0]).join("")}
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{post.author}</p>
                <p className="text-sm text-indigo-500 mb-2">{post.authorRole}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Passionate about building great developer experiences and sharing knowledge with the community.
                </p>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Table of contents */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Table of contents</h3>
                <nav className="space-y-2">
                  {post.content.slice(0, 5).map((_, i) => (
                    <a key={i} href={`#section-${i}`}
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors py-1 border-l-2 border-transparent hover:border-indigo-500 pl-3">
                      Section {i + 1}
                    </a>
                  ))}
                </nav>
              </Card>
            </motion.div>

            {/* Related posts */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Related articles</h3>
                <div className="space-y-4">
                  {relatedPosts.filter(r => r.id !== post.id).slice(0, 3).map(rel => (
                    <Link key={rel.id} href={`/blog/${rel.id}`}>
                      <div className="group flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl p-2 -mx-2 transition-colors">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${rel.image} flex-shrink-0`} />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors line-clamp-2">{rel.title}</p>
                          <Badge variant="secondary" size="sm" className="mt-1">{rel.category}</Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Newsletter */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 border-0">
                <h3 className="font-semibold text-white mb-2">Stay updated</h3>
                <p className="text-sm text-white/80 mb-4">Get the latest articles delivered to your inbox.</p>
                <input type="email" placeholder="your@email.com"
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 mb-3" />
                <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100">Subscribe</Button>
              </Card>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  )
}
