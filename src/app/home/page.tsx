import { GreetingSection } from "@/components/home/GreetingSection"
import { StreakXpPills } from "@/components/home/StreakXpPills"
import { ReadinessRingCard } from "@/components/home/ReadinessRingCard"
import { DailyMissionCard } from "@/components/home/DailyMissionCard"
import { CTASection } from "@/components/home/CTASection"
import { BottomNav } from "@/components/home/BottomNav"

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-5">
      <div className="max-w-lg mx-auto py-8">
        <GreetingSection name="Alex" />
        <StreakXpPills streak={4} xp={320} />
        <ReadinessRingCard readiness={67} />
        <DailyMissionCard
          title="Logic warm-up"
          tasks={[
            "Complete 5 logic drills",
            "Review 3 flashcards",
            "Score 70%+ on a quick test",
          ]}
          completed={[true, false, false]}
          xpReward={150}
        />
        <CTASection />
        <BottomNav />
      </div>
    </div>
  )
}
