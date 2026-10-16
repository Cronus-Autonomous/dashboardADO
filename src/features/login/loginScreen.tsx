import { useState } from "react";
import logo from "@/assets/02.png";

const MOCK_USERS: Record<string, { name: string; role: string; title: string; isFranchise?: boolean; photo: string }> = {
  "natalia@cronus.com": { name: "Natália", role: "franqueado", title: "Gerente", isFranchise: false, photo: "https://res.cloudinary.com/xiupvhfs/image/upload/v1792115963/2026-10-15_22-59.png" },
  "alisson@cronus.com": { name: "Alisson", role: "franqueado", title: "Gerente de unidade", isFranchise: true, photo: "https://6a405018f4f12d1dab64899a.imgix.net/sandbox/2026-03-11_17-08.png" },
};

export function LoginScreen({ onLoginSuccess }: { onLoginSuccess: (user: any) => void }) {
  const [email, setEmail] = useState("natalia@cronus.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
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
    <div className="relative flex min-h-screen w-full items-center justify-center text-slate-200 overflow-hidden font-sans select-none">
      
      {/* Imagem de fundo cobrindo 100% (com object-fill para esticar e preencher sem manter proporções se necessário) */}
      <img 
        src="https://res.cloudinary.com/xiupvhfs/image/upload/v1792114841/4b87faf82613095afea3e16190e2f4c0.jpg" 
        alt="Fundo Login" 
        className="absolute inset-0 w-full h-full object-fill z-0 pointer-events-none"
      />

      {/* Camada de escurecimento opcional para destacar o card de login sobre a imagem */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Card Central Glassmorphism */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] flex flex-col items-center">
        
        {/* Ícone de Brilho Superior */}
        <img
          src={logo}
          className="h-25 w-25 rounded-full object-cover"
        />

        {/* Título Conforme Solicitado */}
        <h1 className="text-2xl font-semibold text-white tracking-wide text-center mt-2">
          Bem-vindo
        </h1>
        <p className="text-xs text-slate-400 mt-2 text-center max-w-[280px] leading-relaxed">
          Centro de Inteligência financeira e operacional.
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

          {/* Botão de Submit Estilizado */}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl font-medium text-sm text-[#9d522a] bg-[#ffe7d9] hover:opacity-80 transition-all active:scale-[0.99] cursor-pointer"
          >
            ENTRAR
          </button>
        </form>

      </div>
    </div>
  );
}