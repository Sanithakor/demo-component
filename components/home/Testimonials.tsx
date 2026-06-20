"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    content: "ComponentsHub has completely transformed how we build our products. The quality and variety are unmatched.",
    author: "Sarah Chen",
    role: "Frontend Lead at Stripe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content: "The best Tailwind component library I've used. Attention to detail is incredible and the code is always clean.",
    author: "Alex Rivera",
    role: "Senior Developer at Vercel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content: "Saved us weeks of development time. The AI generator is a game-changer for rapid prototyping.",
    author: "Emma Watson",
    role: "CTO at Startup",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content: "Dark mode, responsive, TypeScript-ready. Everything just works out of the box. Absolutely love it.",
    author: "James Liu",
    role: "Indie Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content: "The dashboard templates alone are worth the Pro plan. Our clients are always impressed by the polish.",
    author: "Priya Nair",
    role: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content: "Framer Motion animations are baked right in. Saves so much time tweaking transitions manually.",
    author: "Carlos Mendes",
    role: "UI Engineer at Linear",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
]

const StarRating = ({ count }: { count: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Loved by developers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers building amazing products with our components
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="break-inside-avoid mb-6 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
            >
              <StarRating count={testimonial.rating} />
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100 dark:border-gray-800">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
