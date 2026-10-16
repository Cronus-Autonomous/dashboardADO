import { useState, useEffect } from "react";
import { DashboardHeader } from "@/features/dashboard/pages/DashboardHeader";
import { KpiRow } from "./components/dashboard/KpiRow";
import { RevenueOriginDonut } from "./features/dashboard/RevenueOriginDonut";
import { RevenueVsGoalChart } from "./features/dashboard/RevenueVsGoalChart";
import { IntelligentAlerts } from "./features/dashboard/alerts/IntelligentAlerts";
import { Opportunities } from "./features/dashboard/opportunities/Opportunities";
import { Sidebar } from "@/features/dashboard/sidebar/Sidebar";
import { LoginScreen } from "./features/login/loginScreen";
import { AiAutomationPanel } from "./features/dashboard/AiAutomationPanel";
import { UnitSummaryPanel } from "./features/dashboard/UnitSummaryPanel";
import { TopServicesTable } from "./features/dashboard/TopServicesTable";
import { FeaturedProfessionals } from "./features/dashboard/FeaturedProfessionals";
import { SchedulePerformanceChart } from "./features/dashboard/SchedulePerformanceChart";
import { handleLogout } from "./utils";
import { MetasFinanceirasPage } from "./features/dashboard/pages/MetasFinanceirasPage";
import { SimuladorDescontoPage } from "./features/dashboard/pages/SimuladorDescontoPage";
import { EconomicsPage } from "./features/dashboard/pages/EconomicsPage";

type User = {
  isFranchise?: boolean;
  [key: string]: any;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [currentRoute, setCurrentRoute] = useState("/financeiro");

  useEffect(() => {
    const savedUser = sessionStorage.getItem("intelis_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!user) {
    return <LoginScreen onLoginSuccess={(userData) => setUser(userData)} />;
  }

  return (
    <main className="flex min-h-screen bg-dracula-bg text-dracula-fg ml-[60px]">
      <Sidebar currentRoute={currentRoute} onNavigate={(route) => setCurrentRoute(route)} />
      
      <div className="mx-auto max-w-[1600px] flex-1 overflow-x-hidden space-y-4 px-4 py-6 sm:px-6 lg:px-8">
        {(currentRoute === "/" || currentRoute === "/financeiro") && (
          <div className="flex flex-col gap-4">
            <DashboardHeader user={user?.name} logout={() => handleLogout(setUser)} />
            <KpiRow />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-12">
                <RevenueVsGoalChart />
              </div>

              <div className="lg:col-span-4 flex">
                <AiAutomationPanel />
              </div>
              <div className="lg:col-span-8 flex">
                <UnitSummaryPanel />
              </div>
      
              <div className="lg:col-span-5 ">
                <RevenueOriginDonut />
              </div>
              <div className="lg:col-span-7 flex">
                <TopServicesTable />
              </div>

              <div className="lg:col-span-6 flex">
                <FeaturedProfessionals />
              </div>
              <div className="lg:col-span-6 flex">
                <SchedulePerformanceChart />
              </div>
      
              <div className="lg:col-span-5 ">
                <IntelligentAlerts />
              </div>
              <div className="lg:col-span-7 ">
                <Opportunities />
              </div>
            </div>
          </div>
        )}
        
        {currentRoute === "/economics" && <EconomicsPage />}

        {currentRoute === "/simuladores" && <SimuladorDescontoPage />}

        {currentRoute === "/metas" && <MetasFinanceirasPage />}
      </div>
    </main>
  );
}

export default App;