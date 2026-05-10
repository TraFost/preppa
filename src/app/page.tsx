"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.2 } },
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-text-primary font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-5 flex items-center justify-between h-16">
          <span className="text-xl font-medium tracking-tight">
            Preppa<span className="text-accent">.</span>
          </span>
          <button className="bg-accent text-white rounded-[12px] px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
            Get Early Access
          </button>
        </div>
      </nav>

      {/* Hero */}
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

      {/* Problem */}
      <section className="bg-[#FAFAF8] py-24 md:py-28 px-5">
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-medium py-4">
              "ADA has no official prep guide."
            </motion.p>
            <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-medium py-4">
              "Most applicants don't know what to study."
            </motion.p>
            <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-medium py-4">
              "The test pressure hits different."
            </motion.p>
          </motion.div>
          <p className="text-accent text-xl font-medium mt-10">Preppa fixes all three.</p>
        </div>
      </section>

      {/* Feature Trio */}
      <section className="py-24 md:py-28 px-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
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
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              className="border border-zinc-200 rounded-[20px] p-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <span className="text-[32px] block mb-3">{feature.icon}</span>
              <h3 className="text-[15px] font-medium mb-1">{feature.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Readiness Score Callout */}
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

      {/* How It Works */}
      <section className="py-24 md:py-28 px-5">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-zinc-200" />
            {[
              { step: "01", title: "Practice daily", desc: "solve drills, get AI feedback, earn XP" },
              { step: "02", title: "Take a simulation", desc: "full test mode, real pressure, no hints" },
              { step: "03", title: "Track your score", desc: "readiness % goes up, you know you're ready" },
            ].map((item, i) => (
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

      {/* Sign Up */}
      <section className="bg-[#FAFAF8] py-24 md:py-28 px-5 text-center">
        <motion.div
          className="max-w-[600px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-3">Ready to start?</h2>
          <p className="text-text-secondary mb-8">
            Join the waitlist. Free early access for the first 500.
          </p>
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

      {/* Footer */}
      <footer className="py-10 px-5">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-sm font-medium">
            Preppa<span className="text-accent">.</span>
          </span>
          <span className="text-sm text-text-secondary">Built for ADA applicants in Indonesia</span>
        </div>
      </footer>
    </div>
  )
}
