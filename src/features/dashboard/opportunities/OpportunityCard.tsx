import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Color = "green" | "purple" | "cyan";

const colors = {
  green: {
    bg: "bg-green-500/15",
    text: "text-green-400",
    border: "border-green-500/20",
  },
  purple: {
    bg: "bg-dracula-purple/15",
    text: "text-dracula-purple",
    border: "border-dracula-purple/20",
  },
  cyan: {
    bg: "bg-cyan-500/15",
    text: "text-dracula-cyan",
    border: "border-cyan-500/20",
  },
};

interface Props {
  title: string;
  description: string;
  potential: string;
  icon: keyof typeof Icons;
  color: Color;
  action: string;
}

export function OpportunityCard({
  title,
  description,
  potential,
  icon,
  color,
  action,
}: Props) {
  const c = colors[color];

  const Icon = (Icons[icon] as LucideIcon) ?? Icons.Sparkles;

  return (
    <div className="group flex items-center justify-between rounded-2xl border border-dracula-line/40 bg-dracula-card-2 p-4 transition-all duration-300 hover:border-dracula-purple/30 hover:bg-dracula-card">

      <div className="flex items-center gap-2">

        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg}`}>
          <Icon className={`h-5 w-5 ${c.text}`} />
        </div>

        <div>

          <h4 className="font-semibold text-dracula-fg">
            {title}
          </h4>

          <p className="mt-1 text-sm text-dracula-muted">
            {description}
          </p>

          <p className="mt-2 text-sm">
            <span className="text-dracula-muted">
              Potencial:&nbsp;
            </span>

            <span className="font-semibold text-dracula-fg">
              {potential}
            </span>

          </p>

        </div>

      </div>

      <button
        className={`rounded-xl border px-5 py-2 font-medium transition ${c.border} ${c.text} hover:bg-white/5`}
      >
        {action}
      </button>

    </div>
  );
}