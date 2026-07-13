import { ArrowRight } from "lucide-react";

import data from "@/mocks/performance/intelligent-alerts.json";

import { AlertCard } from "./AlertCard";

export function IntelligentAlerts() {
  return (
    <section className="rounded-3xl border border-dracula-line/40 bg-dracula-card p-6">

      <div className="mb-6">

        <h2 className="text-xl font-bold text-dracula-fg">
          {data.title}
        </h2>

        <p className="mt-1 text-sm text-dracula-muted">
          {data.subtitle}
        </p>

      </div>

      <div className="space-y-3">

        {data.alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            title={alert.title}
            description={alert.description}
            badge={alert.badge}
            type={alert.type as any}
            icon={alert.icon as any}
          />
        ))}

      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-dracula-purple/10 py-3 text-sm font-semibold text-dracula-purple transition hover:bg-dracula-purple/20">
        Ver Central de Inteligência
        <ArrowRight size={16} />
      </button>

    </section>
  );
}