// import user from "@/mocks/auth/me.json";

export function Greeting({ user }: { user: any }) {
  
  return (
    <div className="flex items-center gap-4">
        <img
          src='https://6a405018f4f12d1dab64899a.imgix.net/alem-do-olhar/logo.jpg'
          className="h-11 w-11 rounded-full object-cover"
        />
      <div>
        <h1 className="text-3xl font-bold text-dracula-fg">
          {user?.isFranchise ? 'Unidade - Matriz' : 'Além do Olhar'}
        </h1>

        <p className="mt-1 text-sm text-dracula-muted">
          Visão consolidada da rede • {new Date().toLocaleDateString("pt-BR", { dateStyle: "long" })}
        </p>
      </div>
    </div>
  );
}