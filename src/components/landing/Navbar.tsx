"use client"

import { useState, useEffect } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
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
  )
}
