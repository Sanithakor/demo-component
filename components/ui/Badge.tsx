"use client"

import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "outline"
  size?: "sm" | "md"
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const variants = {
      default: "bg-gray-900 dark:bg-white text-white dark:text-gray-900",
      secondary: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-white",
      destructive: "bg-red-500 text-white",
      outline: "border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300",
    }

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-xs",
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"

export default Badge