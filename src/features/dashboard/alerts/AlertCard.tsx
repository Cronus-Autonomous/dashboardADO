import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Type = "critical" | "warning" | "opportunity";

const styles = {
  critical: {
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
    badge: "bg-red-500/15 text-red-400",
  },
  warning: {
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    badge: "bg-yellow-500/15 text-yellow-400",
  },
  opportunity: {
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    badge: "bg-yellow-500/15 text-yellow-400",
  },
};

interface Props {
  title: string;
  description: string;
  badge: string;
  type: Type;
  icon: keyof typeof Icons;
}

export function AlertCard({
  title,
  description,
  badge,
  type,
  icon,
}: Props) {
  const s = styles[type];

  const Icon = (Icons[icon] as LucideIcon) ?? Icons.CircleAlert;

  return (
    <div className="group flex items-center justify-between rounded-2xl border border-dracula-line/40 bg-dracula-card-2 p-4 transition hover:border-dracula-purple/30 hover:bg-dracula-card">

      <div className="flex items-center gap-4">

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg}`}
        >
          <Icon className={`h-5 w-5 ${s.iconColor}`} />
        </div>

        <div>

          <h4 className="font-semibold text-dracula-fg">
            {title}
          </h4>

          <p className="mt-1 text-sm text-dracula-muted">
            {description}
          </p>

        </div>

      </div>

      <span
        className={`rounded-lg px-3 py-1 text-xs font-semibold ${s.badge}`}
      >
        {badge}
      </span>

    </div>
  );
}