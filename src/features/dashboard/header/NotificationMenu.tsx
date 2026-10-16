import { useState } from "react";
import {
  Bell,
  AlertTriangle,
  Package,
  Sparkles,
  Trophy,
  ChevronRight,
} from "lucide-react";

import franchisor from "@/mocks/dashboard/franchisor.json";
import franchise from "@/mocks/dashboard/franchise.json";

const iconMap = {
  alert: AlertTriangle,
  package: Package,
  sparkles: Sparkles,
  trophy: Trophy,
};

const colorMap = {
  critical: "bg-red-500",
  warning: "bg-amber-500",
  success: "bg-emerald-500",
  info: "bg-cyan-500",
};

interface SidebarProps {
  user: any;
}

export function NotificationMenu({ user }: SidebarProps) {
  const [open, setOpen] = useState(false);

  const notifications = user.isFranchise ? franchise.notifications : franchisor.notifications;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-dracula-line/60 bg-dracula-card transition hover:border-dracula-purple/40"
      >
        <Bell className="h-5 w-5 text-dracula-fg" />

        {notifications.unread > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-pink-500 px-1 text-[10px] font-bold text-white">
            {notifications.unread}
          </span>
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 z-20 mt-2 w-[420px] overflow-hidden rounded-2xl border border-dracula-line/60 bg-dracula-card-2 shadow-2xl">

            <div className="flex items-center justify-between border-b border-dracula-line/60 p-5">
              <div>
                <h3 className="text-lg font-semibold text-dracula-fg">
                  Central de Alertas
                </h3>

                <p className="text-xs text-dracula-muted">
                  {notifications.unread} notificações pendentes
                </p>
              </div>

              <div className="rounded-xl bg-dracula-card px-3 py-1 text-xs text-dracula-purple">
                Tempo Real
              </div>
            </div>

            <div className="max-h-[420px] overflow-y-auto">

              {notifications.items.map((item) => {
                const Icon =
                  iconMap[item.icon as keyof typeof iconMap];

                return (
                  <button
                    key={item.id}
                    className="flex w-full items-start gap-4 border-b border-dracula-line/30 p-5 text-left transition hover:bg-dracula-line/20"
                  >
                    <div
                      className={`mt-1 flex h-10 w-10 items-center justify-center rounded-xl ${colorMap[item.type as keyof typeof colorMap]}`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between">

                        <h4 className="font-semibold text-dracula-fg">
                          {item.title}
                        </h4>

                        <span className="text-xs text-dracula-muted">
                          {item.time}
                        </span>

                      </div>

                      <p className="mt-1 text-sm text-dracula-muted">
                        {item.description}
                      </p>

                    </div>
                  </button>
                );
              })}
            </div>

            <button className="flex w-full items-center justify-center gap-2 border-t border-dracula-line/60 bg-dracula-card p-4 text-sm font-medium text-dracula-purple transition hover:bg-dracula-line/20">
              Ver todas as notificações
              <ChevronRight size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}