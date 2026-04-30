import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  label: string;
  className?: string;
  variant?: "light" | "dark";
}

export function PhotoPlaceholder({ label, className, variant = "light" }: PhotoPlaceholderProps) {
  return (
    <div
      className={cn("photo-placeholder", variant === "dark" && "photo-dark", className)}
      role="img"
      aria-label={label}
    >
      <span className="max-w-[80%] leading-snug">{label}</span>
    </div>
  );
}
