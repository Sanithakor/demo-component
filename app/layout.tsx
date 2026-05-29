import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import DashboardLayoutWrapper from "@/components/layout/DashboardLayoutWrapper"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "ComponentsHub - Premium Tailwind CSS Components & Templates",
  description:
    "Production-ready Tailwind CSS components, templates, and UI kits for modern web applications. Copy, paste, and ship faster.",
  keywords: ["Tailwind CSS", "components", "templates", "UI kit", "React", "Next.js"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
      </body>
    </html>
  )
}
