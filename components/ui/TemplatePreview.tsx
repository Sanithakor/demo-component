"use client"

/**
 * TemplatePreview
 * Rich dummy preview for each template category.
 */

interface TemplatePreviewProps {
  category: string
  id?: string
  className?: string
}

export default function TemplatePreview({ category, id = "", className = "" }: TemplatePreviewProps) {
  const cat = category.toLowerCase()

  /* ── SaaS ── */
  if (cat === "saas") return (
    <div className={`w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col gap-0 overflow-hidden ${className}`}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-indigo-500" />
          <div className="h-2 w-14 rounded-full bg-white/70" />
        </div>
        <div className="flex gap-3">
          {[1,2,3].map(i => <div key={i} className="h-1.5 w-8 rounded-full bg-white/30" />)}
        </div>
        <div className="h-6 w-14 rounded-lg bg-indigo-500" />
      </div>
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 py-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center space-y-2">
          <div className="h-1.5 w-12 rounded-full bg-indigo-400/60 mx-auto" />
          <div className="h-3 w-36 rounded-full bg-white/80 mx-auto" />
          <div className="h-2 w-28 rounded-full bg-white/50 mx-auto" />
          <div className="h-1.5 w-24 rounded-full bg-white/30 mx-auto" />
          <div className="flex gap-2 justify-center mt-3">
            <div className="h-7 w-20 rounded-lg bg-indigo-500" />
            <div className="h-7 w-20 rounded-lg border border-white/30" />
          </div>
        </div>
      </div>
      {/* Feature strip */}
      <div className="grid grid-cols-3 gap-2 px-4 pb-4">
        {["from-indigo-500/30 to-purple-500/30","from-blue-500/30 to-cyan-500/30","from-violet-500/30 to-pink-500/30"].map((g,i) => (
          <div key={i} className={`rounded-xl bg-gradient-to-br ${g} border border-white/10 p-2`}>
            <div className="w-4 h-4 rounded-md bg-white/20 mb-1.5" />
            <div className="h-1.5 w-full rounded-full bg-white/40" />
            <div className="h-1 w-3/4 rounded-full bg-white/20 mt-1" />
          </div>
        ))}
      </div>
    </div>
  )

  /* ── AI ── */
  if (cat === "ai") return (
    <div className={`w-full h-full bg-gradient-to-br from-slate-950 to-violet-950 flex flex-col overflow-hidden ${className}`}>
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="w-5 h-5 rounded-md bg-violet-500" />
        <div className="h-2 w-16 rounded-full bg-white/60" />
        <div className="ml-auto flex gap-1.5">
          {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-lg bg-white/10" />)}
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-12 border-r border-white/10 flex flex-col items-center gap-3 py-4">
          {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-xl bg-white/10" />)}
        </div>
        {/* Chat */}
        <div className="flex-1 flex flex-col gap-2 p-3">
          <div className="flex gap-2 items-end">
            <div className="w-5 h-5 rounded-full bg-violet-500 shrink-0" />
            <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[75%]">
              <div className="space-y-1">
                <div className="h-1.5 w-20 rounded-full bg-white/50" />
                <div className="h-1.5 w-14 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-end justify-end">
            <div className="bg-violet-600 rounded-2xl rounded-br-sm px-3 py-2 max-w-[75%]">
              <div className="space-y-1">
                <div className="h-1.5 w-16 rounded-full bg-white/70" />
                <div className="h-1.5 w-10 rounded-full bg-white/50" />
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-pink-500 shrink-0" />
          </div>
          <div className="flex gap-2 items-end">
            <div className="w-5 h-5 rounded-full bg-violet-500 shrink-0" />
            <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2">
              <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40" />)}
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="mt-auto flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 border border-white/10">
            <div className="flex-1 h-1.5 rounded-full bg-white/20" />
            <div className="w-5 h-5 rounded-lg bg-violet-500 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  )

  /* ── Agency ── */
  if (cat === "agency") return (
    <div className={`w-full h-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden ${className}`}>
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-slate-800">
        <div className="h-2 w-16 rounded-full bg-gray-800 dark:bg-white" />
        <div className="flex gap-2">
          {[1,2,3].map(i => <div key={i} className="h-1.5 w-8 rounded-full bg-gray-300 dark:bg-slate-600" />)}
        </div>
      </div>
      {/* Hero */}
      <div className="flex-1 grid grid-cols-2 gap-3 p-4">
        <div className="flex flex-col justify-center gap-2">
          <div className="h-1.5 w-10 rounded-full bg-orange-400" />
          <div className="h-3 w-28 rounded-full bg-gray-800 dark:bg-white" />
          <div className="h-2 w-24 rounded-full bg-gray-400 dark:bg-slate-500" />
          <div className="h-2 w-20 rounded-full bg-gray-300 dark:bg-slate-600" />
          <div className="h-7 w-20 rounded-lg bg-orange-500 mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {["from-orange-400 to-red-500","from-pink-400 to-rose-500","from-amber-400 to-orange-500","from-red-400 to-pink-500"].map((g,i) => (
            <div key={i} className={`rounded-xl bg-gradient-to-br ${g} aspect-square`} />
          ))}
        </div>
      </div>
      {/* Work strip */}
      <div className="flex gap-2 px-4 pb-4 overflow-hidden">
        {["bg-gray-100 dark:bg-slate-800","bg-orange-50 dark:bg-orange-900/20","bg-gray-100 dark:bg-slate-800"].map((bg,i) => (
          <div key={i} className={`flex-1 h-12 rounded-xl ${bg} border border-gray-200 dark:border-slate-700`} />
        ))}
      </div>
    </div>
  )

  /* ── Finance ── */
  if (cat === "finance") return (
    <div className={`w-full h-full bg-slate-50 dark:bg-slate-900 flex flex-col gap-2 p-3 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-2 w-20 rounded-full bg-slate-800 dark:bg-white" />
        <div className="h-6 w-16 rounded-lg bg-emerald-500" />
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { g: "from-emerald-500 to-teal-500", v: "+12.4%" },
          { g: "from-blue-500 to-indigo-500",  v: "$48.2k" },
          { g: "from-violet-500 to-purple-500",v: "94.1%"  },
        ].map((s,i) => (
          <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-2 border border-slate-200 dark:border-slate-700">
            <div className={`h-1.5 w-8 rounded-full bg-gradient-to-r ${s.g} mb-1`} />
            <div className="h-2.5 w-10 rounded-full bg-slate-800 dark:bg-white" />
            <div className="text-[8px] font-bold text-emerald-500 mt-0.5">{s.v}</div>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-2">
        <div className="h-1.5 w-16 rounded-full bg-slate-300 dark:bg-slate-600 mb-2" />
        <div className="flex items-end gap-0.5 h-16">
          {[30,50,40,70,55,80,65,90,75,85,60,95].map((h,i) => (
            <div key={i} className={`flex-1 rounded-t-sm ${i===11?"bg-emerald-500":"bg-emerald-200 dark:bg-emerald-900"}`} style={{height:`${h}%`}} />
          ))}
        </div>
      </div>
      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-2">
        {[1,2].map(i => (
          <div key={i} className="flex items-center gap-2 py-1 border-b border-slate-100 dark:border-slate-700 last:border-0">
            <div className="w-4 h-4 rounded-md bg-slate-100 dark:bg-slate-700" />
            <div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-600" />
            <div className="h-1.5 w-8 rounded-full bg-emerald-400" />
          </div>
        ))}
      </div>
    </div>
  )

  /* ── Portfolio ── */
  if (cat === "portfolio") return (
    <div className={`w-full h-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden ${className}`}>
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-slate-800">
        <div className="h-2 w-12 rounded-full bg-gray-800 dark:bg-white" />
        <div className="flex gap-2">
          {[1,2,3,4].map(i => <div key={i} className="h-1.5 w-7 rounded-full bg-gray-300 dark:bg-slate-600" />)}
        </div>
      </div>
      {/* Hero */}
      <div className="flex items-center gap-4 p-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shrink-0" />
        <div className="space-y-1.5">
          <div className="h-2.5 w-24 rounded-full bg-gray-800 dark:bg-white" />
          <div className="h-1.5 w-20 rounded-full bg-gray-400 dark:bg-slate-500" />
          <div className="h-1.5 w-16 rounded-full bg-gray-300 dark:bg-slate-600" />
        </div>
      </div>
      {/* Projects grid */}
      <div className="grid grid-cols-2 gap-2 px-4 pb-4 flex-1">
        {["from-cyan-400 to-blue-500","from-violet-400 to-purple-500","from-emerald-400 to-teal-500","from-orange-400 to-amber-500"].map((g,i) => (
          <div key={i} className={`rounded-xl bg-gradient-to-br ${g} flex items-end p-2`}>
            <div className="h-1.5 w-12 rounded-full bg-white/70" />
          </div>
        ))}
      </div>
    </div>
  )

  /* ── Dashboard ── */
  if (cat === "dashboard") return (
    <div className={`w-full h-full bg-slate-50 dark:bg-slate-900 flex gap-2 p-3 overflow-hidden ${className}`}>
      <div className="w-10 bg-slate-800 dark:bg-slate-950 rounded-lg flex flex-col items-center gap-2 py-3">
        <div className="w-5 h-5 rounded-md bg-indigo-500" />
        {[1,2,3,4].map(i => <div key={i} className="w-5 h-1.5 rounded-full bg-slate-600" />)}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-1.5">
          {["from-indigo-500 to-purple-500","from-emerald-500 to-teal-500","from-orange-500 to-amber-500"].map((g,i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-2 border border-slate-200 dark:border-slate-700">
              <div className={`w-4 h-4 rounded-md bg-gradient-to-br ${g} mb-1`} />
              <div className="h-2 w-8 rounded-full bg-slate-800 dark:bg-white" />
            </div>
          ))}
        </div>
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-2 flex items-end gap-0.5">
          {[40,65,45,80,55,90,70,85,60,75].map((h,i) => (
            <div key={i} className={`flex-1 rounded-t-sm ${i===7?"bg-indigo-500":"bg-indigo-200 dark:bg-indigo-900"}`} style={{height:`${h}%`}} />
          ))}
        </div>
      </div>
    </div>
  )

  /* ── Generic fallback ── */
  const gradients: Record<string, string> = {
    saas:      "from-blue-500 to-purple-600",
    ai:        "from-violet-500 to-pink-600",
    agency:    "from-orange-500 to-red-600",
    finance:   "from-green-500 to-teal-600",
    portfolio: "from-cyan-500 to-blue-600",
    dashboard: "from-indigo-500 to-purple-600",
  }
  const g = gradients[cat] ?? "from-indigo-500 to-purple-600"

  return (
    <div className={`w-full h-full bg-gradient-to-br ${g} flex flex-col items-center justify-center gap-3 p-5 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-3 left-3 right-3 h-6 rounded-xl bg-white/40" />
        <div className="absolute top-12 left-3 right-3 h-20 rounded-xl bg-white/20" />
        <div className="absolute bottom-3 left-3 right-3 h-8 rounded-xl bg-white/30" />
      </div>
      <div className="relative z-10 text-center">
        <div className="w-10 h-10 rounded-2xl bg-white/20 mx-auto mb-2" />
        <div className="h-2 w-20 rounded-full bg-white/80 mx-auto" />
        <div className="h-1.5 w-14 rounded-full bg-white/50 mx-auto mt-1.5" />
      </div>
    </div>
  )
}
