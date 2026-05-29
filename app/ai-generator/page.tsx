"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Send,
  Copy,
  Check,
  RefreshCw,
  Code,
  Eye,
  Download,
  History,
  Lightbulb,
  Zap,
} from "lucide-react"
import { Button, Badge, Card } from "@/components/ui"

const suggestions = [
  "Create a modern pricing card with monthly/yearly toggle",
  "Build a responsive navigation bar with dropdown menus",
  "Design a beautiful hero section with gradient background",
  "Make a testimonial carousel with avatar images",
  "Create a bento grid layout for feature showcase",
]

const recentGenerations = [
  { id: 1, prompt: "Pricing card with toggle", date: "2 hours ago", status: "completed" },
  { id: 2, prompt: "Hero section with gradient", date: "5 hours ago", status: "completed" },
  { id: 3, prompt: "Dashboard sidebar", date: "1 day ago", status: "completed" },
]

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setGeneratedCode(`<div class="p-6 bg-white rounded-xl shadow-lg">
  <h2 class="text-xl font-bold text-gray-900">Generated Component</h2>
  <p class="mt-2 text-gray-600">This is your AI-generated component based on: "${prompt}"</p>
  <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
    Click me
  </button>
</div>`)
    setIsGenerating(false)
  }

  const handleCopy = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            AI Component Generator
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Describe the component you need and let AI build it for you in seconds
          </p>
        </motion.div>

        {/* Generator Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-6">
            {/* Input Area */}
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the component you want to build... (e.g., 'Create a modern pricing card with monthly/yearly toggle')"
                className="w-full h-32 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400"
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowHistory(!showHistory)}
                >
                  <History className="w-5 h-5" />
                </Button>
                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  isLoading={isGenerating}
                >
                  {isGenerating ? "Generating..." : "Generate"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Suggestions */}
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Try these:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setPrompt(suggestion)}
                    className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Generated Result */}
        {generatedCode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              {/* Tabs */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === "preview"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Eye className="w-4 h-4 inline mr-2" />
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === "code"
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Code className="w-4 h-4 inline mr-2" />
                    Code
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleCopy}>
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
                {activeTab === "preview" ? (
                  <div className="flex items-center justify-center min-h-[300px]">
                    <div className="p-6 bg-white rounded-xl shadow-lg max-w-md w-full">
                      <h2 className="text-xl font-bold text-gray-900">Generated Component</h2>
                      <p className="mt-2 text-gray-600">
                        This is your AI-generated component based on your description.
                      </p>
                      <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
                        Click me
                      </button>
                    </div>
                  </div>
                ) : (
                  <pre className="overflow-x-auto">
                    <code className="text-sm text-gray-900 dark:text-gray-100">{generatedCode}</code>
                  </pre>
                )}
              </div>
            </Card>
          </motion.div>
        )}

        {/* History Panel */}
        {showHistory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Generations</h3>
              <div className="space-y-3">
                {recentGenerations.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                        <Zap className="w-4 h-4 text-indigo-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{item.prompt}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                      </div>
                    </div>
                    <Badge variant="success" size="sm">{item.status}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Describe", desc: "Tell AI what you need in plain English" },
              { icon: Sparkles, title: "Generate", desc: "AI builds your component in seconds" },
              { icon: Code, title: "Customize", desc: "Copy, paste, and make it yours" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}