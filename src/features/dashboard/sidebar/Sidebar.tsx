// import { SidebarGroup } from "./SidebarGroup";
// import { CommandCenterCard } from "./CommandCenterCard";
// import sidebarData from "@/mocks/dashboard/sidebar.json";

// export function Sidebar({ user }: { user: any }) {
//   return (
//     <aside className="w-72 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col p-4 gap-4">
      
//       {/* Top / Brand */}
//       <div className="text-white font-semibold text-lg px-2">
//         Intelis {user?.role ? `- ${user.role}` : ""}
//       </div>

//       {/* Command Center destacado */}
//       <CommandCenterCard />

//       {/* Menu */}
//       <div className="flex flex-col gap-2 mt-2">
//         {sidebarData.groups.map((group) => (
//           <SidebarGroup key={group.title} group={group} />
//         ))}
//       </div>
//     </aside>
//   );
// }

import { useState } from "react";
import { SidebarGroup } from "./SidebarGroup";
import { CommandCenterCard } from "./CommandCenterCard";
import sidebarData from "@/mocks/dashboard/sidebar.json";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`
        sticky top-0 left-0 h-screen flex flex-col justify-between p-4 
        bg-[#0b0616] border-r border-white/[0.06] text-slate-300 transition-all duration-300 ease-in-out z-30
        ${isCollapsed ? "w-20" : "w-45"}
      `}
    >
      {/* --- PARTE SUPERIOR: Logo, Marca e Botão Toggle --- */}
      <div className="flex flex-col gap-5">
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"} px-2 pt-2`}>
          
          {/* Logo e Nome da Marca (Sumiço suave se colapsado) */}
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wide flex items-center gap-2">
                Cronus
              </span>
            </div>
          )}

          {/* Botão de Recolher (Fácil identificação e clique) */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] text-slate-400 hover:text-white transition-colors"
            title={isCollapsed ? "Expandir Menu" : "Recolher Menu"}
          >
            {isCollapsed ? (
              /* Ícone de Expandir (Seta para Direita) */
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            ) : (
              /* Ícone de Recolher (Seta para Esquerda) */
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
              </svg>
            )}
          </button>
        </div>

        {/* --- MENU DE NAVEGAÇÃO COM SCROLL INTERNO SE NECESSÁRIO --- */}
        <div className="flex flex-col gap-1 max-h-[calc(100vh-280px)] pr-1 ">
          {sidebarData.groups.map((group) => (
            <SidebarGroup 
              key={group.title} 
              group={group} 
              isCollapsed={isCollapsed} 
            />
          ))}
        </div>
      </div>

      {/* --- PARTE INFERIOR: Command Center & Assinatura Corporativa --- */}
      <div className="flex flex-col gap-4 mt-auto">
        
        {/* Command Center Card (Ocultado ou minimizado no modo colapsado) */}
        {!isCollapsed ? (
          <CommandCenterCard />
        ) : (
          <div className="flex justify-center">
            {/* Versão minimalista do card quando colapsado */}
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 animate-pulse cursor-pointer" title="Command Center Ativo">
              ⚡
            </div>
          </div>
        )}

        {/* Branding da Empresa Mãe (Igual ao rodapé da imagem_321d2c.png) */}
        {/* {!isCollapsed && (
          <div className="pt-2 border-t border-white/[0.05] px-2 flex flex-col">
            <span className="text-white font-medium tracking-wide text-lg leading-tight">Cronus</span>
            <span className="text-xs text-slate-500">Inteligência Operacional</span>
          </div>
        )} */}
      </div>
    </aside>
  );
}