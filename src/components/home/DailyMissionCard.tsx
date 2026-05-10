import { Check } from "lucide-react"

interface DailyMissionCardProps {
  title: string
  tasks: string[]
  completed: boolean[]
  xpReward: number
}

export function DailyMissionCard({ title, tasks, completed, xpReward }: DailyMissionCardProps) {
  return (
    <div className="rounded-card border border-border p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="bg-accent text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
          Daily mission
        </span>
        <span className="text-text-secondary text-sm">+{xpReward} XP</span>
      </div>
      <p className="text-sm font-medium text-text-primary mb-3">{title}</p>
      <div className="space-y-2">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                completed[i] ? "bg-success" : "border border-border"
              }`}
            >
              {completed[i] && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
            </span>
            <span
              className={`text-sm ${
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
