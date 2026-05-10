"use client"

import { motion } from "framer-motion"

const steps = [
  { step: "01", title: "Practice daily", desc: "solve drills, get AI feedback, earn XP" },
  { step: "02", title: "Take a simulation", desc: "full test mode, real pressure, no hints" },
  { step: "03", title: "Track your score", desc: "readiness % goes up, you know you're ready" },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-28 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-zinc-200" />
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              className="flex-1 text-center md:text-left relative z-10 md:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
            >
              <span className="block text-[48px] font-medium text-zinc-200 mb-2">{item.step}</span>
              <h3 className="text-[15px] font-medium mb-1">{item.title}</h3>
              <p className="text-[13px] text-text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
