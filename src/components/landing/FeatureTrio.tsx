"use client"

import { motion } from "framer-motion"
import { Brain, Timer, Layers } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Practice Mode",
    desc: "AI-generated drills that adapt to your level. Instant feedback on every mistake.",
  },
  {
    icon: Timer,
    title: "Test Simulation",
    desc: "Full ADA pressure simulation. Timer, no hints, real conditions.",
  },
  {
    icon: Layers,
    title: "Flashcard Review",
    desc: "Wrong answers become flashcards automatically. Spaced review built in.",
  },
]

export function FeatureTrio() {
  return (
    <section className="py-28 md:py-36 px-5">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="rounded-card border border-border p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <div className="mb-5 bg-surface p-4 rounded-full">
              <f.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold mb-2 tracking-tight">{f.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
