import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import DashboardLayoutWrapper from "@/components/layout/DashboardLayoutWrapper"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: "ComponentsHub – Premium Tailwind CSS Components & Templates",
    template: "%s | ComponentsHub",
  },
  description:
    "Production-ready Tailwind CSS components, templates, and UI kits for modern web applications. Copy, paste, and ship faster.",
  keywords: ["Tailwind CSS", "components", "templates", "UI kit", "React", "Next.js", "Framer Motion"],
  authors: [{ name: "ComponentsHub" }],
  creator: "ComponentsHub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://componentshub.com",
    siteName: "ComponentsHub",
    title: "ComponentsHub – Premium Tailwind CSS Components & Templates",
    description: "Production-ready Tailwind CSS components, templates, and UI kits. Copy, paste, and ship faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ComponentsHub – Premium Tailwind CSS Components & Templates",
    description: "Production-ready Tailwind CSS components, templates, and UI kits. Copy, paste, and ship faster.",
    creator: "@componentshub",
  },
  robots: {
    index: true,
    follow: true,
  },
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
