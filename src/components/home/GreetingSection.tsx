interface GreetingSectionProps {
  name: string;
}

export function GreetingSection({ name }: GreetingSectionProps) {
  return (
    <div className="mb-6">
      <p className="text-[13px] text-text-secondary">Good morning,</p>
      <p className="text-[20px] font-medium text-text-primary">{name}</p>
    </div>
  );
}