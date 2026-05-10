"use client"

import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.2 } },
}

const statements = [
  "ADA has no official prep guide.",
  "Most applicants don't know what to study.",
  "The test pressure hits different.",
]

export function ProblemSection() {
  return (
    <section className="bg-[#FAFAF8] py-24 md:py-28 px-5">
      <div className="max-w-[1100px] mx-auto text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {statements.map((s) => (
            <motion.p key={s} variants={fadeUp} className="text-2xl md:text-3xl font-medium py-4">
              &ldquo;{s}&rdquo;
            </motion.p>
          ))}
        </motion.div>
        <p className="text-accent text-xl font-medium mt-10">Preppa fixes all three.</p>
      </div>
    </section>
  )
}
