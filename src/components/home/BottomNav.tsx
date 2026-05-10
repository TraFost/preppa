"use client"

import { Home, FileText, Timer, User } from "lucide-react"

const tabs = [
  { label: "Home", icon: Home, active: true },
  { label: "Practice", icon: FileText, active: false },
  { label: "Test", icon: Timer, active: false },
  { label: "Profile", icon: User, active: false },
]

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="max-w-lg mx-auto flex justify-around py-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 ${
              tab.active ? "text-accent" : "text-text-secondary"
            }`}
          >
            <tab.icon className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
