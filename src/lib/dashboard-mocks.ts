export type FranchiseStatus = "meta" | "atencao" | "critico";

export type Franchise = {
  rank: number;
  unidade: string;
  regiao: string;
  faturamento: number;
  ocupacao: number;
  aiAgendamentos: number;
  status: FranchiseStatus;
};

export const regioes = [
  "Todas as Regiões",
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais",
  "Paraná",
  "Bahia",
  "Rio Grande do Sul",
] as const;

export const kpis = [
  {
    id: "faturamento",
    label: "Faturamento da Rede (Hoje)",
    value: "R$ 145.200",
    delta: "+12,4%",
    deltaDir: "up" as const,
    sub: "vs. ontem",
    accent: "green" as const,
    icon: "DollarSign" as const,
    sparkline: [
        24,
        25,
        25,
        28,
        30,
        30,
        34,
        30,
        35,
        40,
        50,
        50,
        49,
        51,
        54
    ]
  },
  {
    id: "ocupacao",
    label: "Taxa de Ocupação da Agenda",
    value: "78%",
    delta: "+3 pp",
    deltaDir: "up" as const,
    sub: "vs. ontem",
    accent: "purple" as const,
    icon: "CalendarCheck" as const,
    sparkline: [
        42,
        44,
        46,
        45,
        43,
        42,
        44,
        45,
        45,
        46,
        50,
        53,
        55,
        57,
        58
    ]
  },
  {
    id: "conversao",
    label: "Conversão de Avaliações",
    value: "64%",
    delta: "+5 pp",
    deltaDir: "up" as const,
    sub: "vs. ontem",
    accent: "purple" as const,
    icon: "Target" as const,
    sparkline: [
        42,
        44,
        46,
        45,
        43,
        42,
        44,
        45,
        45,
        46,
        50,
        53,
        49,
        45,
        44
    ]
  },
  {
    id: "ia",
    label: "Agendamentos Autônomos por IA",
    value: "32%",
    delta: "+8 pp",
    deltaDir: "up" as const,
    sub: "vs. ontem",
    accent: "purple" as const,
    icon: "Sparkles" as const,
    sparkline: [
        42,
        44,
        46,
        45,
        43,
        42,
        44,
        45,
        45,
        46,
        50,
        53,
        49,
        45,
        44
    ]
  },
  {
    id: "nps",
    label: "NPS Médio da Rede",
    value: "92",
    delta: "+1",
    deltaDir: "up" as const,
    sub: "vs. semana anterior",
    accent: "purple" as const,
    icon: "Heart" as const,
    sparkline: [
        42,
        44,
        46,
        45,
        43,
        42,
        44,
        45,
        45,
        46,
        50,
        53,
        49,
        45,
        44
    ]
  },
  {
    id: "cps",
    label: "CPS Médio da Rede",
    value: "89",
    delta: "+5",
    deltaDir: "up" as const,
    sub: "vs. mês anterior",
    accent: "purple" as const,
    icon: "Heart" as const,
    sparkline: [
        42,
        44,
        46,
        45,
        43,
        42,
        44,
        45,
        45,
        46,
        50,
        53,
        55,
        57,
        57
    ]
  },
];

export const kpis_unidade = [
  {
    id: "faturamento",
    label: "Faturamento (mês atual)",
    value: "R$ 418.320",
    delta: "+10,14%",
    deltaDir: "up" as const,
    sub: "vs. mês anterior",
    accent: "green" as const,
    icon: "DollarSign" as const,
    sparkline: [
        24,
        25,
        25,
        30,
        35,
        36,
        39,
        40,
        41,
        48,
        55,
        60,
        68
    ]
  },
  {
    id: "meta",
    label: "Meta do mês",
    value: "R$ 400.000",
    delta: "104,6%",
    deltaDir: "up" as const,
    sub: "atingida",
    accent: "purple" as const,
    icon: "CalendarCheck" as const,
    sparkline: [
        42,
        44,
        46,
        43,
        42,
        44,
        46,
        53,
        57,
        58
    ]
  },
  {
    id: "ticket_medio",
    label: "Ticket médio",
    value: "R$ 648",
    delta: "3,6%",
    deltaDir: "up" as const,
    sub: "vs. mês anterior",
    accent: "purple" as const,
    icon: "Target" as const,
    sparkline: [
        42,
        44,
        46,
        45,
        43,
        42,
        45,
        46,
        53,
        49,
        55,
        64
    ]
  },
  {
    id: "ocupacao",
    label: "Ocupação da agenda",
    value: "91%",
    delta: "+5 pp",
    deltaDir: "up" as const,
    sub: "vs. mês anterior",
    accent: "purple" as const,
    icon: "Sparkles" as const,
    sparkline: [
        42,
        44,
        43,
        42,
        45,
        46,
        50,
        53,
        55,
        54
    ]
  },
  {
    id: "conversao",
    label: "Conversão",
    value: "42,3%",
    delta: "4,8 pp",
    deltaDir: "up" as const,
    sub: "vs. mês anterior",
    accent: "purple" as const,
    icon: "Heart" as const,
    sparkline: [
        42,
        44,
        46,
        45,
        42,
        45,
        45,
        46,
        50,
        59,
        58
    ]
  },
  {
    id: "nps",
    label: "nps da unidade",
    value: "94",
    delta: "4 pontos",
    deltaDir: "up" as const,
    sub: "vs. mês anterior",
    accent: "purple" as const,
    icon: "Heart" as const,
    sparkline: [
        42,
        44,
        46,
        45,
        43,
        42,
        44,
        45,
        45,
        46,
        50,
        53,
        55,
        57,
        57
    ]
  },
];

