import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: "none" | "delayed" | "delayed-2"
  size?: "sm" | "md" | "lg"
}

export function FloatingCard({
  children,
  className,
  delay = "none",
  size = "md"
}: FloatingCardProps) {
  const delayClass = {
    none: "floating-animation",
    delayed: "floating-delayed",
    "delayed-2": "floating-delayed-2"
  }[delay]

  const sizeClass = {
    sm: "w-32 h-24",
    md: "w-48 h-32",
    lg: "w-64 h-40"
  }[size]

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-4 relative",
        sizeClass,
        delayClass,
        className
      )}
    >
      {children}
    </div>
  )
}