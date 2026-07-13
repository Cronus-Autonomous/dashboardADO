import { useState, useEffect } from "react";
import { DashboardHeader } from "@/features/dashboard/pages/DashboardHeader";
import { KpiRow } from "./features/dashboard/KpiRow";
import { RevenueOriginDonut } from "./features/dashboard/RevenueOriginDonut";
import { RevenueVsGoalChart } from "./features/dashboard/RevenueVsGoalChart";
import { FranchiseRankingTable } from "./features/dashboard/FranchiseRankingTable";
import { AiEfficiencyPanel } from "./features/dashboard/AiEfficiencyPanel";
import { StrategicIndexes } from "@/features/dashboard/strategic-index/StrategicIndexes";
import { IntelligentAlerts } from "./features/dashboard/alerts/IntelligentAlerts";
import { AIExecution } from "./features/dashboard/execution/AIExecution";
import { Opportunities } from "./features/dashboard/opportunities/Opportunities";
import { Sidebar } from "@/features/dashboard/sidebar/Sidebar";
import { LoginScreen } from "./features/login/loginScreen";
import { AiAutomationPanel } from "./features/dashboard/AiAutomationPanel";
import { UnitSummaryPanel } from "./features/dashboard/UnitSummaryPanel";
import { TopServicesTable } from "./features/dashboard/TopServicesTable";
import { FeaturedProfessionals } from "./features/dashboard/FeaturedProfessionals";
import { SchedulePerformanceChart } from "./features/dashboard/SchedulePerformanceChart";

type User = {
  isFranchise?: boolean;
  [key: string]: any;
};

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("intelis_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("intelis_user");
    setUser(null);
  };

  if (!user) {
    return <LoginScreen onLoginSuccess={(userData) => setUser(userData)} />;
  }

  return (
    <main className="flex min-h-screen bg-dracula-bg text-dracula-fg">
      <Sidebar />
      
      <div className="mx-auto max-w-[1600px] space-y-4 px-4 py-6 sm:px-6 lg:px-8 flex-1 overflow-x-hidden">
        <DashboardHeader user={user} logout={handleLogout} />
        <KpiRow user={user} />

        {/* ====================================================================== */}
        {/* VISÃO 1: FRANQUIA (Unidade de Atendimento / Clínica / Loja)            */}
        {/* ====================================================================== */}
        {user.isFranchise && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-stretch">
            {/* Linha 1: Automação à esquerda, Resumo da Unidade à direita */}
            <div className="lg:col-span-4 flex">
              <AiAutomationPanel />
            </div>
            <div className="lg:col-span-8 flex">
              <UnitSummaryPanel />
            </div>

            {/* Linha 2: Donut de Origem de Receita e Tabela de Serviços mais vendidos */}
            <div className="lg:col-span-5 ">
              <RevenueOriginDonut />
            </div>
            <div className="lg:col-span-7 flex">
              <TopServicesTable />
            </div>

            {/* Linha 3: Profissionais do mês lado a lado com os dados de Agendamento */}
            <div className="lg:col-span-6 flex">
              <FeaturedProfessionals />
            </div>
            <div className="lg:col-span-6 flex">
              <SchedulePerformanceChart />
            </div>

            {/* Linha 4: Gráfico de Metas expandido em largura total para a Franquia acompanhar */}
            <div className="lg:col-span-12">
              <RevenueVsGoalChart />
            </div>

            {/* Linha 5: Alertas operacionais e Painel de Oportunidades comerciais */}
            <div className="lg:col-span-5 ">
              <IntelligentAlerts />
            </div>
            <div className="lg:col-span-7 ">
              <Opportunities />
            </div>
          </div>
        )}

        {/* ====================================================================== */}
        {/* VISÃO 2: FRANQUEADOR (Visão de Gestão da Rede Global / Corporativa)    */}
        {/* ====================================================================== */}
        {!user.isFranchise && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-stretch">
            {/* Linha 1: Painel de Eficiência Geral da IA na rede inteira */}
            <div className="lg:col-span-12">
              <AiEfficiencyPanel />
            </div>

            {/* Linha 2: Três blocos simétricos de 4 colunas (Perfeito alinhamento matemático: 4+4+4 = 12) */}
            <div className="lg:col-span-6 ">
              <FranchiseRankingTable />
            </div>
            <div className="lg:col-span-6 flex">
              <TopServicesTable />
            </div>

            {/* Linha 3: Tabela de Maiores Serviços Ocupando a linha toda corporativa */}
            <div className="lg:col-span-8">
              <RevenueVsGoalChart />
            </div>
            <div className="lg:col-span-4 flex">
              <AIExecution />
            </div>

            {/* Linha 4: Ranking comparativo de franquias (5 colunas) vs Evolução da Meta da Rede (7 colunas) */}
            <div className="lg:col-span-4 flex">
              <StrategicIndexes />
            </div>
            <div className="lg:col-span-8 ">
              <IntelligentAlerts />
            </div>

            {/* Linha 5: Alertas Corporativos e Módulo de Oportunidades macro */}
            <div className="lg:col-span-5 ">
              <RevenueOriginDonut />
            </div>
            <div className="lg:col-span-7 ">
              <Opportunities />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;