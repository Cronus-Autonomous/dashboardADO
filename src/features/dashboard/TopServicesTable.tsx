import { Card } from "./Card";

interface ServiceData {
  rank: number;
  name: string;
  revenue: string;
  percentage: string;
  quantity: number;
  averageTicket: string;
}

export function TopServicesTable() {
  // Mock dos dados idênticos aos da imagem_05601a.png
  const services: ServiceData[] = [
    { rank: 1, name: "Depilação a Laser", revenue: "R$ 98.450", percentage: "23,5%", quantity: 312, averageTicket: "R$ 315" },
    { rank: 2, name: "Limpeza de Pele", revenue: "R$ 71.320", percentage: "17,0%", quantity: 198, averageTicket: "R$ 360" },
    { rank: 3, name: "Botox", revenue: "R$ 58.900", percentage: "14,1%", quantity: 128, averageTicket: "R$ 460" },
    { rank: 4, name: "Preenchimento", revenue: "R$ 49.200", percentage: "11,7%", quantity: 84, averageTicket: "R$ 586" },
    { rank: 5, name: "Harmonização Facial", revenue: "R$ 41.380", percentage: "9,9%", quantity: 71, averageTicket: "R$ 583" },
  ];

  return (
    <Card
      title="Top 5 Serviços • Mês"
      className="w-full bg-[#0d091a] border-white/[0.04]"
    >
      <div className="w-full overflow-x-auto select-none">
        <table className="w-full text-left border-collapse">
          {/* Cabeçalho da Tabela */}
          <thead>
            <tr className="border-b border-white/[0.04] text-[10px] font-bold text-slate-400 tracking-wider">
              <th className="py-3 px-2 w-10 text-center">#</th>
              <th className="py-3 px-2">SERVIÇO</th>
              <th className="py-3 px-2 text-right">FATURAMENTO</th>
              <th className="py-3 px-2 text-right">% RECEITA</th>
              <th className="py-3 px-2 text-right">QTD.</th>
              <th className="py-3 px-2 text-right">TICKET MÉDIO</th>
            </tr>
          </thead>

          {/* Corpo da Tabela */}
          <tbody className="text-xs text-slate-200">
            {services.map((service) => (
              <tr 
                key={service.rank} 
                className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group"
              >
                {/* Posição do Ranking */}
                <td className="py-3.5 px-2 text-center font-medium text-slate-500 group-hover:text-purple-400 transition-colors">
                  {service.rank}
                </td>
                
                {/* Nome do Serviço */}
                <td className="py-3.5 px-2 font-medium text-white">
                  {service.name}
                </td>
                
                {/* Faturamento */}
                <td className="py-3.5 px-2 text-right font-semibold text-slate-200">
                  {service.revenue}
                </td>
                
                {/* % Receita */}
                <td className="py-3.5 px-2 text-right text-slate-400">
                  {service.percentage}
                </td>
                
                {/* Quantidade */}
                <td className="py-3.5 px-2 text-right text-slate-300">
                  {service.quantity}
                </td>
                
                {/* Ticket Médio */}
                <td className="py-3.5 px-2 text-right text-slate-200 font-medium">
                  {service.averageTicket}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botão de Rodapé Dinâmico */}
      <button className="w-full mt-4 py-3 rounded-xl bg-purple-950/20 hover:bg-purple-950/40 border border-purple-900/30 text-purple-400 hover:text-purple-300 transition-all flex items-center justify-center gap-2 text-xs font-medium group">
        Ver todos os serviços
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