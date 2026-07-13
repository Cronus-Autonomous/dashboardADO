import { Card } from "./Card";

interface Professional {
  rank: number;
  name: string;
  revenue: string;
  growth: string;
  score: string;
  scoreType: "high" | "medium";
  avatar: string;
}

export function FeaturedProfessionals() {
  // Dados simulados fiéis aos da imagem_056b7d.png
  const professionals: Professional[] = [
    {
      rank: 1,
      name: "Dra. Camila Rocha",
      revenue: "R$ 48.620",
      growth: "12%",
      score: "C96",
      scoreType: "high",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    },
    {
      rank: 3,
      name: "Ana Clara Lima",
      revenue: "R$ 31.780",
      growth: "6%",
      score: "G89",
      scoreType: "high",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    },
    {
      rank: 4,
      name: "Beatriz Oliveira",
      revenue: "R$ 26.950",
      growth: "4%",
      score: "CP6",
      scoreType: "medium",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=150&auto=format&fit=crop",
    },
    {
      rank: 5,
      name: "Mariana Alves",
      revenue: "R$ 24.130",
      growth: "3%",
      score: "G85",
      scoreType: "medium",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    },
  ];

  return (
    <Card
      title="Profissionais em Destaque"
      className="w-full bg-[#0d091a] border-white/[0.04]"
      right={
        /* Seletor dropdown do topo direito */
        <div className="relative">
          <select className="appearance-none bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 rounded-lg pl-3 pr-8 py-1 text-xs text-slate-300 font-medium focus:outline-none focus:border-purple-500 transition-colors cursor-pointer">
            <option>Este mês</option>
            <option>Mês passado</option>
            <option>Últimos 90 dias</option>
          </select>
          {/* Ícone de Seta customizado do Select */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      }
    >
      {/* Lista de Profissionais */}
      <div className="flex flex-col mt-2">
        {professionals.map((prof) => (
          <div
            key={prof.rank}
            className="flex items-center justify-between py-3 border-b border-white/[0.03] last:border-0 hover:bg-white/[0.01] px-1 rounded-lg transition-colors group"
          >
            {/* Esquerda: Rank, Avatar e Dados */}
            <div className="flex items-center gap-3">
              {/* Número do Rank */}
              <span className="w-5 text-sm font-semibold text-slate-500 group-hover:text-purple-400 transition-colors text-center">
                {prof.rank}
              </span>

              {/* Avatar da Profissional */}
              <img
                src={prof.avatar}
                alt={prof.name}
                className="w-10 h-10 rounded-full object-cover border border-white/10 shadow-inner"
              />

              {/* Nome e Faturamento */}
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white tracking-wide">
                  {prof.name}
                </span>
                <span className="text-xs font-medium text-slate-300 mt-0.5">
                  {prof.revenue}
                </span>
              </div>
            </div>

            {/* Direita: Crescimento e Tag de Score */}
            <div className="flex items-center gap-4">
              {/* Percentual de Crescimento Verde */}
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                ↑ {prof.growth}
              </span>

              {/* Tag de Score (Verde ou Laranja conforme scoreType) */}
              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border tracking-wide min-w-[38px] text-center ${
                  prof.scoreType === "high"
                    ? "bg-emerald-500/5 border-emerald-500/30 text-emerald-400"
                    : "bg-amber-500/5 border-amber-500/30 text-amber-400"
                }`}
              >
                {prof.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de Rodapé */}
      <button className="w-full mt-4 py-3 rounded-xl bg-purple-950/20 hover:bg-purple-950/40 border border-purple-900/30 text-purple-400 hover:text-purple-300 transition-all flex items-center justify-center gap-2 text-xs font-medium group">
        Ver ranking completo
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