import { useState } from "react";
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Sparkles, 
  ArrowUpRight, 
  Calendar, 
  Zap,
  Award
} from "lucide-react";

export function MetasFinanceirasPage() {
  const [metaInput, setMetaInput] = useState("100.000,00");
  const [periodo, setPeriodo] = useState("neste mês");

  return (
    <div className="space-y-6 pb-12 text-slate-100">
      
      {/* HEADER DA PÁGINA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-dracula-card p-6 rounded-2xl border border-white/[0.06] backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-dracula-card text-slate-400 border text-slate-400">
            <Target className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              Metas Financeiras
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Defina seu objetivo, e a IA te mostra o caminho mais eficiente para alcançá-lo.
            </p>
          </div>
        </div>

        {/* INPUT DE CONFIGURAÇÃO DE META */}
        <div className="flex flex-wrap items-center gap-3 bg-[#0b0616] p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 px-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Quero faturar</span>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-xs text-slate-400">R$</span>
              <input 
                type="text" 
                value={metaInput}
                onChange={(e) => setMetaInput(e.target.value)}
                className="bg-black/40 border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-sm font-bold text-white w-32 focus:outline-none focus:border-dracula"
              />
            </div>
          </div>

          <select 
            value={periodo} 
            onChange={(e) => setPeriodo(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-purple-500"
          >
            <option value="neste mês">neste mês</option>
            <option value="próximo trimestre">próximo trimestre</option>
          </select>

          <button className="flex items-center gap-2 bg-gradient-to-r bg-dracula-purple/5 hover:bg-dracula-purple/5 hover:bg-dracula-purple/10 text-white font-medium text-xs px-4 py-2 rounded-lg shadow-sm shadow-purple-900/30 transition-all cursor-pointer">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Montar meu plano</span>
          </button>
        </div>
      </div>

      {/* CARD DE DESTAQUE: META DEFINIDA */}
      <div className="relative overflow-hidden rounded-2xl border-dracula-purple/40 bg-dracula-purple/5 p-6 border shadow-xl flex items-center justify-between">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 text-purple-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Meta definida!</h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Vamos criar um plano personalizado com base na sua unidade, histórico e capacidade de atendimento.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs text-purple-300 font-medium bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
            <Zap className="w-3.5 h-3.5" /> Sofia Sincronizada
          </div>
      </div>

      {/* 5 CARDS DE KPIS SUPERIORES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-[11px] text-slate-400 font-medium">Faturamento Atual (mês)</span>
            <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><ClockIcon className="w-4 h-4" /></span>
          </div>
          <div className="text-lg font-bold text-white mt-2">R$ 58.420</div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-1 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" /> 12,4% <span className="text-slate-400 font-normal">vs. mês anterior</span>
          </div>
          <div className="mt-3 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full w-[58%]" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-[11px] text-slate-400 font-medium">Meta do Mês</span>
            <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400"><Calendar className="w-4 h-4" /></span>
          </div>
          <div className="text-lg font-bold text-white mt-2">R$ 100.000</div>
          <div className="mt-4 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Progresso</span>
            <span className="text-blue-400 font-bold">58%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full w-[58%]" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-[11px] text-slate-400 font-medium">Faturamento Necessário</span>
            <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><Target className="w-4 h-4" /></span>
          </div>
          <div className="text-lg font-bold text-white mt-2">R$ 41.580</div>
          <div className="text-[11px] text-purple-300 mt-1">para atingir a meta</div>
        </div>

        {/* Card 4 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-[11px] text-slate-400 font-medium">Vendas Adicionais Sugeridas</span>
            <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400"><TrendingUp className="w-4 h-4" /></span>
          </div>
          <div className="text-lg font-bold text-white mt-2">+ 28</div>
          <div className="text-[11px] text-slate-400 mt-1">unidades / atendimentos</div>
        </div>

        {/* Card 5 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-[11px] text-slate-400 font-medium">Ticket Médio Sugerido</span>
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400"><DollarSign className="w-4 h-4" /></span>
          </div>
          <div className="text-lg font-bold text-white mt-2">R$ 3.250</div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-1 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" /> 18% <span className="text-slate-400 font-normal">vs. atual</span>
          </div>
        </div>
      </div>

      {/* SEÇÃO CENTRAL: GRÁFICO DE PROJEÇÃO E RESUMO DO PLANO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* GRÁFICO (8 COLUNAS) */}
        <div className="lg:col-span-8 bg-dracula-card p-6 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-sm font-bold text-white">Plano de Ação para Atingir a Meta</h3>
                <p className="text-[11px] text-slate-400">Projeção diária com inteligência preditiva</p>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20 text-purple-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" /> Sofia Recomenda
              </div>
            </div>

            {/* ABAS */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-white/[0.06] pb-3 text-xs">
              <button className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-medium shadow">Projeção de Faturamento</button>
              <button className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors">Volume de Vendas</button>
              <button className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors">Mix de Serviços</button>
              <button className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors">Impacto no Lucro</button>
            </div>

            {/* LEGENDA */}
            <div className="flex items-center gap-6 text-[11px] text-slate-400 mb-6">
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Faturamento atual</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-purple-600" /> Faturamento projetado</div>
              <div className="flex items-center gap-2"><span className="w-4 h-0.5 border-t border-dashed border-emerald-400" /> Meta</div>
            </div>

            {/* GRÁFICO EM BARRAS MOCKADAS */}
            <div className="h-48 w-full flex items-end justify-between gap-2 pt-4 px-2 border-b border-white/10 relative">
              {/* Linha de Meta Pontilhada */}
              <div className="absolute top-10 inset-x-0 border-t border-dashed border-emerald-400/40 z-0 flex justify-end">
                <span className="text-[9px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded -translate-y-3">Meta R$ 100 mil</span>
              </div>

              {[
                { date: "01/05", h: "35%", val: "22k" },
                { date: "05/05", h: "42%", val: "31k" },
                { date: "10/05", h: "48%", val: "40k" },
                { date: "15/05", h: "55%", val: "49k" },
                { date: "20/05", h: "64%", val: "62k" },
                { date: "25/05", h: "75%", val: "78k" },
                { date: "31/05", h: "92%", val: "92k" },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 z-10 group">
                  <div className="w-full bg-purple-900/40 hover:bg-purple-500/80 rounded-t-lg transition-all relative flex items-end justify-center pb-1" style={{ height: item.h }}>
                    <div className="w-full bg-gradient-to-t from-purple-700 to-indigo-500 rounded-t-md h-3/4" />
                  </div>
                  <span className="text-[10px] text-slate-400 group-hover:text-white">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RESUMO DO PLANO (4 COLUNAS) */}
        <div className="lg:col-span-4 bg-dracula-card p-6 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white mb-4">Resumo do Plano</h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                <span className="text-slate-400 flex items-center gap-2"><Target className="w-4 h-4 text-purple-400" /> Faturamento necessário</span>
                <span className="font-bold text-white">R$ 41.580</span>
              </div>
              <div className="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                <span className="text-slate-400 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-purple-400" /> Vendas adicionais sugeridas</span>
                <span className="font-bold text-white">+ 28</span>
              </div>
              <div className="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                <span className="text-slate-400 flex items-center gap-2"><DollarSign className="w-4 h-4 text-purple-400" /> Ticket médio ideal</span>
                <span className="font-bold text-white">R$ 3.250</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-slate-400 flex items-center gap-2"><Calendar className="w-4 h-4 text-purple-400" /> Período de execução</span>
                <span className="font-bold text-emerald-400">Até 31/05</span>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2 cursor-pointer">
            <span>Ver plano completo</span> <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* SEÇÃO INFERIOR: PRODUTOS RECOMENDADOS & CAMPANHAS & ACOMPANHAMENTO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* PRODUTOS E SERVIÇOS RECOMENDADOS (6 COLUNAS) */}
        <div className="lg:col-span-6 bg-dracula-card p-6 rounded-2xl border border-white/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Produtos e Serviços Recomendados <span className="bg-purple-500/20 text-purple-300 text-[10px] px-2 py-0.5 rounded-full">IA</span>
              </h3>
              <p className="text-[11px] text-slate-400">Oportunidades de alta conversão para bater a meta</p>
            </div>
          </div>

          <div className="flex gap-2 mb-4 text-xs">
            <button className="px-3 py-1 rounded-lg bg-purple-600 text-white font-medium">Mais rentáveis</button>
            <button className="px-3 py-1 rounded-lg text-slate-400 hover:text-white">Maior demanda</button>
            <button className="px-3 py-1 rounded-lg text-slate-400 hover:text-white">Alto ticket</button>
          </div>

          <div className="space-y-3">
            {[
              { title: "Bioestimulador de Colágeno", cat: "Facial • 3 sessões", ticket: "R$ 3.250", qtt: "8", impact: "R$ 26.000", pct: "↑ 26%" },
              { title: "Harmonização Glútea", cat: "Corporal • 1 sessão", ticket: "R$ 4.800", qtt: "6", impact: "R$ 28.800", pct: "↑ 18%" },
              { title: "Limpeza de Pele Premium", cat: "Facial • 1 sessão", ticket: "R$ 1.280", qtt: "7", impact: "R$ 8.960", pct: "↑ 12%" },
            ].map((prod, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/[0.04] hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center font-bold text-purple-300 text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{prod.title}</h4>
                    <p className="text-[10px] text-slate-400">{prod.cat}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-white">{prod.impact}</div>
                  <div className="text-[10px] text-emerald-400">{prod.pct} impacto</div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 text-center text-xs text-purple-400 hover:text-purple-300 font-medium pt-2">
            Ver todos os produtos e serviços →
          </button>
        </div>

        {/* CAMPANHAS SUGERIDAS (6 COLUNAS) */}
        <div className="lg:col-span-6 bg-dracula-card p-6 rounded-2xl border border-white/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Campanhas Sugeridas <span className="bg-purple-500/20 text-purple-300 text-[10px] px-2 py-0.5 rounded-full">IA</span>
              </h3>
              <p className="text-[11px] text-slate-400">Ative campanhas prontas validadas por conversão</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { title: "Combo Skin Glow", desc: "Limpeza de pele + Hidratação profunda + Máscara LED", price: "R$ 1.990", tag: "Alta conversão" },
              { title: "Corpo em Forma", desc: "5 sessões de criolipólise + 5 drenagens", price: "R$ 8.900", tag: "Alta conversão" },
              { title: "Renove seu olhar", desc: "Toxina Botulínica + Preenchimento de olheiras", price: "R$ 3.600", tag: "Média conversão" },
            ].map((camp, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/[0.04] hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 border border-white/10">
                    <img src={`https://res.cloudinary.com/xiupvhfs/image/upload/v1792108${375 + idx}/economics-screen.png`} alt="" className="w-full h-full object-cover opacity-80" onError={(e)=>{(e.target as HTMLElement).style.display = 'none'}} />
                    <Sparkles className="w-5 h-5 text-purple-400 absolute" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white">{camp.title}</h4>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">{camp.tag}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 truncate max-w-[200px]">{camp.desc}</p>
                    <span className="text-[11px] text-purple-300 font-medium">Sugerido: {camp.price}</span>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white text-xs font-medium transition-all">
                  Aplicar
                </button>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 text-center text-xs text-purple-400 hover:text-purple-300 font-medium pt-2">
            Ver todas as campanhas →
          </button>
        </div>

      </div>

    </div>
  );
}

function ClockIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
}