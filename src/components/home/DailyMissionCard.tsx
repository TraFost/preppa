interface DailyMissionCardProps {
  title: string
  tasks: string[]
  completed: boolean[]
  xpReward: number
}

function CheckCircle({ filled }: { filled: boolean }) {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20">
      {filled ? (
        <>
          <circle cx="10" cy="10" r="10" fill="#34C759" />
          <path d="M6 10l2.5 2.5L14 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <circle cx="10" cy="10" r="9" fill="none" stroke="#D1D5DB" strokeWidth="1.5" />
      )}
    </svg>
  )
}

export function DailyMissionCard({ title, tasks, completed, xpReward }: DailyMissionCardProps) {
  return (
    <div className="rounded-[16px] border border-zinc-200 p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="bg-accent text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
          Daily mission
        </span>
        <span className="text-text-secondary text-[13px]">+{xpReward} XP</span>
      </div>
      <p className="text-[13px] font-medium text-text-primary mb-3">{title}</p>
      <div className="space-y-2">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle filled={completed[i]} />
            <span
              className={`text-[13px] ${
                completed[i]
                  ? "line-through text-text-secondary"
                  : "text-text-primary"
              }`}
            >
              {task}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
