import data from "@/mocks/network/network_index.json";

import { StrategicCard } from "./StrategicCard";

export function StrategicIndexes() {
  return (
    <section className="rounded-2xl border border-dracula-line/40 bg-dracula-card p-4">
      <div className="mb-3">
        <h2 className="text-xs font-bold text-dracula-fg">
          {data.title}
        </h2>
        <p className="mt-1 text-xs text-dracula-muted">
          Indicadores proprietários da Cronus para monitoramento da rede.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        {data.items.map((item) => (
          <StrategicCard
            key={item.id}
            title={item.title}
            value={item.value}
            suffix={item.suffix}
            status={item.status}
            delta={item.delta}
            deltaLabel={item.deltaLabel}
            progress={item.progress}
            color={item.color as "pink" | "cyan" | "yellow"}
          />
        ))}

      </div>

    </section>
  );
}