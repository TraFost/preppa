"use client"

import { motion } from "framer-motion"

export function SignUpSection() {
  return (
    <section className="bg-[#FAFAF8] py-24 md:py-28 px-5 text-center">
      <motion.div
        className="max-w-[600px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-medium mb-3">Ready to start?</h2>
        <p className="text-text-secondary mb-8">Join the waitlist. Free early access for the first 500.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-[12px] border border-zinc-200 text-sm outline-none focus:border-accent transition-colors"
          />
          <button className="bg-accent text-white rounded-[12px] px-6 py-3 text-sm font-medium whitespace-nowrap hover:opacity-90 transition-opacity">
            Get Early Access
          </button>
        </div>
        <p className="text-[11px] text-text-secondary mt-4">No spam. Unsubscribe anytime.</p>
      </motion.div>
    </section>
  )
}
