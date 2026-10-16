import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
} from "recharts";
import { dailyRevenue } from "@/lib/dashboard-mocks";
import { formatBRL, formatBRLCompact } from "@/lib/format";
import { Card } from "./Card";

export function RevenueVsGoalChart() {
  const ultimo = dailyRevenue[dailyRevenue.length - 1];
  const atingido = (ultimo.acumulado / ultimo.meta) * 100;

  return (
    <Card
      title="Faturamento Acumulado vs. Meta do Mês"
      subtitle={
        <>
          Mês corrente com{" "}
          <strong className="font-semibold text-dracula-pink">
            {atingido.toFixed(1)}%
          </strong>{" "}
          da meta atingida
        </>
      }
      right={
        <div className="flex items-center gap-3 text-[10px] text-dracula-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-[2px] w-3 bg-dracula-pink" />
            Acumulado
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-[2px] w-3 bg-dracula-cyan" />
            Meta
          </span>
        </div>
      }
      className="h-full"
    >
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={dailyRevenue}
            margin={{ top: 12, right: 12, bottom: 0, left: 10 }}
          >
            <defs>
              <linearGradient id="colorAcumulado" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff79c6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ff79c6" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#44475a" strokeOpacity={0.15} vertical={false} />
            <XAxis
              dataKey="dia"
              tick={{ fill: "#6272a4", fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: "#44475a", strokeOpacity: 0.3 }}
            />
            <YAxis
              tick={{ fill: "#6272a4", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => formatBRLCompact(Number(v))}
              // Domain ajustado para focar na variação real em vez de obrigar o zero
              domain={['dataMin - 5000', 'dataMax + 10000']}
            />
            <Tooltip
              cursor={{ stroke: "#bd93f9", strokeWidth: 1, strokeDasharray: "3 3" }}
              contentStyle={{
                background: "#1e1f29",
                border: "1px solid #44475a",
                borderRadius: 12,
                color: "#f8f8f2",
                fontSize: 12,
              }}
              labelStyle={{ color: "#6272a4", fontWeight: "bold" }}
              formatter={(value) => formatBRL(value as number)}
              labelFormatter={(l) => `Dia ${l}`}
            />
            {/* Linha e Área para o acumulado, removendo as barras pesadas */}
            <Area
              type="monotone"
              dataKey="acumulado"
              name="Acumulado"
              stroke="#ff79c6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorAcumulado)"
            />
            <Area
              type="monotone"
              dataKey="meta"
              name="Meta"
              stroke="#8be9fd"
              strokeWidth={2}
              strokeDasharray="4 4"
              fill="none"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}