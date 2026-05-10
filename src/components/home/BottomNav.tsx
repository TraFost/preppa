"use client"

const tabs = [
  { label: "Home", icon: "🏠", active: true },
  { label: "Practice", icon: "📝", active: false },
  { label: "Test", icon: "⏱️", active: false },
  { label: "Profile", icon: "👤", active: false },
]

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 z-50">
      <div className="max-w-lg mx-auto flex justify-around py-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 ${
              tab.active ? "text-accent" : "text-text-secondary"
            }`}
          >
            <span className="text-lg leading-none">{tab.icon}</span>
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
