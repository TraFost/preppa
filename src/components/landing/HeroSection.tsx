"use client"

import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.2 } },
}

export function HeroSection() {
  return (
    <section className="pt-36 pb-28 md:pt-44 md:pb-36 px-5">
      <motion.div
        className="max-w-[1100px] mx-auto text-center"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.p variants={fadeUp} className="text-[11px] tracking-[0.2em] text-text-secondary uppercase mb-6">
          ADA Preparation, Reimagined
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-[32px] md:text-[48px] font-medium leading-tight max-w-3xl mx-auto mb-4"
        >
          The smartest way to prepare for Apple Developer Academy.
        </motion.h1>
        <motion.p variants={fadeUp} className="text-text-secondary text-base md:text-lg mb-8">
          Practice daily. Simulate the real test. Track your readiness.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
          <button className="bg-accent text-white rounded-full px-8 py-3.5 text-lg font-medium hover:opacity-90 transition-opacity">
            Start for free →
          </button>
          <button className="text-text-secondary text-sm hover:text-text-primary transition-colors">
            See how it works ↓
          </button>
          <p className="text-text-secondary text-sm mt-4">Joined by 200+ ADA applicants</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
