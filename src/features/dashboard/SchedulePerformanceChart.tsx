import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { Card } from "./Card";

interface DailyPerformance {
  dayLabel: string;
  agendamentos: number;
  ocupacao: number;
}

export function SchedulePerformanceChart() {
  // Dados idênticos aos exibidos na imagem_05ccd7.jpg
  const data: DailyPerformance[] = [
    { dayLabel: "Seg 16", agendamentos: 138, ocupacao: 84 },
    { dayLabel: "Ter 17", agendamentos: 176, ocupacao: 92 },
    { dayLabel: "Qua 18", agendamentos: 168, ocupacao: 91 },
    { dayLabel: "Qui 19", agendamentos: 162, ocupacao: 89 },
    { dayLabel: "Sex 20", agendamentos: 174, ocupacao: 93 },
    { dayLabel: "Sáb 21", agendamentos: 96,  ocupacao: 64 },
    { dayLabel: "Dom 22", agendamentos: 32,  ocupacao: 28 },
  ];

  return (
    <Card
      title="Performance da Agenda (Semana)"
      className="w-full bg-[#0d091a] border-white/[0.04]"
      right={
        /* Seletor Dropdown no Topo Direito */
        <div className="relative">
          <select className="appearance-none bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 rounded-lg pl-3 pr-8 py-1 text-xs text-slate-300 font-medium focus:outline-none focus:border-purple-500 transition-colors cursor-pointer">
            <option>Esta semana</option>
            <option>Semana passada</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      }
    >
      {/* Legendas customizadas logo abaixo do Header */}
      <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="w-6 h-1.5 rounded-full bg-[#ff79c6]" />
          <span>Ocupação (%)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-1.5 rounded-full bg-[#bd93f9]" />
          <span>Agendamentos</span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: -5, bottom: 0, left: -20 }}
          >
            <defs>
              {/* Gradiente Roxo/Lilás para as Barras */}
              <linearGradient id="barPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bd93f9" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#6272a4" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#44475a" strokeOpacity={0.12} vertical={false} />

            <XAxis
              dataKey="dayLabel"
              tick={{ fill: "#6272a4", fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: "#44475a", strokeOpacity: 0.2 }}
            />

            {/* EIXO Y ESQUERDO: Ocupação (%) */}
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={[0, 100]}
              tickCount={5}
              tickFormatter={(v) => `${v}%`}
              tick={{ fill: "#6272a4", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
            />

            {/* EIXO Y DIREITO: Agendamentos (Contagem) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 240]}
              tickCount={5}
              tick={{ fill: "#6272a4", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.02)" }}
              contentStyle={{
                background: "#1e1f29",
                border: "1px solid #44475a",
                borderRadius: 12,
                color: "#f8f8f2",
                fontSize: 12,
              }}
            />

            {/* BARRAS: Agendamentos */}
            <Bar
              yAxisId="right"
              dataKey="agendamentos"
              fill="url(#barPurple)"
              radius={[6, 6, 0, 0]}
              maxBarSize={40}
            >
              {/* Rótulo em texto branco DENTRO da barra */}
              <LabelList
                dataKey="agendamentos"
                position="insideTop"
                offset={10}
                fill="#ffffff"
                fontSize={11}
                fontWeight="bold"
              />
            </Bar>

            {/* LINHA: Ocupação */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="ocupacao"
              stroke="#ff79c6"
              strokeWidth={3}
              activeDot={{ r: 6 }}
              dot={{ fill: "#ff79c6", strokeWidth: 2, r: 4 }}
            >
              {/* Rótulo em texto branco ACIMA de cada ponto da linha */}
              <LabelList
                dataKey="ocupacao"
                position="top"
                offset={10}
                fill="#ffffff"
                fontSize={11}
                fontWeight="bold"
                formatter={(value) => `${value}%`}
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}