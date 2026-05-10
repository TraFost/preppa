"use client"

import { motion } from "framer-motion"

export function ReadinessCallout() {
  return (
    <section className="bg-[#FAFAF8] py-24 md:py-28 px-5">
      <motion.div
        className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[80px] font-medium text-accent leading-none">67%</span>
        <div>
          <h2 className="text-xl font-medium mb-2">Your ADA Readiness Score</h2>
          <p className="text-text-secondary text-base leading-relaxed max-w-lg">
            One number that tells you exactly how ready you are. It updates after every session. Users become obsessed
            with improving it.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
