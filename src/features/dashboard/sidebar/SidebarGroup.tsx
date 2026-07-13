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
};

export function SidebarGroup({ group, isCollapsed }: SidebarGroupProps) {

  const Icon = (Icons[group.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Circle;

  return (
    <div className="flex gap-1 align-center items-center rounded-lg px-2 py-1 hover:bg-white/5 transition-colors cursor-pointer">
      <div className={`grid h-9 w-9 shrink-0 place-items-center`}>
          <Icon className="h-4 w-4 text-dracula-muted" />
      </div>
      {!isCollapsed && (
      <div className="px-2 text-xs text-zinc-500 tracking-wider text-dracula-purple">
        {group.label}
      </div>)}

      {/* <div className="flex flex-col gap-1">
        {group.items.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
      </div> */}
    </div>
  );
}