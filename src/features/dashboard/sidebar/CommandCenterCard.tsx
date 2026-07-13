import { Zap } from "lucide-react";

export function CommandCenterCard() {
  return (
    <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl p-4 text-white shadow-lg">
      <div className="flex items-center gap-2 font-semibold">
        <Zap size={16} />
        Command Center
      </div>

      <p className="text-xs text-white/80 mt-2 leading-snug">
        Acesse análises, operações e automações principais da rede.
      </p>

      <button className="mt-3 w-full bg-white/20 hover:bg-white/30 transition rounded-lg py-2 text-xs font-medium">
        Abrir painel
      </button>
    </div>
  );
}