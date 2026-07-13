interface Props {
  title: string;
  value: string;
  subtitle: string;
  color: "purple" | "green" | "cyan" | "yellow";
}

const colors = {
  purple: "text-dracula-purple",
  green: "text-dracula-green",
  cyan: "text-dracula-cyan",
  yellow: "text-dracula-yellow",
};

export function ExecutionMetric({
  title,
  value,
  subtitle,
  color,
}: Props) {
  return (
    <div className="rounded-2xl border border-dracula-line/40 bg-dracula-card-2 p-2 transition-all duration-300 hover:border-dracula-purple/30 hover:-translate-y-1">

      <p className="text-xs font-semibold uppercase tracking-wide text-dracula-muted">
        {title}
      </p>

      <h2 className={`mt-3 text-2xl font-bold ${colors[color]}`}>
        {value}
      </h2>

      <p className="mt-2 text-xs text-dracula-muted">
        {subtitle}
      </p>

    </div>
  );
}