import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
} from "recharts";

const colorMap = {
  pink: "#ff4fa3",
  purple: "#b07cff",
  cyan: "#6dd5ff",
  green: "#4ade80",
  yellow: "#facc15",
  orange: "#fb923c",
};

interface Props {
  data: number[];
  color: keyof typeof colorMap;
}

export function Sparkline({ data, color }: Props) {
  const chartData = data.map((value) => ({ value }));

  // evita conflito de ids quando vários cards renderizam
  const gradientId = `gradient-${color}-${Math.random()
    .toString(36)
    .substring(2, 8)}`;

  const glowId = `glow-${color}-${Math.random()
    .toString(36)
    .substring(2, 8)}`;

  return (
    <div className="mt-5 h-12 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{
            top: 4,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={colorMap[color]}
                stopOpacity={0.35}
              />
              <stop
                offset="55%"
                stopColor={colorMap[color]}
                stopOpacity={0.12}
              />
              <stop
                offset="100%"
                stopColor={colorMap[color]}
                stopOpacity={0}
              />
            </linearGradient>

            <filter id={glowId}>
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill={`url(#${gradientId})`}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke={colorMap[color]}
            strokeWidth={2.8}
            dot={false}
            filter={`url(#${glowId})`}
            isAnimationActive={true}
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}