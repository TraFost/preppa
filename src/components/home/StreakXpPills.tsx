interface StreakXpPillsProps {
  streak: number;
  xp: number;
}

export function StreakXpPills({ streak, xp }: StreakXpPillsProps) {
  return (
    <div className="flex gap-3 mb-6">
      <div className="bg-surface rounded-full text-[12px] px-3 py-1">
        🔥 {streak} day streak
      </div>
      <div className="bg-surface rounded-full text-[12px] px-3 py-1">
        ⚡ {xp} XP
      </div>
    </div>
  );
}