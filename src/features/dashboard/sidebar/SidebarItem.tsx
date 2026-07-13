type SidebarItemProps = {
  item: {
    route: string;
    label: string;
    icon?: string;
  };
};

export function SidebarItem({ item }: SidebarItemProps) {
  return (
    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-900 hover:text-white transition">
      {item.icon && (
        <span className="text-zinc-400">{item.icon}</span>
      )}
      {item.label}
    </button>
  );
}