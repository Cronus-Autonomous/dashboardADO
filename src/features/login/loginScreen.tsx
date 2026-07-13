import { useState } from "react";

const MOCK_USERS: Record<string, { name: string; role: string; title: string; isFranchise?: boolean; photo: string }> = {
  "patricia@cronus.com": { name: "Patrícia", role: "franqueador", title: "CEO", isFranchise: false, photo: "https://6a405018f4f12d1dab64899a.imgix.net/sandbox/1723742710170.jpg" },
  "alisson@cronus.com": { name: "Alisson", role: "franqueado", title: "Gerente de unidade", isFranchise: true, photo: "https://6a405018f4f12d1dab64899a.imgix.net/sandbox/2026-03-11_17-08.png" },
};

export function LoginScreen({ onLoginSuccess }: { onLoginSuccess: (user: any) => void }) {
  const [email, setEmail] = useState("patricia@cronus.com"); // Deixado pré-preenchido para facilitar seu teste
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setError("");

    const foundUser = MOCK_USERS[email.toLowerCase().trim()];

    // Validação mock simples (qualquer senha de teste passa)
    if (foundUser && password.length > 0) {
      sessionStorage.setItem("intelis_user", JSON.stringify(foundUser));
      onLoginSuccess(foundUser);
    } else {
      setError("Usuário não encontrado. Use os e-mails da Patrícia ou Alisson.");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#090214] text-slate-200 overflow-hidden font-sans select-none">
      
      {/* Planeta / Brilho de Fundo Curvado como no design */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[200vw] h-[150vh] rounded-[50%] bg-gradient-to-t from-purple-900/10 via-purple-600/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[68%] left-1/2 -translate-x-1/2 w-[140vw] h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 shadow-[0_0_20px_rgba(168,85,247,0.8)] pointer-events-none" />

      {/* Pequenos elementos decorativos flutuando (estrelas/ícones) */}
      <div className="absolute top-1/4 left-1/4 animate-pulse opacity-40 text-purple-400 text-xl">✦</div>
      <div className="absolute top-1/3 right-1/4 animate-pulse opacity-60 text-indigo-300 text-2xl">✦</div>

      {/* Card Central Glassmorphism */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] flex flex-col items-center">
        
        {/* Ícone de Brilho Superior */}
            <img
              src='https://6a405018f4f12d1dab64899a.imgix.net/alem-do-olhar/logo.jpg'
              className="h-25 w-25 rounded-full object-cover"
            />

        {/* Título Conforme Solicitado */}
        <h1 className="text-2xl font-semibold text-white tracking-wide text-center">
          Bem-vindo
        </h1>
        <p className="text-xs text-slate-400 mt-2 text-center max-w-[280px] leading-relaxed">
          Centro Operacional de Inteligência. Insira suas credenciais do ecossistema.
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="w-full mt-8 space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nome de usuário ou email"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 text-center font-medium bg-red-500/10 py-2 rounded-lg border border-red-500/20">
              {error}
            </p>
          )}

          {/* Dica de credenciais para desenvolvimento */}
          <div className="bg-white/[0.02] border border-white/[0.05] p-2.5 rounded-lg text-[11px] text-slate-400 space-y-0.5">
            <span className="block font-semibold text-purple-400">Usuários de Teste:</span>
            <div>• patricia@cronus.com <span className="opacity-50">(Franqueador)</span></div>
            <div>• alisson@cronus.com <span className="opacity-50">(Franqueado)</span></div>
          </div>

          {/* Botão de Submit Estilizado */}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 shadow-[0_4px_20px_rgba(168,85,247,0.4)] transition-all active:scale-[0.99]"
          >
            ENTRAR NO CENTRO OPERACIONAL
          </button>
        </form>

        {/* Rodapé com Links Sociais / Integrações Ocultas (Igual ao design original) */}
        <div className="flex items-center gap-6 mt-8 opacity-40 hover:opacity-70 transition-opacity">
          <span className="text-xs cursor-pointer">🍎</span>
          <span className="text-xs cursor-pointer">🌐</span>
          <span className="text-xs cursor-pointer">💬</span>
        </div>

      </div>
    </div>
  );
}