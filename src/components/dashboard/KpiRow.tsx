import { KpiCard } from "./KpiCard";
import { useEffect, useState, type ComponentProps } from "react";
import { fetchUnitKpis, type KpiItem } from "@/lib/api/finance";

export function KpiRow() {
  const [kpiData, setKpiData] = useState<KpiItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // UUID da Unidade Matriz configurado no seed
        const unitId = "b1ffcd88-8d0a-4fe9-aa5c-5aa8ac270b22";
        const data = await fetchUnitKpis(unitId, "2026-10-01", "2026-10-31");
        setKpiData(data);
      } catch (error) {
        console.error("Erro ao carregar KPIs da unidade:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <div className="text-xs text-dracula-muted p-4">Carregando indicadores da unidade...</div>;
  }

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
          icon={k.icon as ComponentProps<typeof KpiCard>["icon"]}
          highlight={k.id === "ia"}
        />
      ))}
    </div>
  );
}
