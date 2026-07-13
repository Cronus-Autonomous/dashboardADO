import { Card } from "./Card";

export function AiAutomationPanel() {
  // Dados fictícios simulando a inteligência artificial em tempo real (como na imagem_040264.png)
  const metrics = [
    {
      id: "conversas",
      label: "CONVERSAS",
      value: "186",
      percentage: "+ 18%",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      glowClass: "bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]",
    },
    {
      id: "agendamentos",
      label: "AGENDAMENTOS IA",
      value: "24",
      percentage: "+ 26%",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      glowClass: "bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]",
    },
    {
      id: "receita",
      label: "RECEITA GERADA",
      value: "R$ 18.450",
      percentage: "+ 37%",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      glowClass: "bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]",
    },
    {
      id: "horas",
      label: "HORAS SALVAS",
      value: "8,4 h",
      percentage: "+ 22%",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      glowClass: "bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]",
    },
  ];

  return (
    <Card
      title="IA & Automações (Hoje)"
      right={
        /* Indicador Online Verde */
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-medium text-emerald-400 tracking-wide">Online</span>
        </div>
      }
      className="w-full bg-[#0d091a] border-white/[0.04]"
    >
      {/* Grid de Métricas */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-1">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="flex flex-col items-center p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm"
          >
            {/* Ícone Container com Glow */}
            <div className={`p-2.5 rounded-xl border flex items-center justify-center mb-3.5 ${metric.glowClass}`}>
              {metric.icon}
            </div>

            {/* Label reduzida */}
            <span className="text-[10px] font-bold text-slate-400 tracking-wider text-center">
              {metric.label}
            </span>

            {/* Valor Principal */}
            <span className="text-[15px] font-bold text-white tracking-tight">
              {metric.value}
            </span>

            {/* Percentual Verde Positivo */}
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
              ↑ {metric.percentage.replace("+ ", "")}
            </span>
          </div>
        ))}
      </div>

      {/* Botão Inferior de Ação Conforme a Imagem */}
      <button className="w-full mt-4 py-3 rounded-xl bg-purple-950/20 hover:bg-purple-950/40 border border-purple-900/30 text-purple-400 hover:text-purple-300 transition-all flex items-center justify-center gap-2 text-xs font-medium group">
        Ver automações ativas
        <svg 
          className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </Card>
  );
}