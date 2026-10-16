import { useState } from "react";
import { 
  Calculator, 
  Sparkles, 
  AlertTriangle, 
  Package, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  Save,
} from "lucide-react";

export function SimuladorDescontoPage() {
  // 1. Estados dos Parâmetros de Entrada
  const [servico, setServico] = useState("Toxina Botulínica");
  const [precoTabela, setPrecoTabela] = useState(2800);
  const [descontoPct, setDescontoPct] = useState(15);
  
  // Parâmetros econômicos
  const [custoFixo, setCustoFixo] = useState(180);
  const [comissaoPct, setComissaoPct] = useState(20);
  const [margemMinima, setMargemMinima] = useState(30);
  const [impostosPct, setImpostosPct] = useState(5);
  const [taxaParcelamentoPct, setTaxaParcelamentoPct] = useState(2.5);
  const [limiteAprovacao, setLimiteAprovacao] = useState(20);

  // Modo Especialista
  const [modoEspecialista, setModoEspecialista] = useState(true);

  // 2. Cálculos em tempo real
  const valorDesconto = (precoTabela * descontoPct) / 100;
  const precoFinal = precoTabela - valorDesconto;

  const valorComissao = (precoFinal * comissaoPct) / 100;
  const valorImpostos = (precoFinal * impostosPct) / 100;
  const valorTaxaCartao = (precoFinal * taxaParcelamentoPct) / 100;

  const custoVariavelTotal = valorComissao + valorImpostos + valorTaxaCartao + 400; // 400 de insumos base
  const contribuicaoVenda = precoFinal - custoVariavelTotal;
  const margemContribuicaoPct = precoFinal > 0 ? (contribuicaoVenda / precoFinal) * 100 : 0;
  const lucroEstimadoVenda = contribuicaoVenda - custoFixo;

  // Projeções mensais (assumindo volume de 25 atendimentos/mês)
  const volumeAtendimentos = 25;
  const lucroTotalSemDesconto = (precoTabela - (precoTabela * (comissaoPct + impostosPct + taxaParcelamentoPct)/100 + 400) - custoFixo) * volumeAtendimentos;
  const lucroTotalComDesconto = lucroEstimadoVenda * volumeAtendimentos;
  const perdaEstimadaLucro = lucroTotalSemDesconto - lucroTotalComDesconto;
  const quedaLucroPct = lucroTotalSemDesconto > 0 ? (perdaEstimadaLucro / lucroTotalSemDesconto) * 100 : 0;

  return (
    <div className="space-y-6 pb-12 text-slate-100 font-sans">
      
      {/* HEADER PRINCIPAL */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-dracula-card p-5 rounded-2xl border border-white/[0.06] backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-dracula-card text-slate-400 border text-slate-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white tracking-tight">Simulador de Descontos</h1>
              <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full font-medium">Cenário atual</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Descubra o limite ideal de desconto para manter a rentabilidade da sua unidade.
            </p>
          </div>
        </div>

        {/* CONTROLE MODO ESPECIALISTA */}
        <div className="flex items-center gap-3 bg-[#0b0616] px-4 py-2 rounded-xl border border-white/10">
          <div>
            <div className="text-xs font-semibold text-white">Modo especialista</div>
            <div className="text-[10px] text-slate-400">Exibe todos os parâmetros financeiros</div>
          </div>
          <button 
            type="button"
            onClick={() => setModoEspecialista(!modoEspecialista)}
            className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${modoEspecialista ? "bg-purple-600 justify-end" : "bg-slate-700 justify-start"}`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-md" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* COLUNA DA ESQUERDA: FORMULÁRIOS E RESULTADOS (8 COLUNAS) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* SEÇÃO 1: SELECIONE O SERVIÇO */}
          <div className="bg-dracula-card p-5 rounded-2xl border border-white/[0.06] space-y-4">
            <h2 className="text-xs font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
              <span className="text-purple-400">1.</span> Selecione o serviço
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              {/* Select de Serviço */}
              <div className="sm:col-span-5 bg-black/40 p-2.5 rounded-xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 shrink-0 overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&auto=format&fit=crop&q=80" alt="Serviço" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <select 
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer truncate"
                  >
                    <option value="Toxina Botulínica" className="bg-[#0b0616]">Toxina Botulínica</option>
                    <option value="Preenchimento Labial" className="bg-[#0b0616]">Preenchimento Labial</option>
                    <option value="Bioestimulador de Colágeno" className="bg-[#0b0616]">Bioestimulador de Colágeno</option>
                  </select>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-medium inline-block mt-0.5">Alta rentabilidade</span>
                </div>
              </div>

              {/* Preço de Tabela */}
              <div className="sm:col-span-3 bg-black/40 p-3 rounded-xl border border-white/10 flex flex-col justify-center">
                <span className="text-[10px] text-slate-400 font-medium">Preço de tabela</span>
                <span className="text-sm font-bold text-white">R$ {precoTabela.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>

              {/* Slider de Desconto */}
              <div className="sm:col-span-4 bg-black/40 p-3 rounded-xl border border-white/10 flex flex-col justify-center">
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                  <span>Desconto desejado</span>
                  <span className="text-purple-300 font-bold text-xs">{descontoPct}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  value={descontoPct} 
                  onChange={(e) => setDescontoPct(Number(e.target.value))}
                  className="w-full accent-purple-500 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* SEÇÃO 2: PARÂMETROS ECONÔMICOS */}
          {modoEspecialista && (
            <div className="bg-dracula-card p-5 rounded-2xl border border-white/[0.06] space-y-4">
              <h2 className="text-xs font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
                <span className="text-purple-400">2.</span> Parâmetros econômicos
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Custo fixo por atendimento</span> <HelpCircle className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-white mt-1">R$ {custoFixo.toFixed(2)}</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">(insumos, estrutura, tempo)</div>
                </div>

                <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Comissão do profissional</span> <HelpCircle className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{comissaoPct}%</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">(sobre o valor da venda)</div>
                </div>

                <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Margem mínima configurada</span> <HelpCircle className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{margemMinima}%</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">(abaixo disso, não é recomendado)</div>
                </div>

                <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Impostos e taxas</span> <HelpCircle className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{impostosPct}%</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">(ISS, taxas administrativas, etc.)</div>
                </div>

                <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Taxa de parcelamento</span> <HelpCircle className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{taxaParcelamentoPct}%</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">(custo da operadora de cartão)</div>
                </div>

                <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Limite de aprovação</span> <HelpCircle className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{limiteAprovacao}%</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">Desconto máximo para aprovação</div>
                </div>
              </div>
            </div>
          )}

          {/* SEÇÃO 3: RESULTADO DA SIMULAÇÃO */}
          <div className="bg-dracula-card p-5 rounded-2xl border border-white/[0.06] space-y-5">
            <h2 className="text-xs font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
              <span className="text-purple-400">3.</span> Resultado da simulação
            </h2>

            {/* CARDS DE INDICADORES RÁPIDOS */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="bg-purple-950/30 p-3 rounded-xl border border-purple-500/20">
                <div className="text-[10px] text-slate-400">Preço final</div>
                <div className="text-sm font-bold text-white mt-0.5">R$ {precoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div className="text-[10px] text-emerald-400 font-medium">(-{descontoPct}%)</div>
              </div>

              <div className="bg-black/30 p-3 rounded-xl border border-white/[0.06]">
                <div className="text-[10px] text-slate-400">Custo variável total</div>
                <div className="text-sm font-bold text-white mt-0.5">R$ {custoVariavelTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div className="text-[9px] text-slate-500">(insumos + comissões + taxas)</div>
              </div>

              <div className="bg-black/30 p-3 rounded-xl border border-white/[0.06]">
                <div className="text-[10px] text-slate-400">Contribuição por venda</div>
                <div className="text-sm font-bold text-white mt-0.5">R$ {contribuicaoVenda.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div className="text-[10px] text-emerald-400 font-medium">({margemContribuicaoPct.toFixed(1)}% da receita)</div>
              </div>

              <div className="bg-black/30 p-3 rounded-xl border border-white/[0.06]">
                <div className="text-[10px] text-slate-400">Margem de contribuição</div>
                <div className="text-sm font-bold text-white mt-0.5">{margemContribuicaoPct.toFixed(1)}%</div>
                <div className="text-[10px] text-emerald-400 font-medium">(acima da margem mínima)</div>
              </div>

              <div className="bg-black/30 p-3 rounded-xl border border-white/[0.06] col-span-2 sm:col-span-1">
                <div className="text-[10px] text-slate-400">Lucro estimado por venda</div>
                <div className="text-sm font-bold text-white mt-0.5">R$ {lucroEstimadoVenda.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div className="text-[9px] text-slate-500">(após rateio de custos fixos)</div>
              </div>
            </div>

            {/* GRÁFICOS DE IMPACTO E LIMITE SEGURO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Gráfico de Barras de Impacto Mensal */}
              <div className="bg-black/30 p-4 rounded-xl border border-white/[0.06]">
                <h4 className="text-xs font-bold text-white mb-3">Impacto no lucro total (projeção mensal)</h4>
                
                <div className="flex items-end justify-around h-28 pt-4 pb-2 border-b border-white/10">
                  {/* Sem Desconto */}
                  <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <span className="text-[9px] text-slate-300 font-bold">R$ {lucroTotalSemDesconto.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                    <div className="w-12 bg-purple-400/80 rounded-t-md h-full" />
                    <span className="text-[9px] text-slate-400 mt-1">Sem desconto</span>
                  </div>

                  {/* Com Desconto */}
                  <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <span className="text-[9px] text-slate-300 font-bold">R$ {lucroTotalComDesconto.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</span>
                    <div className="w-12 bg-purple-600 rounded-t-md h-4/5" />
                    <span className="text-[9px] text-slate-400 mt-1">Com desconto ({descontoPct}%)</span>
                  </div>
                </div>

                <div className="mt-3 p-2 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-rose-400 shrink-0" />
                  <div className="text-[10px] text-rose-300">
                    Perda estimada de lucro: <span className="font-bold">R$ {perdaEstimadaLucro.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}/mês</span> ({quedaLucroPct.toFixed(1)}%)
                  </div>
                </div>
              </div>

              {/* Rosca do Maior Desconto Possível */}
              <div className="bg-black/30 p-4 rounded-xl border border-white/[0.06] flex flex-col justify-between">
                <h4 className="text-xs font-bold text-white">Qual o maior desconto possível?</h4>

                <div className="flex items-center gap-4 py-2">
                  <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-emerald-400" strokeDasharray="22, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-base font-extrabold text-white">22%</span>
                      <span className="block text-[8px] text-slate-400 font-medium">Limite seguro</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[10px]">
                    <span className="text-slate-300 font-bold block">Com 22% de desconto:</span>
                    <div className="flex items-center gap-1.5 text-emerald-400"><CheckCircle2 className="w-3 h-3" /> Mantém a margem mínima (30%)</div>
                    <div className="flex items-center gap-1.5 text-emerald-400"><CheckCircle2 className="w-3 h-3" /> Dentro do limite de aprovação</div>
                    <div className="flex items-center gap-1.5 text-emerald-400"><CheckCircle2 className="w-3 h-3" /> Impacto no lucro: -4,8%</div>
                  </div>
                </div>

                <button className="text-right text-[10px] text-purple-400 hover:text-purple-300 font-medium">
                  Simular outro cenário →
                </button>
              </div>

            </div>

            {/* CENÁRIOS RÁPIDOS */}
            <div>
              <span className="text-[11px] font-bold text-slate-300 block mb-2">Cenários rápidos</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { desc: "Sem desconto", val: "R$ 2.800,00", margem: "62,3%" },
                  { desc: "10% de desconto", val: "R$ 2.520,00", margem: "60,1%" },
                  { desc: "15% de desconto", val: "R$ 2.380,00", margem: "57,8%" },
                  { desc: "20% de desconto", val: "R$ 2.240,00", margem: "54,2%" },
                ].map((item, idx) => (
                  <button key={idx} className="p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/40 text-left transition-all">
                    <div className="text-[10px] text-slate-400">{item.desc}</div>
                    <div className="text-xs font-bold text-white">{item.val}</div>
                    <div className="text-[9px] text-purple-300 mt-1">Margem: {item.margem}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* COLUNA DA DIREITA: RECOMENDAÇÕES DA IA E RESUMO (4 COLUNAS) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* RECOMENDAÇÕES DA IA */}
          <div className="bg-dracula-card p-5 rounded-2xl border border-white/[0.06] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white flex items-center gap-2">
                Recomendações da IA <span className="bg-purple-500/20 text-purple-300 text-[9px] px-2 py-0.5 rounded-full">4 novas</span>
              </h3>
            </div>

            {/* Recomendação 1 */}
            <div className="p-3.5 rounded-xl bg-purple-900/30 border border-purple-500/30 space-y-2">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300"><Sparkles className="w-4 h-4" /></div>
                <div>
                  <h4 className="text-xs font-bold text-white">Desconto ideal sugerido</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">
                    Com base na sua margem mínima e no impacto financeiro, o desconto ideal para esse serviço é de <strong className="text-purple-300">até 22%</strong>.
                  </p>
                </div>
              </div>
              <button className="w-full py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                <span>Aplicar recomendação</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Recomendação 2 */}
            <div className="p-3 rounded-xl bg-black/30 border border-white/[0.06] space-y-2">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400"><AlertTriangle className="w-4 h-4" /></div>
                <div>
                  <h4 className="text-xs font-bold text-white">Atenção ao parcelamento</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Parcelamento em 6x reduz sua margem em 3,2%. Considere limitar para 3x.
                  </p>
                </div>
              </div>
              <button className="text-[10px] text-purple-400 hover:text-purple-300 font-medium block ml-8">
                Ver simulação →
              </button>
            </div>

            {/* Recomendação 3 */}
            <div className="p-3 rounded-xl bg-black/30 border border-white/[0.06] space-y-2">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400"><Package className="w-4 h-4" /></div>
                <div>
                  <h4 className="text-xs font-bold text-white">Oportunidade de pacote</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Combine com limpeza de pele e aumente o ticket médio em até 28% com margem saudável.
                  </p>
                </div>
              </div>
              <button className="text-[10px] text-purple-400 hover:text-purple-300 font-medium block ml-8">
                Ver proposta →
              </button>
            </div>
          </div>

          {/* RESUMO DA SIMULAÇÃO */}
          <div className="bg-dracula-card p-5 rounded-2xl border border-white/[0.06] space-y-4">
            <h3 className="text-xs font-bold text-white">Resumo da simulação</h3>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-slate-400">Receita líquida (após desconto)</span>
                <span className="font-bold text-white">R$ {precoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-slate-400">Custo variável total</span>
                <span className="font-bold text-white">R$ {custoVariavelTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-slate-400">Contribuição</span>
                <span className="font-bold text-white">R$ {contribuicaoVenda.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-slate-400">Margem de contribuição</span>
                <span className="font-bold text-emerald-400">{margemContribuicaoPct.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-slate-400">Lucro estimado (após rateio)</span>
                <span className="font-bold text-white">R$ {lucroEstimadoVenda.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between py-1 text-rose-400 font-semibold pt-1">
                <span>Comparativo com cenário atual</span>
                <span>-{quedaLucroPct.toFixed(1)}%</span>
              </div>
            </div>

            <button className="w-full mt-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2 cursor-pointer">
              <Save className="w-4 h-4" /> <span>Salvar simulação</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}