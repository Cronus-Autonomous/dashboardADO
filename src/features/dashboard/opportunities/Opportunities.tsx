import { ArrowRight } from "lucide-react";

import data from "@/mocks/execution_center/opportunities.json";

import { OpportunityCard } from "./OpportunityCard";

export function Opportunities() {
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

      <div className="space-y-3 flex gap-4">

        <div className="flex w-full flex-col gap-3">
        {data.items.map((item) => (
          <OpportunityCard
            key={item.id}
            title={item.title}
            description={item.description}
            potential={item.potential}
            icon={item.icon as any}
            color={item.color as any}
            action={item.action}
          />
        ))}
        </div>


        {/* <div className="flex w-full flex-col gap-3">
          {data.items2.map((item) => (
          <OpportunityCard
            key={item.id}
            title={item.title}
            description={item.description}
            potential={item.potential}
            icon={item.icon as any}
            color={item.color as any}
            action={item.action}
          />
        ))}
        </div>

        <div className="flex w-full flex-col gap-3">
          {data.items3.map((item) => (
          <OpportunityCard
            key={item.id}
            title={item.title}
            description={item.description}
            potential={item.potential}
            icon={item.icon as any}
            color={item.color as any}
            action={item.action}
          />
        ))}
        </div> */}

      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-dracula-purple/10 py-3 text-sm font-semibold text-dracula-purple transition hover:bg-dracula-purple/20">
        Ver Command Center
        <ArrowRight size={16} />
      </button>

    </section>
  );
}