import { useId } from "react";

const colors = {
  pink: "#ff4fa3",
  cyan: "#57d9ff",
  yellow: "#f8c542",
};

interface Props {
  value: number;
  color: keyof typeof colors;
}

export function CircularProgress({ value, color }: Props) {
  const id = useId();
  const radius = 34;
  const stroke = 8; // Diminuído levemente de 10 para 8 para deixar o miolo com mais espaço interno para o número
  const normalized = radius - stroke * 0.5;
  const circumference = normalized * 2 * Math.PI;
  const offset = circumference * (1 - value / 100);

  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      className="block"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors[color]} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity=".15" />
        </linearGradient>
      </defs>

      {/* Track de fundo do círculo */}
      <circle
        cx="45"
        cy="45"
        r={normalized}
        stroke="#1a1f2c"
        strokeWidth={stroke}
        fill="transparent"
      />

      {/* Barra preenchida */}
      <circle
        cx="45"
        cy="45"
        r={normalized}
        stroke={`url(#${id})`}
        strokeWidth={stroke}
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 45 45)"
      />
    </svg>
  );
}