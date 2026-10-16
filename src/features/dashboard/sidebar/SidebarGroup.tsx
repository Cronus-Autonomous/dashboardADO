import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

type SidebarGroupProps = {
  group: {
    title: string;
    route: string;
    label: string;
    icon?: string;
  };
  isCollapsed?: boolean;
  currentRoute?: string;
  onNavigate?: (route: string) => void;
};

export function SidebarGroup({ group, isCollapsed, currentRoute, onNavigate }: SidebarGroupProps) {
  const Icon = (Icons[group.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Circle;
  const isActive = currentRoute === group.route;

  return (
    <button
      type="button"
      onClick={() => onNavigate?.(group.route)}
      className={`
        w-full flex items-center gap-2 rounded-lg px-3 py-2 text-left
        transition-colors cursor-pointer
        ${isActive ? "bg-white/5 text-purple-300 font-medium" : "text-slate-300 hover:bg-white/5 hover:text-white"}
      `}
    >
      <div className="grid h-5 w-5 shrink-0 place-items-center">
        <Icon className={`h-4 w-4 ${isActive ? "text-purple-300" : "text-dracula-muted"}`} />
      </div>
      
      {!isCollapsed && (
        <span className="text-xs tracking-wider truncate">
          {group.label}
        </span>
      )}
    </button>
  );
}