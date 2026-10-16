import { useState } from "react";
import { 
  DollarSign, 
  TrendingUp, 
  Sparkles, 
  ArrowUpRight, 
  ArrowDownRight,
  Percent,
  Package,
  Users,
  ChevronRight,
  Clock,
  ShoppingBag,
  HandCoins,
} from "lucide-react";

export function EconomicsPage() {
  const [abaAtiva, setAbaAtiva] = useState("Visão Geral");

  return (
    <div className="min-h-screen bg-dracula-bg text-dracula-fg space-y-6 pb-12 text-slate-100 font-sans">
      
      {/* HEADER PRINCIPAL */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-dracula-card p-5 rounded-2xl border border-white/[0.06]">
        <div className="flex items-start gap-4 bg-dracula-card">
          <div className="p-3 rounded-xl bg-dracula-card text-slate-400 border text-slate-400">
            <HandCoins  className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Economics</h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Entenda a rentabilidade de cada serviço, produto e profissional.
            </p>
          </div>
        </div>

        {/* FILTROS DE MÊS E UNIDADE */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-[#0b0616] px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <div>
              <div className="text-[10px] text-slate-400">Mês atual</div>
              <div className="text-xs font-bold text-white">01/05/2025 - 31/05/2025</div>
            </div>
          </div>

          <div className="bg-[#0b0616] px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
            <BuildingIcon className="w-4 h-4 text-purple-400" />
            <div>
              <div className="text-[10px] text-slate-400">Unidade</div>
              <div className="text-xs font-bold text-white">Matriz</div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVEGAÇÃO POR ABAS DA PÁGINA */}
      <div className="flex overflow-x-auto gap-2 border-b border-white/[0.06] pb-3 text-xs scrollbar-none">
        {["Visão Geral", "Serviços", "Profissionais", "Pacotes", "Produtos", "Custos", "Simulador"].map((aba) => (
          <button
            key={aba}
            onClick={() => setAbaAtiva(aba)}
            className={`px-4 py-2 rounded-xl transition-all font-medium whitespace-nowrap cursor-pointer ${
              abaAtiva === aba 
                ? "bg-dracula-card text-purple-300 border border-purple-500/30 shadow-lg shadow-dracula-card" 
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {aba}
          </button>
        ))}
      </div>

      {/* 4 CARDS DE KPIS SUPERIORES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[11px] text-slate-400 font-medium">Receita Total</span>
              <div className="text-xl font-extrabold text-white mt-1">R$ 418.320</div>
            </div>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> 10,14% <span className="text-slate-500 font-normal">vs. mês anterior</span>
            </span>
            {/* Sparkline simplificada em onda */}
            <div className="w-16 h-5 flex items-end gap-1 opacity-70">
              <span className="w-1.5 h-2 bg-purple-400 rounded-t" />
              <span className="w-1.5 h-3 bg-purple-400 rounded-t" />
              <span className="w-1.5 h-2.5 bg-purple-400 rounded-t" />
              <span className="w-1.5 h-4 bg-purple-400 rounded-t" />
              <span className="w-1.5 h-5 bg-purple-300 rounded-t" />
            </div>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[11px] text-slate-400 font-medium">Custo Variável</span>
              <div className="text-xl font-extrabold text-white mt-1">R$ 152.640</div>
            </div>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> 6,8% <span className="text-slate-500 font-normal">vs. mês anterior</span>
            </span>
            <div className="w-16 h-5 flex items-end gap-1 opacity-70">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-t" />
              <span className="w-1.5 h-3.5 bg-indigo-400 rounded-t" />
              <span className="w-1.5 h-2 bg-indigo-400 rounded-t" />
              <span className="w-1.5 h-4 bg-indigo-400 rounded-t" />
              <span className="w-1.5 h-5 bg-indigo-300 rounded-t" />
            </div>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[11px] text-slate-400 font-medium">Margem de Contribuição</span>
              <div className="text-xl font-extrabold text-white mt-1">63,4%</div>
            </div>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> 4,7 p.p. <span className="text-slate-500 font-normal">vs. mês anterior</span>
            </span>
            <div className="w-16 h-5 flex items-end gap-1 opacity-70">
              <span className="w-1.5 h-2 bg-emerald-400 rounded-t" />
              <span className="w-1.5 h-3 bg-emerald-400 rounded-t" />
              <span className="w-1.5 h-3.5 bg-emerald-400 rounded-t" />
              <span className="w-1.5 h-4 bg-emerald-400 rounded-t" />
              <span className="w-1.5 h-5 bg-emerald-300 rounded-t" />
            </div>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-dracula-card p-4 rounded-2xl border border-white/[0.06] relative overflow-hidden flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[11px] text-slate-400 font-medium">Lucro Estimado</span>
              <div className="text-xl font-extrabold text-white mt-1">R$ 120.850</div>
            </div>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-rose-400 font-medium flex items-center gap-1">
              <ArrowDownRight className="w-3 h-3" /> 8,5% <span className="text-slate-500 font-normal">vs. mês anterior</span>
            </span>
            <div className="w-16 h-5 flex items-end gap-1 opacity-70">
              <span className="w-1.5 h-5 bg-purple-400 rounded-t" />
              <span className="w-1.5 h-4 bg-purple-400 rounded-t" />
              <span className="w-1.5 h-3 bg-purple-400 rounded-t" />
              <span className="w-1.5 h-2 bg-purple-400 rounded-t" />
              <span className="w-1.5 h-1.5 bg-purple-300 rounded-t" />
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL (DIVIDIDO EM 8 + 4 COLUNAS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* COLUNA DA ESQUERDA (8 COLUNAS) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* TABELA DE RENTABILIDADE POR SERVIÇO & MARGEM POR CATEGORIA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Tabela de Serviços (7 colunas) */}
            <div className="lg:col-span-7 bg-dracula-card p-5 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-white">Rentabilidade por Serviço</h3>
                  <p className="text-[11px] text-slate-400">Veja quais serviços mais contribuem para o resultado da unidade.</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px]">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-400 font-medium">
                        <th className="pb-2">Serviço</th>
                        <th className="pb-2">Preço médio</th>
                        <th className="pb-2">Custo variável</th>
                        <th className="pb-2">Comissão</th>
                        <th className="pb-2 text-center">Margem</th>
                        <th className="pb-2 text-right">Lucro est.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {[
                        { name: "Toxina Botulínica", price: "R$ 2.800,00", cost: "R$ 620,00", com: "20%", margem: "58,6%", profit: "R$ 1.245,00", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=80&auto=format&fit=crop&q=80" },
                        { name: "Bioestimulador de Colágeno", price: "R$ 3.500,00", cost: "R$ 980,00", com: "25%", margem: "52,3%", profit: "R$ 1.376,00", img: "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?w=80&auto=format&fit=crop&q=80" },
                        { name: "Design de Sobrancelhas", price: "R$ 89,00", cost: "R$ 25,40", com: "30%", margem: "49,3%", profit: "R$ 35,10", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=80&auto=format&fit=crop&q=80" },
                        { name: "Limpeza de Pele", price: "R$ 280,00", cost: "R$ 85,00", com: "25%", margem: "51,8%", profit: "R$ 112,00", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=80&auto=format&fit=crop&q=80" },
                        { name: "Harmonização Glútea", price: "R$ 11.999,00", cost: "R$ 3.800,00", com: "20%", margem: "60,4%", profit: "R$ 4.780,00", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=80&auto=format&fit=crop&q=80" },
                      ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02]">
                          <td className="py-2.5 font-bold text-white flex items-center gap-2">
                            <img src={item.img} alt="" className="w-6 h-6 rounded-full object-cover shrink-0 border border-white/10" />
                            <span className="truncate max-w-[100px]">{item.name}</span>
                          </td>
                          <td className="py-2.5 text-slate-300">{item.price}</td>
                          <td className="py-2.5 text-slate-300">{item.cost}</td>
                          <td className="py-2.5 text-slate-300">{item.com}</td>
                          <td className="py-2.5 text-center">
                            <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold border border-emerald-500/20">
                              {item.margem}
                            </span>
                          </td>
                          <td className="py-2.5 text-right font-medium text-slate-200">{item.profit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <button className="mt-4 text-xs text-purple-400 hover:text-purple-300 font-medium text-left">
                Ver todos os serviços →
              </button>
            </div>

            {/* Margem por Categoria (5 colunas) */}
            <div className="lg:col-span-5 bg-dracula-card p-5 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-white">Margem por Categoria</h3>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400" /> Margem</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-600" /> Receita</span>
                  </div>
                </div>

                {/* Gráfico de Colunas Duplas */}
                <div className="h-44 flex items-end justify-between px-2 pt-6 border-b border-white/10 gap-3">
                  {[
                    { cat: "Facial", m: "62%", h1: "62%", h2: "85%", rec: "R$ 168k" },
                    { cat: "Corporal", m: "58%", h1: "58%", h2: "65%", rec: "R$ 124k" },
                    { cat: "Olhar", m: "55%", h1: "55%", h2: "45%", rec: "R$ 86k" },
                    { cat: "Capilar", m: "49%", h1: "49%", h2: "35%", rec: "R$ 72k" },
                  ].map((col, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                      <span className="text-[9px] font-bold text-purple-300 mb-1">{col.m}</span>
                      <div className="w-full flex items-end justify-center gap-1 h-full">
                        <div className="w-1/2 bg-purple-500 rounded-t" style={{ height: col.h1 }} />
                        <div className="w-1/2 bg-indigo-900/60 rounded-t" style={{ height: col.h2 }} />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-2">{col.cat}</span>
                      <span className="text-[9px] text-slate-400">{col.rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ANÁLISE DE CUSTOS & TOP 5 PRODUTOS/SERVIÇOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Análise de Custos (Rosca) */}
            <div className="lg:col-span-6 bg-dracula-card p-5 rounded-2xl border border-white/[0.06]">
              <h3 className="text-sm font-bold text-white mb-1">Análise de Custos</h3>
              <p className="text-[11px] text-slate-400 mb-4">Distribuição dos custos no período.</p>

              <div className="flex items-center gap-4">
                {/* Donut de Custos */}
                <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#2e1065" strokeWidth="4" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#a855f7" strokeWidth="4" strokeDasharray="42.7, 100" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="18.5, 100" strokeDashoffset="-42.7" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="16.3, 100" strokeDashoffset="-61.2" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="12.2, 100" strokeDashoffset="-77.5" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="10.3, 100" strokeDashoffset="-89.7" />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-[9px] text-slate-400 block">Total de Custos</span>
                    <span className="text-xs font-bold text-white">R$ 152.640</span>
                  </div>
                </div>

                {/* Legenda dos Custos */}
                <div className="space-y-1.5 text-[10px] flex-1">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-300"><span className="w-2 h-2 rounded-full bg-purple-500" /> Comissões</span>
                    <span className="text-slate-400">42,7%</span>
                    <span className="font-bold text-white">R$ 65.140</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-300"><span className="w-2 h-2 rounded-full bg-indigo-500" /> Insumos</span>
                    <span className="text-slate-400">18,5%</span>
                    <span className="font-bold text-white">R$ 28.240</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-300"><span className="w-2 h-2 rounded-full bg-blue-500" /> Despesas Fixas</span>
                    <span className="text-slate-400">16,3%</span>
                    <span className="font-bold text-white">R$ 24.900</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-300"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Impostos e Taxas</span>
                    <span className="text-slate-400">12,2%</span>
                    <span className="font-bold text-white">R$ 18.640</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-300"><span className="w-2 h-2 rounded-full bg-amber-500" /> Outros</span>
                    <span className="text-slate-400">10,3%</span>
                    <span className="font-bold text-white">R$ 15.720</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 5 Produtos e Serviços por Receita */}
            <div className="lg:col-span-6 bg-dracula-card p-5 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white mb-4">Top 5 Produtos e Serviços por Receita</h3>
                
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Toxina Botulínica", val: "R$ 68.400", pct: "16,4%", bar: "82%", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=80&auto=format&fit=crop&q=80" },
                    { rank: 2, name: "Bioestimulador de Colágeno", val: "R$ 56.200", pct: "13,4%", bar: "68%", img: "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?w=80&auto=format&fit=crop&q=80" },
                    { rank: 3, name: "Pacote Design (6un)", val: "R$ 42.800", pct: "10,2%", bar: "52%", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=80&auto=format&fit=crop&q=80" },
                    { rank: 4, name: "Limpeza de Pele", val: "R$ 38.600", pct: "9,2%", bar: "45%", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=80&auto=format&fit=crop&q=80" },
                    { rank: 5, name: "Preenchimento Labial", val: "R$ 31.500", pct: "7,5%", bar: "38%", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=80&auto=format&fit=crop&q=80" },
                  ].map((item) => (
                    <div key={item.rank} className="flex items-center gap-3 text-xs">
                      <span className="text-slate-400 font-bold text-[11px] w-3">{item.rank}</span>
                      <img src={item.img} alt="" className="w-7 h-7 rounded-full object-cover shrink-0 border border-white/10" />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-white truncate">{item.name}</span>
                          <span className="font-bold text-slate-200">{item.val}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex items-center">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: item.bar }} />
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 w-10 text-right">{item.pct}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-4 text-xs text-purple-400 hover:text-purple-300 font-medium text-left">
                Ver relatório completo →
              </button>
            </div>

          </div>

          {/* SIMULADOR DE CENÁRIOS (4 CARDS DE ATALHOS) */}
          <div className="bg-dracula-card p-5 rounded-2xl border border-white/[0.06]">
            <h3 className="text-sm font-bold text-white mb-1">Simulador de Cenários</h3>
            <p className="text-[11px] text-slate-400 mb-4">Teste decisões e veja o impacto no resultado da unidade.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 w-fit mb-2"><Percent className="w-4 h-4" /></div>
                <h4 className="text-xs font-bold text-white">Descontos</h4>
                <p className="text-[10px] text-slate-400 mt-1">Qual é o limite seguro para negociar sem comprometer a margem?</p>
                <span className="text-[10px] text-purple-400 font-medium mt-2 inline-block">Simular →</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit mb-2"><TrendingUp className="w-4 h-4" /></div>
                <h4 className="text-xs font-bold text-white">Reajuste de Preços</h4>
                <p className="text-[10px] text-slate-400 mt-1">Quanto posso aumentar o preço e qual será o impacto na receita?</p>
                <span className="text-[10px] text-purple-400 font-medium mt-2 inline-block">Simular →</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 w-fit mb-2"><Package className="w-4 h-4" /></div>
                <h4 className="text-xs font-bold text-white">Pacotes e Protocolos</h4>
                <p className="text-[10px] text-slate-400 mt-1">Monte combinações e veja a margem de cada opção.</p>
                <span className="text-[10px] text-purple-400 font-medium mt-2 inline-block">Simular →</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit mb-2"><Users className="w-4 h-4" /></div>
                <h4 className="text-xs font-bold text-white">Comissões e Bonificações</h4>
                <p className="text-[10px] text-slate-400 mt-1">Encontre o modelo ideal para atrair e reter seus profissionais.</p>
                <span className="text-[10px] text-purple-400 font-medium mt-2 inline-block">Simular →</span>
              </div>
            </div>
          </div>

        </div>

        {/* COLUNA DA DIREITA: RECOMENDAÇÕES DA IA & AÇÕES RÁPIDAS (4 COLUNAS) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* RECOMENDAÇÕES DA IA */}
          <div className="bg-dracula-card p-5 rounded-2xl border border-white/[0.06] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> Recomendações da IA
              </h3>
              <span className="bg-purple-500/20 text-purple-300 text-[9px] px-2 py-0.5 rounded-full font-bold">4 novas</span>
            </div>

            {/* Rec 1 */}
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 shrink-0 mt-0.5"><Clock className="w-3.5 h-3.5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-white">Aumente o preço do Bioestimulador</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Com base na demanda e na margem atual, sugerimos um reajuste de 8% para manter a rentabilidade.
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-between w-full pt-1 text-[10px] text-purple-400 hover:text-purple-300 font-medium">
                <span>Simular reajuste</span> <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Rec 2 */}
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 shrink-0 mt-0.5"><Percent className="w-3.5 h-3.5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-white">Desconto máximo no Pacote Design</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    O desconto não deve ultrapassar 15% para manter a margem de 40%.
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-between w-full pt-1 text-[10px] text-purple-400 hover:text-purple-300 font-medium">
                <span>Ver simulação</span> <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Rec 3 */}
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 shrink-0 mt-0.5"><Users className="w-3.5 h-3.5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-white">Rebalancear comissões da Toxina Botulínica</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    A comissão atual reduz a margem abaixo do ideal. Sugerimos ajustar para 18%.
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-between w-full pt-1 text-[10px] text-purple-400 hover:text-purple-300 font-medium">
                <span>Ver proposta</span> <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Rec 4 */}
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 shrink-0 mt-0.5"><ShoppingBag className="w-3.5 h-3.5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-white">Campanha de capilar com baixo retorno</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Custo de aquisição alto e margem abaixo do esperado. Recomendamos pausar ou ajustar a oferta.
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-between w-full pt-1 text-[10px] text-purple-400 hover:text-purple-300 font-medium">
                <span>Ver análise</span> <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* AÇÕES RÁPIDAS */}
          <div className="bg-dracula-card p-5 rounded-2xl border border-white/[0.06] space-y-3">
            <h3 className="text-xs font-bold text-white mb-2">Ações rápidas</h3>

            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 text-left transition-all flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-bold text-white">Simulador de Descontos</span>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white" />
              </button>

              <button className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 text-left transition-all flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-bold text-white">Simulador de Reajuste</span>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white" />
              </button>

              <button className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 text-left transition-all flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-bold text-white">Construtor de Pacotes</span>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white" />
              </button>

              <button className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 text-left transition-all flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="text-[10px] font-bold text-white">Simulador de Comissões</span>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

function BuildingIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
  );
}