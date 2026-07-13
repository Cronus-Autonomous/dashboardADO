import { useState } from "react";
import { Settings, User, LogOut, ChevronDown } from "lucide-react";

export function UserMenu({ user, logout }: { user: any; logout: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 rounded-2xl border border-dracula-line/60 bg-dracula-card px-3 py-2 transition hover:border-dracula-purple/40"
      >
        <img
          src={
            user?.isFranchise
              ? 'https://6a405018f4f12d1dab64899a.imgix.net/sandbox/2026-03-11_17-08.png'
              : "https://6a405018f4f12d1dab64899a.imgix.net/sandbox/1723742710170.jpg"
          }
          className="h-11 w-11 rounded-full object-cover"
          alt={user?.name || 'User avatar'}
        />

        <div className="hidden text-left lg:block">
            <p className="text-sm font-semibold text-dracula-fg">
            {user?.name || null}
          </p>

          <p className="text-xs text-dracula-muted">
            {user?.title || null}
          </p>
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

          <div className="absolute right-0 z-20 mt-2 w-64 overflow-hidden rounded-2xl border border-dracula-line/60 bg-dracula-card-2 shadow-2xl">

            <div className="border-b border-dracula-line/60 p-4">

              <p className="font-semibold text-dracula-fg">
                {user?.name || null}
              </p>

              <p className="text-sm text-dracula-muted">
                {user?.title || null}
              </p>

            </div>

            <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-dracula-fg transition hover:bg-dracula-line/30 cursor-pointer">
              <User size={18} />
              Meu Perfil
            </button>

            <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-dracula-fg transition hover:bg-dracula-line/30 cursor-pointer">
              <Settings size={18} />
              Configurações
            </button>

            <div className="my-1 border-t border-dracula-line/60" />

            <button className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-400 transition hover:bg-red-500/10 cursor-pointer" onClick={logout}>
              <LogOut size={18} />
              Sair
            </button>

          </div>
        </>
      )}
    </div>
  );
}