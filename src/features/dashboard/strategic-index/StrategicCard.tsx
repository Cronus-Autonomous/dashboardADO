import { TrendingUp  } from "lucide-react";
import { CircularProgress } from "./CircularProgress";

type Color = "pink" | "cyan" | "yellow";

const colorMap = {
  pink: {
    text: "text-dracula-pink",
    badge: "bg-dracula-pink/15 text-dracula-pink",
    border: "border-dracula-pink/10",
    glow: "from-dracula-pink/10",
  },
  cyan: {
    text: "text-dracula-cyan",
    badge: "bg-dracula-cyan/15 text-dracula-cyan",
    border: "border-dracula-cyan/10",
    glow: "from-dracula-cyan/10",
  },
  yellow: {
    text: "text-dracula-yellow",
    badge: "bg-dracula-yellow/15 text-dracula-yellow",
    border: "border-dracula-yellow/10",
    glow: "from-dracula-yellow/10",
  },
};

interface Props {
  title: string;
  value: number;
  suffix?: string;
  status: string;
  delta: string;
  deltaLabel: string;
  progress: number;
  color: Color;
}

export function StrategicCard({
  title,
  value,
  suffix = "",
  status,
  delta,
  progress,
  color,
}: Props) {
  const c = colorMap[color];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${c.border} bg-dracula-card p-2 transition-all duration-300 hover:-translate-y-1 hover:border-dracula-line hover:shadow-xl`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${c.glow} via-transparent to-transparent opacity-70 pointer-events-none`}
      />
      <div className="mb-3">
        <p className="text-xs font-bold text-dracula-fg">
          {title}
        </p>
      </div>
      {/* Alinhamento horizontal principal */}
      <div className="relative items-center justify-between gap-4">
        {/* Lado Direito: Círculo com o Número Absoluto no Centro */}
        <div className="relative flex items-center justify-center flex-shrink-0 w-[90px] h-[90px]">
          
          <CircularProgress value={progress} color={color} />
          
          {/* Caixa de Texto Centralizada no meio exato do SVG */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className={`text-xl font-black tracking-tight leading-none ${c.text}`}>
              {value}
              {suffix && <span className="text-xs font-bold opacity-80 ml-0.5">{suffix}</span>}
            </p>
          </div>

        </div>

        {/* Lado Esquerdo: Textos e Tags */}
          <div className="justify-between flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold ${c.badge}`}>
              {status}
            </span>
            <span className="flex items-center gap-0.5 text-xs font-bold text-dracula-green">
              <TrendingUp size={14} />
              {delta}
            </span>
          </div>

      </div>
    </div>
  );
}