export const revenueOrigin = [
  { name: "Serviços em Loja", value: 89800, color: "#ff79c6" },
  { name: "Produtos Home Care", value: 30750, color: "#8be9fd" },
  { name: "Upgrades Cross-Sell IA", value: 24650, color: "#bd93f9" },
  { name: "Pacotes", value: 8400, color: "#79ffa4" },
];

const META_MES = 4_200_000;
const DIAS_MES = 30;
const metaPorDia = META_MES / DIAS_MES;

export const dailyRevenue = Array.from({ length: 28 }, (_, i) => {
  const dia = i + 1;
  
  // Criamos uma oscilação baseada no dia da semana para dar realismo (ex: dia 6 e 7 simulando fim de semana)
  const diaDaSemana = dia % 7; 
  let fatorSazonal = 1.0;
  
  if (diaDaSemana === 0 || diaDaSemana === 6) {
    fatorSazonal = 0.35; // Faturamento cai 65% nos finais de semana fictícios
  } else if (diaDaSemana === 5) {
    fatorSazonal = 1.25; // Sexta-feira costuma ter pico de fechamento
  }

  // Ruído randômico controlado para simular dias reais de operação (+/- 20%)
  const ruidoAleatorio = 0.9 + Math.random() * 0.3;

  // Faturamento diário base realista
  const faturamentoDiarioBase = 140000;
  const diarioReal = Math.round(faturamentoDiarioBase * fatorSazonal * ruidoAleatorio);

  return {
    dia: String(dia).padStart(2, "0"),
    diario: diarioReal,
    meta: Math.round(metaPorDia * dia),
  };
}).reduce<Array<{ dia: string; acumulado: number; meta: number; diario: number }>>(
  (acc, curr, i) => {
    const prev = i === 0 ? 0 : acc[i - 1].acumulado;
    acc.push({
      dia: curr.dia,
      diario: curr.diario,
      acumulado: prev + curr.diario,
      meta: curr.meta,
    });
    return acc;
  },
  [],
);

export const franchises: Franchise[] = [
  { rank: 1, unidade: "Além do Olhar – Matriz", regiao: "SP", faturamento: 28450, ocupacao: 94, aiAgendamentos: 41, status: "meta" },
  { rank: 2, unidade: "Além do Olhar – Santana", regiao: "RJ", faturamento: 26780, ocupacao: 91, aiAgendamentos: 38, status: "meta" },
  { rank: 3, unidade: "Além do Olhar – Ipiranga", regiao: "MG", faturamento: 24100, ocupacao: 88, aiAgendamentos: 36, status: "meta" },
  { rank: 38, unidade: "Além do Olhar – Plaza D’Oro", regiao: "BA", faturamento: 9420, ocupacao: 62, aiAgendamentos: 18, status: "atencao" },
  { rank: 39, unidade: "Além do Olhar – Anápolis", regiao: "DF", faturamento: 8870, ocupacao: 59, aiAgendamentos: 16, status: "atencao" },
];

export const aiMetrics = [
  {
    id: "fcr",
    label: "Resolução na 1ª Interação (FCR)",
    value: "84%",
    sub: "dúvidas e agendamentos sem humano",
    accent: "cyan" as const,
    icon: "CheckCircle2" as const,
  },
  {
    id: "transbordo",
    label: "Transbordo Humano",
    value: "16%",
    sub: "direcionados para a recepção",
    accent: "cyan" as const,
    icon: "Users" as const,
  },
  {
    id: "recuperada",
    label: "Receita Recuperada (Hoje)",
    value: "R$ 18.450",
    sub: "follow-up de inativos & carrinhos",
    accent: "cyan" as const,
    icon: "TrendingUp" as const,
  },
  {
    id: "tempo",
    label: "Tempo Médio de Resposta",
    value: "2,4s",
    sub: "primeira resposta da IA",
    accent: "cyan" as const,
    icon: "Zap" as const,
  },
];

export const periodos = [
"Hoje",
"Ontem",
"Últimos 7 dias",
"Últimos 30 dias",
"Este mês",
"Mês anterior",
"Últimos 90 dias",
"Este trimestre",
"Ano"
]

export const mapColors = {
  elite: "#46d46f",
  excellent: "#7bdc87",
  good: "#f3bf3d",
  risk: "#f28b38",
  critical: "#ef4444",
};
