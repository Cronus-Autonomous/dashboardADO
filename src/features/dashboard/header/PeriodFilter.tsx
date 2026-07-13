import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import filters from "@/mocks/metadata/filters.json";

const periodos = filters.periods;

export function PeriodFilter() {
  const [periodo, setPeriodo] = useState(periodos[0].label);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex min-w-[220px] items-center justify-between rounded-2xl border border-dracula-line/60 bg-dracula-card px-4 py-3 transition hover:border-dracula-purple/40"
      >
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-dracula-purple" />

          <div className="text-left">
            <p className="text-xs text-dracula-muted">Período</p>

            <p className="text-sm font-medium text-dracula-fg">
              {periodo}
            </p>
          </div>
        </div>

        <ChevronDown
          className={`h-4 w-4 text-dracula-muted transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 z-20 mt-2 w-full overflow-hidden rounded-2xl border border-dracula-line/60 bg-dracula-card-2 shadow-2xl">
            {periodos.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setPeriodo(p.label);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-3 text-left text-sm transition hover:bg-dracula-line/30 ${
                  periodo === p.label
                    ? "bg-dracula-line/20 text-dracula-purple"
                    : "text-dracula-fg"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}