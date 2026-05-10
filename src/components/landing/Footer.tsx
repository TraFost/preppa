import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="py-10 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Logo width={20} height={20} />
          <span className="text-sm font-medium">
            Preppa<span className="text-accent">.</span>
          </span>
        </div>
        <span className="text-sm text-text-secondary">
          Built for ADA applicants in Indonesia
        </span>
      </div>
    </footer>
  )
}
