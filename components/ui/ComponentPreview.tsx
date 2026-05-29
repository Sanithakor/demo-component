"use client"

/**
 * ComponentPreview
 * Renders a realistic dummy preview for each component category.
 * Replace with real screenshots when available.
 */

interface ComponentPreviewProps {
  category: string
  id?: string
  className?: string
}

// Deterministic "random" color from id string
function colorFromId(id = ""): string {
  const palettes = [
    "from-indigo-500 to-purple-600",
    "from-blue-500 to-cyan-500",
    "from-violet-500 to-pink-500",
    "from-emerald-500 to-teal-500",
    "from-orange-500 to-amber-500",
    "from-rose-500 to-pink-500",
    "from-sky-500 to-blue-500",
    "from-fuchsia-500 to-purple-500",
  ]
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash)
  return palettes[Math.abs(hash) % palettes.length]
}

export default function ComponentPreview({ category, id = "", className = "" }: ComponentPreviewProps) {
  const cat = category.toLowerCase()
  const accent = colorFromId(id)

  /* ── Hero ── */
  if (cat === "hero") return (
    <div className={`w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center gap-3 p-5 ${className}`}>
      <div className="w-16 h-1.5 rounded-full bg-indigo-400/60" />
      <div className="w-32 h-3 rounded-full bg-white/80" />
      <div className="w-24 h-2 rounded-full bg-white/40 mt-1" />
      <div className="flex gap-2 mt-3">
        <div className="h-7 w-20 rounded-lg bg-indigo-500" />
        <div className="h-7 w-20 rounded-lg border border-white/30" />
      </div>
      {/* Decorative blobs */}
      <div className="absolute top-3 right-4 w-12 h-12 rounded-full bg-purple-500/30 blur-xl" />
      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-full bg-indigo-500/30 blur-xl" />
    </div>
  )

  /* ── Pricing ── */
  if (cat === "pricing") return (
    <div className={`w-full h-full bg-gray-50 dark:bg-slate-900 flex items-center justify-center gap-3 p-4 ${className}`}>
      {[
        { label: "Free", price: "$0", color: "border-gray-200 dark:border-slate-700", active: false },
        { label: "Pro", price: "$29", color: "border-indigo-500 shadow-lg shadow-indigo-500/20", active: true },
        { label: "Team", price: "$79", color: "border-gray-200 dark:border-slate-700", active: false },
      ].map(plan => (
        <div key={plan.label} className={`flex-1 rounded-xl border-2 ${plan.color} bg-white dark:bg-slate-800 p-3 flex flex-col gap-1.5 ${plan.active ? "scale-105" : ""}`}>
          <div className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{plan.label}</div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">{plan.price}</div>
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${plan.active ? "bg-indigo-500" : "bg-gray-300 dark:bg-slate-600"}`} />
              <div className="h-1.5 rounded-full bg-gray-200 dark:bg-slate-700 flex-1" />
            </div>
          ))}
          <div className={`mt-1 h-5 rounded-lg ${plan.active ? "bg-indigo-500" : "bg-gray-200 dark:bg-slate-700"}`} />
        </div>
      ))}
    </div>
  )

  /* ── Dashboard ── */
  if (cat === "dashboard") return (
    <div className={`w-full h-full bg-slate-50 dark:bg-slate-900 flex gap-2 p-3 ${className}`}>
      {/* Sidebar */}
      <div className="w-10 bg-slate-800 dark:bg-slate-950 rounded-lg flex flex-col items-center gap-2 py-3">
        <div className="w-5 h-5 rounded-md bg-indigo-500" />
        {[1,2,3,4].map(i => <div key={i} className="w-5 h-1.5 rounded-full bg-slate-600" />)}
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-1.5">
          {["from-indigo-500 to-purple-500","from-emerald-500 to-teal-500","from-orange-500 to-amber-500"].map((g,i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-2 border border-slate-200 dark:border-slate-700">
              <div className={`w-4 h-4 rounded-md bg-gradient-to-br ${g} mb-1`} />
              <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="h-3 w-6 rounded-full bg-slate-800 dark:bg-white mt-0.5" />
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-2 flex items-end gap-1">
          {[40,65,45,80,55,90,70,85,60,75].map((h,i) => (
            <div key={i} className={`flex-1 rounded-t-sm bg-gradient-to-t ${i===7?"from-indigo-600 to-indigo-400":"from-indigo-200 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800"}`} style={{height:`${h}%`}} />
          ))}
        </div>
      </div>
    </div>
  )

  /* ── Testimonials ── */
  if (cat === "testimonials") return (
    <div className={`w-full h-full bg-white dark:bg-slate-900 flex flex-col gap-2 p-4 ${className}`}>
      {[1,2].map(i => (
        <div key={i} className="flex-1 bg-gray-50 dark:bg-slate-800 rounded-xl p-3 border border-gray-100 dark:border-slate-700">
          <div className="flex gap-0.5 mb-2">
            {[1,2,3,4,5].map(s => <div key={s} className="w-2.5 h-2.5 rounded-sm bg-amber-400" />)}
          </div>
          <div className="space-y-1">
            <div className="h-1.5 rounded-full bg-gray-300 dark:bg-slate-600 w-full" />
            <div className="h-1.5 rounded-full bg-gray-300 dark:bg-slate-600 w-4/5" />
            <div className="h-1.5 rounded-full bg-gray-300 dark:bg-slate-600 w-3/5" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
            <div>
              <div className="h-1.5 w-14 rounded-full bg-gray-400 dark:bg-slate-500" />
              <div className="h-1 w-10 rounded-full bg-gray-200 dark:bg-slate-600 mt-0.5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  /* ── Navigation / Navbar ── */
  if (cat === "navigation" || cat === "navbar") return (
    <div className={`w-full h-full bg-white dark:bg-slate-900 flex flex-col gap-3 p-4 ${className}`}>
      {/* Navbar */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2.5 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
          <div className="h-2 w-16 rounded-full bg-gray-800 dark:bg-white" />
        </div>
        <div className="flex gap-3">
          {[1,2,3].map(i => <div key={i} className="h-1.5 w-10 rounded-full bg-gray-300 dark:bg-slate-600" />)}
        </div>
        <div className="h-6 w-16 rounded-lg bg-indigo-500" />
      </div>
      {/* Dropdown hint */}
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-3 shadow-lg ml-8 w-36">
        {[1,2,3].map(i => (
          <div key={i} className="flex items-center gap-2 py-1.5">
            <div className="w-3 h-3 rounded bg-indigo-100 dark:bg-indigo-900" />
            <div className="h-1.5 rounded-full bg-gray-300 dark:bg-slate-600 flex-1" />
          </div>
        ))}
      </div>
    </div>
  )

  /* ── Auth Forms ── */
  if (cat === "auth") return (
    <div className={`w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4 ${className}`}>
      <div className="w-full max-w-[160px] bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-gray-100 dark:border-slate-700">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-3" />
        <div className="h-2 w-20 rounded-full bg-gray-800 dark:bg-white mx-auto mb-4" />
        {/* Fields */}
        {[1,2].map(i => (
          <div key={i} className="mb-2">
            <div className="h-1.5 w-10 rounded-full bg-gray-400 dark:bg-slate-500 mb-1" />
            <div className="h-7 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700" />
          </div>
        ))}
        <div className="h-7 rounded-lg bg-indigo-500 mt-3" />
        <div className="flex items-center gap-1 mt-3">
          <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600" />
          <div className="h-1.5 w-4 rounded-full bg-gray-300 dark:bg-slate-500" />
          <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600" />
        </div>
        <div className="h-7 rounded-lg border border-gray-200 dark:border-slate-600 mt-2" />
      </div>
    </div>
  )

  /* ── Forms ── */
  if (cat === "forms") return (
    <div className={`w-full h-full bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4 ${className}`}>
      <div className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 p-4 space-y-3">
        <div className="h-2 w-24 rounded-full bg-gray-800 dark:bg-white" />
        <div className="grid grid-cols-2 gap-2">
          {[1,2].map(i => (
            <div key={i}>
              <div className="h-1.5 w-10 rounded-full bg-gray-400 dark:bg-slate-500 mb-1" />
              <div className="h-7 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700" />
            </div>
          ))}
        </div>
        <div>
          <div className="h-1.5 w-12 rounded-full bg-gray-400 dark:bg-slate-500 mb-1" />
          <div className="h-7 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700" />
        </div>
        <div>
          <div className="h-1.5 w-16 rounded-full bg-gray-400 dark:bg-slate-500 mb-1" />
          <div className="h-14 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700" />
        </div>
        <div className="h-7 rounded-lg bg-indigo-500 w-24" />
      </div>
    </div>
  )

  /* ── AI Sections ── */
  if (cat === "ai") return (
    <div className={`w-full h-full bg-gradient-to-br from-slate-950 to-indigo-950 flex flex-col gap-2 p-4 ${className}`}>
      {/* Chat messages */}
      <div className="flex gap-2 items-end">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shrink-0" />
        <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[70%]">
          <div className="space-y-1">
            <div className="h-1.5 w-24 rounded-full bg-slate-600" />
            <div className="h-1.5 w-16 rounded-full bg-slate-600" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-end justify-end">
        <div className="bg-indigo-600 rounded-2xl rounded-br-sm px-3 py-2 max-w-[70%]">
          <div className="space-y-1">
            <div className="h-1.5 w-20 rounded-full bg-indigo-400" />
            <div className="h-1.5 w-14 rounded-full bg-indigo-400" />
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-pink-500 shrink-0" />
      </div>
      {/* Typing indicator */}
      <div className="flex gap-2 items-end">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shrink-0" />
        <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-3 py-2">
          <div className="flex gap-1">
            {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{animationDelay:`${i*0.15}s`}} />)}
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="mt-auto flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-2 border border-slate-700">
        <div className="flex-1 h-1.5 rounded-full bg-slate-600" />
        <div className="w-5 h-5 rounded-lg bg-indigo-500 shrink-0" />
      </div>
    </div>
  )

  /* ── Bento Grid ── */
  if (cat === "bento" || cat === "layout") return (
    <div className={`w-full h-full bg-gray-50 dark:bg-slate-900 p-3 grid grid-cols-3 grid-rows-3 gap-2 ${className}`}>
      <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-3 flex flex-col justify-between">
        <div className="w-6 h-6 rounded-lg bg-white/30" />
        <div className="space-y-1">
          <div className="h-2 w-16 rounded-full bg-white/80" />
          <div className="h-1.5 w-12 rounded-full bg-white/50" />
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 p-2 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-white/40" />
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 p-2 flex items-center justify-center">
        <div className="w-5 h-5 rounded-lg bg-white/40" />
      </div>
      <div className="col-span-2 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-2 flex items-center gap-2">
        <div className="w-5 h-5 rounded-lg bg-indigo-100 dark:bg-indigo-900" />
        <div className="flex-1 space-y-1">
          <div className="h-1.5 rounded-full bg-gray-300 dark:bg-slate-600 w-full" />
          <div className="h-1 rounded-full bg-gray-200 dark:bg-slate-700 w-3/4" />
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 p-2 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-white/40" />
      </div>
    </div>
  )

  /* ── CTA ── */
  if (cat === "cta") return (
    <div className={`w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center gap-3 p-5 relative overflow-hidden ${className}`}>
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 blur-xl" />
      <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10 blur-xl" />
      <div className="h-2 w-28 rounded-full bg-white/90" />
      <div className="h-1.5 w-20 rounded-full bg-white/60" />
      <div className="flex gap-2 mt-2">
        <div className="h-7 w-20 rounded-lg bg-white" />
        <div className="h-7 w-20 rounded-lg border-2 border-white/50" />
      </div>
    </div>
  )

  /* ── Footer ── */
  if (cat === "footer") return (
    <div className={`w-full h-full bg-slate-900 flex flex-col gap-3 p-4 ${className}`}>
      <div className="grid grid-cols-4 gap-3 flex-1">
        <div className="col-span-1 space-y-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-500" />
          <div className="h-1.5 w-16 rounded-full bg-slate-600" />
          <div className="h-1 w-12 rounded-full bg-slate-700" />
          <div className="h-1 w-14 rounded-full bg-slate-700" />
        </div>
        {[1,2,3].map(col => (
          <div key={col} className="space-y-2">
            <div className="h-1.5 w-10 rounded-full bg-slate-500" />
            {[1,2,3,4].map(i => <div key={i} className="h-1 rounded-full bg-slate-700" style={{width:`${50+i*8}%`}} />)}
          </div>
        ))}
      </div>
      <div className="border-t border-slate-700 pt-2 flex items-center justify-between">
        <div className="h-1 w-24 rounded-full bg-slate-700" />
        <div className="flex gap-2">
          {[1,2,3].map(i => <div key={i} className="w-4 h-4 rounded-md bg-slate-700" />)}
        </div>
      </div>
    </div>
  )

  /* ── Default / Generic fallback ── */
  return (
    <div className={`w-full h-full bg-gradient-to-br ${accent} flex flex-col items-center justify-center gap-3 p-5 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-2 right-2 h-6 rounded-lg bg-white/40" />
        <div className="absolute top-10 left-2 right-2 h-3 rounded-lg bg-white/30" />
        <div className="absolute top-16 left-2 w-1/2 h-3 rounded-lg bg-white/30" />
        <div className="absolute bottom-8 left-2 right-2 h-8 rounded-xl bg-white/20" />
        <div className="absolute bottom-2 left-2 w-16 h-5 rounded-lg bg-white/30" />
      </div>
      <div className="relative z-10 text-center">
        <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto mb-2 flex items-center justify-center">
          <div className="w-5 h-5 rounded-lg bg-white/60" />
        </div>
        <div className="h-2 w-20 rounded-full bg-white/80 mx-auto" />
        <div className="h-1.5 w-14 rounded-full bg-white/50 mx-auto mt-1.5" />
      </div>
    </div>
  )
}
