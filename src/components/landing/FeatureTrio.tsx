"use client"

import { motion } from "framer-motion"

const features = [
  {
    icon: "🧠",
    title: "Practice Mode",
    desc: "AI-generated drills that adapt to your level. Instant feedback on every mistake.",
  },
  {
    icon: "⏱",
    title: "Test Simulation",
    desc: "Full ADA pressure simulation. Timer, no hints, real conditions.",
  },
  {
    icon: "🃏",
    title: "Flashcard Review",
    desc: "Wrong answers become flashcards automatically. Spaced review built in.",
  },
]

export function FeatureTrio() {
  return (
    <section className="py-24 md:py-28 px-5">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="border border-zinc-200 rounded-[20px] p-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <span className="text-[32px] block mb-3">{f.icon}</span>
            <h3 className="text-[15px] font-medium mb-1">{f.title}</h3>
            <p className="text-[13px] text-text-secondary leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
