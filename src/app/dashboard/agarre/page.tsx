'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgarrePage() {
  const router = useRouter();
  const [manoDerecha, setManoDerecha] = useState(45); // Kilos base simulados
  const [manoIzquierda, setManoIzquierda] = useState(40);
  const [guardando, setGuardando] = useState(false);

  const handleGuardar = () => {
    setGuardando(true);
    // Simulamos que se guarda en la base de datos por 1 segundo
    setTimeout(() => {
      alert(`¡Métricas guardadas con éxito!\nDerecha: ${manoDerecha} kg\nIzquierda: ${manoIzquierda} kg`);
      router.push('/dashboard'); // Regresamos al inicio
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden mt-4">
        
        {/* Encabezado con Botón de Regreso */}
        <div className="bg-[#002e5f] p-6 text-white flex items-center gap-4">
          <button onClick={() => router.push('/dashboard/seleccion')} className="text-2xl font-bold bg-white/20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/30 transition active:scale-95">
            ←
          </button>
          <div>
            <h1 className="text-xl font-black">Prueba de Agarre</h1>
            <p className="text-xs text-blue-200 uppercase tracking-widest">Dinamometría Manual</p>
          </div>
        </div>

        {/* Ficha del Cadete Seleccionado */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Evaluando a:</p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-xl shadow-inner border border-blue-200">
              👮🏽‍♂️
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">Juan Pérez</p>
              <p className="text-xs text-gray-500 font-medium">Placa: <span className="font-bold text-[#002e5f]">#4589</span> | Edad: 28</p>
            </div>
          </div>
        </div>

        {/* Controles Táctiles Gigantes */}
        <div className="p-8 space-y-10">
          
          {/* Mano Derecha */}
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase mb-4 text-center tracking-widest">Fuerza Mano Derecha (kg)</label>
            <div className="flex items-center justify-center gap-6">
              <button onClick={() => setManoDerecha(m => m - 1)} className="h-16 w-16 bg-red-50 text-red-600 rounded-2xl text-3xl font-black active:scale-95 transition-transform shadow-sm border border-red-100">-</button>
              <div className="w-24 text-center">
                <span className="text-6xl font-black text-[#002e5f]">{manoDerecha}</span>
              </div>
              <button onClick={() => setManoDerecha(m => m + 1)} className="h-16 w-16 bg-green-50 text-green-600 rounded-2xl text-3xl font-black active:scale-95 transition-transform shadow-sm border border-green-100">+</button>
            </div>
          </div>

          {/* Mano Izquierda */}
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase mb-4 text-center tracking-widest">Fuerza Mano Izquierda (kg)</label>
            <div className="flex items-center justify-center gap-6">
              <button onClick={() => setManoIzquierda(m => m - 1)} className="h-16 w-16 bg-red-50 text-red-600 rounded-2xl text-3xl font-black active:scale-95 transition-transform shadow-sm border border-red-100">-</button>
              <div className="w-24 text-center">
                <span className="text-6xl font-black text-[#002e5f]">{manoIzquierda}</span>
              </div>
              <button onClick={() => setManoIzquierda(m => m + 1)} className="h-16 w-16 bg-green-50 text-green-600 rounded-2xl text-3xl font-black active:scale-95 transition-transform shadow-sm border border-green-100">+</button>
            </div>
          </div>

        </div>

        {/* Botón de Guardado */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <button 
            onClick={handleGuardar}
            disabled={guardando}
            className="w-full bg-[#002e5f] text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-900 active:scale-95 transition-all disabled:bg-gray-400 uppercase tracking-wider"
          >
            {guardando ? "Registrando..." : "Guardar Resultados"}
          </button>
        </div>

      </div>
    </main>
  );
}