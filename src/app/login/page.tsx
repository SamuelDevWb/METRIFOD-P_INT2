'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulamos validación para el avance de clase
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard'); 
    }, 1500);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#002e5f] p-4">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-white p-10 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#002e5f] text-3xl shadow-lg">
             <span className="text-white font-black">M</span>
          </div>
          <h1 className="text-3xl font-black text-[#002e5f] tracking-tight text-center">METRIFOD</h1>
          <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-[0.2em] mt-1">
            UANL - Facultad de Organización Deportiva
          </p>
        </div>
        
        <form className="mt-8 space-y-5" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1">Usuario / Matrícula</label>
              <input type="text" required disabled={loading} className="w-full rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Ej. 1958739" />
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1 ml-1">Contraseña</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} required disabled={loading} className="w-full rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-blue-600 uppercase">
                  {showPass ? "Ocultar" : "Ver"}
                </button>
              </div>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#002e5f] py-4 text-sm font-bold text-white shadow-xl hover:bg-opacity-90 transition-all active:scale-95 disabled:bg-gray-300">
            {loading ? "Validando..." : "Ingresar al Sistema"}
          </button>
        </form>
      </div>
    </main>
  );
}