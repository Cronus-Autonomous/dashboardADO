import data from "@/mocks/execution_center/ai-execution.json";
import { ArrowRight, Circle } from "lucide-react";
import { ExecutionMetric } from "./ExecutionMetric";

export function AIExecution() {
  return (
    <section className="rounded-2xl border border-dracula-line/40 bg-dracula-card p-3">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-sm font-bold text-dracula-fg">
            {data.title}
          </h2>

          <p className="mt-1 text-sm text-dracula-muted">
            Atividade da infraestrutura inteligente da Cronus.
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

          <Circle
            size={10}
            className="fill-green-400 text-green-400 animate-pulse"
          />

          <span className="text-sm font-semibold text-green-400">
            {data.status.label}
          </span>

        </div>

      </div>

      <div className="grid gap-3 lg:grid-cols-3">

        {data.metrics.map((metric) => (
          <ExecutionMetric
            key={metric.id}
            title={metric.title}
            value={metric.value}
            subtitle={metric.subtitle}
            color={metric.color as any}
          />
        ))}

      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-dracula-purple/10 py-3 text-sm font-semibold text-dracula-purple transition hover:bg-dracula-purple/20">

        Ver Centro de Execução

        <ArrowRight size={16} />

      </button>

    </section>
  );
}