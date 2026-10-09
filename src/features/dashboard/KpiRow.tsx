import { kpis, kpis_unidade } from "@/lib/dashboard-mocks";
import { KpiCard } from "./KpiCard";
import { useState } from "react";

export function KpiRow({user  }: {user: any}) {
  const [kpiData] = useState(user.isFranchise ? kpis_unidade : kpis);
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-6">
      {kpiData.map((k) => (
        <KpiCard
          key={k.id}
          label={k.label}
          value={k.value}
          delta={k.delta}
          deltaDir={k.deltaDir}
          sub={k.sub}
          accent={k.accent}
          icon={k.icon}
          highlight={k.id === "ia"}
          sparkline={k.sparkline}
        />
      ))}
    </div>
  );
}
