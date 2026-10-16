import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarGroup } from "./SidebarGroup";
import sidebarData from "@/mocks/dashboard/sidebar.json";
import logo from "@/assets/02.png";

type SidebarProps = {
  currentRoute?: string;
  onNavigate?: (route: string) => void;
};

export function Sidebar({ currentRoute, onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Função que executa a navegação e força o menu a recolher
  const handleItemClick = (route: string) => {
    onNavigate?.(route);
    setIsCollapsed(true); // <-- Recolhe o menu ao clicar em qualquer item
  };

  return (
    <>
      {/* SIDEBAR DESKTOP */}
      <aside
        className={`
          group/sidebar fixed inset-y-0 left-0 z-40
          hidden md:flex flex-col
          bg-[#0b0616] border-r border-white/[0.06]
          text-slate-300
          transition-[width] duration-300 ease-in-out
          ${isCollapsed ? "w-[68px]" : "w-[248px]"}
        `}
      >
        {/* HEADER */}
        <div
          className={`
            relative flex h-[64px] shrink-0 items-center
            ${isCollapsed ? "justify-center" : "justify-between"}
            px-3
          `}
        >
          {/* LOGO */}
          <button
            type="button"
            onClick={toggleSidebar} // Permite expandir/recolher ao clicar na logo também
            aria-label="Alternar menu"
            title="Alternar menu"
            className="
              relative flex items-center justify-center shrink-0
              rounded-xl h-10 w-10 cursor-pointer
              group/logo
            "
          >
            <img
              src={logo}
              alt="Além do Olhar"
              className={`
                h-9 w-9 rounded-full object-cover
                transition-opacity duration-200
                ${isCollapsed ? "opacity-100 group-hover/logo:opacity-0" : "opacity-100"}
              `}
            />

            {/* ÍCONE NO HOVER: MENU RECOLHIDO */}
            {isCollapsed && (
              <span
                className="
                  absolute inset-0 grid place-items-center
                  rounded-xl bg-white/[0.08]
                  opacity-0 group-hover/logo:opacity-100
                  transition-opacity duration-200
                "
              >
                <PanelLeftOpen className="h-5 w-5 text-white" />
              </span>
            )}
          </button>

          {/* NOME E BOTÃO: MENU EXPANDIDO */}
          {!isCollapsed && (
            <>
              <span className="ml-2 flex-1 truncate text-[15px] font-semibold tracking-tight text-white">
                Além do Olhar
              </span>

              <button
                type="button"
                onClick={toggleSidebar}
                aria-label="Recolher menu"
                title="Recolher menu"
                className="
                  grid h-9 w-9 shrink-0 place-items-center
                  rounded-lg text-slate-400
                  hover:bg-white/[0.08] hover:text-white
                  transition-colors
                "
              >
                <PanelLeftClose className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* NAVEGAÇÃO */}
        <nav
          aria-label="Navegação principal"
          className="
            flex-1 min-h-0 overflow-y-auto overflow-x-hidden
            px-2 py-3
            scrollbar-thin scrollbar-thumb-white/10
          "
        >
          <div className="flex flex-col gap-1">
            {sidebarData.groups.map((group) => (
              <SidebarGroup
                key={group.route}
                group={group}
                isCollapsed={isCollapsed}
                currentRoute={currentRoute}
                onNavigate={() => handleItemClick(group.route)} // Chama a função que navega e recolhe
              />
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}