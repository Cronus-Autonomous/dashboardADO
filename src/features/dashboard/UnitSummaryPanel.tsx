import { Card } from "./Card";

export function UnitSummaryPanel() {
  const indicators = [
    {
      label: "PACIENTES ATIVOS",
      value: "1.836",
      badge: <span className="text-emerald-400 text-xs font-semibold flex items-center gap-0.5">↑ 6,2%</span>,
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    },
    {
      label: "NOVOS PACIENTES",
      value: "186",
      badge: <span className="text-emerald-400 text-xs font-semibold flex items-center gap-0.5">↑ 8,4%</span>,
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1h-12v-1z" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    },
    {
      label: "PACOTES VENCENDO",
      value: "312",
      badge: <span className="px-2 py-0.5 text-[10px] font-medium text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-md">Atenção</span>,
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    },
    {
      label: "NO SHOW",
      value: "4,8%",
      badge: <span className="text-emerald-400 text-xs font-semibold flex items-center gap-0.5">↓ -0,7 pp</span>,
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    },
    {
      label: "CANCELAMENTOS",
      value: "2,3%",
      badge: <span className="text-emerald-400 text-xs font-semibold flex items-center gap-0.5">↓ -0,4 pp</span>,
      icon: (
        <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-rose-500/20 shadow-[0_0_12px_rgba(244,63,94,0.15)]",
    },
    {
      label: "TEMPO P/ ATEND.",
      value: "1,8 min",
      badge: <span className="text-emerald-400 text-xs font-semibold flex items-center gap-0.5">↓ -0,3 min</span>,
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]",
    },
    {
      label: "PROFISSIONAIS",
      value: "12",
      badge: <span className="text-slate-500 font-bold">—</span>,
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-pink-500/20 shadow-[0_0_12px_rgba(236,72,153,0.15)]",
    },
    {
      label: "SALAS ATIVAS",
      value: "6",
      badge: <span className="text-slate-500 font-bold">—</span>,
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    },
    {
      label: "HORAS DISPONÍVEIS",
      value: "182 h",
      badge: <span className="text-emerald-400 text-xs font-semibold flex items-center gap-0.5">↑ 6%</span>,
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      glowClass: "bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    },
  ];

  return (
    <Card
      title="Resumo da Unidade"
      subtitle="Indicadores chave"
      right={
        /* Select Dropdown Estilizado da Imagem */
        <div className="relative">
          <select className="appearance-none bg-[#141221] text-xs text-slate-300 pl-3 pr-8 py-1.5 rounded-lg border border-white/[0.08] focus:outline-none focus:border-purple-500/50 cursor-pointer font-medium">
            <option>Hoje</option>
            <option>Este Mês</option>
          </select>
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      }
      className="w-full bg-[#0b0716] border-white/[0.04]"
    >
      {/* Grid de Alta Densidade 3x3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {indicators.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-6 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all hover:bg-white/[0.03]"
          >
            {/* Bloco Esquerdo: Ícone + Dados */}
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg border flex items-center justify-center shrink-0 ${item.glowClass}`}>
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase truncate">
                  {item.label}
                </span>
                <span className="text-xl font-bold text-white tracking-tight mt-0.5">
                  {item.value}
                </span>
              </div>
            </div>

            {/* Bloco Direito: Badge / Indicador de Mudança */}
            <div className="shrink-0 pl-2">
              {item.badge}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}