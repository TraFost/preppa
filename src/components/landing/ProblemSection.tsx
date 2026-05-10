"use client"

import { motion } from "framer-motion"

const statements = [
  { num: "01", text: "ADA has no official prep guide." },
  { num: "02", text: "Most applicants don't know what to study." },
  { num: "03", text: "The test pressure hits different." },
]

export function ProblemSection() {
  return (
    <section className="bg-[#FAFAF8] py-28 md:py-36 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="space-y-0">
          {statements.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex items-start gap-6 md:gap-10 py-8 md:py-10">
                <span className="text-[40px] md:text-[48px] font-medium text-zinc-200 leading-none w-16 flex-shrink-0">
                  {s.num}
                </span>
                <p className="text-2xl md:text-[32px] font-medium leading-tight pt-1">{s.text}</p>
              </div>
              {i < statements.length - 1 && (
                <div className="h-px bg-zinc-200 mx-0" />
              )}
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-accent text-xl md:text-2xl font-medium mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Preppa fixes all three.
        </motion.p>
      </div>
    </section>
  )
}
