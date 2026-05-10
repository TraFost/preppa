"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ReadinessRingCardProps {
  readiness: number
}

export function ReadinessRingCard({ readiness }: ReadinessRingCardProps) {
  const [progress, setProgress] = useState(0)
  const circumference = 2 * Math.PI * 26
  const offset = circumference - (progress / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => setProgress(readiness), 100)
    return () => clearTimeout(timer)
  }, [readiness])

  return (
    <div className="bg-surface rounded-[20px] p-4 flex items-center gap-4 mb-6">
      <div className="relative w-14 h-14 flex-shrink-0">
        <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="26" fill="none" stroke="#E5E5EA" strokeWidth="4" />
          <motion.circle
            cx="28" cy="28" r="26"
            fill="none" stroke="#FF6B35"
            strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-accent">
          {progress}%
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-text-secondary mb-0.5">ADA Readiness</p>
        <p className="text-[15px] font-medium text-text-primary mb-2">Getting there</p>
        <div className="w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
        </div>
      </div>
    </div>
  )
}
