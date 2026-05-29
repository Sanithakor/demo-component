"use client"

import { motion } from "framer-motion"
import {
  Hero,
  FeaturedComponents,
  Categories,
  Pricing,
  Testimonials,
  FAQ,
  CTA,
  TrustedBy,
  TemplatesShowcase,
} from "@/components/home"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustedBy />
      <Categories />
      <FeaturedComponents />
      <TemplatesShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}