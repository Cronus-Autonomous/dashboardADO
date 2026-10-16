// import user from "@/mocks/auth/me.json";

export function Greeting({ valor }: { valor: string }) {
  
  return (
    <div className="flex items-center gap-4">
      <div>
        <h1 className="truncate text-xl font-bold text-dracula-fg sm:text-2xl">
          Olá, {valor}
        </h1>
        <p className="mt-1 text-sm text-dracula-muted">
          Visão consolidada • {new Date().toLocaleDateString("pt-BR", { dateStyle: "long" })}
        </p>
      </div>
    </div>
  );
}