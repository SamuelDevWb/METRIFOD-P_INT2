'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SaltoPage() {
  const router = useRouter();
  const [salto, setSalto] = useState(40); // Centímetros base
  const [guardando, setGuardando] = useState(false);

  const handleGuardar = () => {
    setGuardando(true);
    setTimeout(() => {
      alert(`¡Prueba de salto registrada!\nDistancia/Altura: ${salto} cm`);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden mt-4">
        
        {/* Encabezado */}
        <div className="bg-[#002e5f] p-6 text-white flex items-center gap-4">
          <button onClick={() => router.push('/dashboard/seleccion')} className="text-2xl font-bold bg-white/20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/30 transition active:scale-95">
            ←
          </button>
          <div>
            <h1 className="text-xl font-black">Prueba de Salto</h1>
            <p className="text-xs text-yellow-500 uppercase tracking-widest font-bold">Salto Vertical</p>
          </div>
        </div>

        {/* Ficha del Cadete */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Evaluando a:</p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center text-xl shadow-inner border border-yellow-200">
              👩🏽‍🦱
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">María González</p>
              <p className="text-xs text-gray-500 font-medium">Placa: <span className="font-bold text-[#002e5f]">#3921</span> | Edad: 25</p>
            </div>
          </div>
        </div>

        {/* Controles de Medición en Centímetros */}
        <div className="p-8 space-y-6 flex flex-col items-center">
          <label className="block text-xs font-black text-gray-400 uppercase tracking-widest text-center">Distancia Alcanzada</label>
          
          {/* Pantalla del número */}
          <div className="bg-gray-50 w-full rounded-3xl py-8 flex justify-center items-end gap-2 border-2 border-gray-100 shadow-inner">
            <span className="text-7xl font-black text-[#002e5f]">{salto}</span>
            <span className="text-2xl font-bold text-gray-400 pb-2">cm</span>
          </div>

          {/* Botones de ajuste rápido y preciso */}
          <div className="w-full grid grid-cols-4 gap-3">
            <button onClick={() => setSalto(s => s - 5)} className="h-16 bg-red-100 text-red-700 rounded-2xl text-xl font-black active:scale-95 transition-transform shadow-sm hover:bg-red-200">-5</button>
            <button onClick={() => setSalto(s => s - 1)} className="h-16 bg-red-50 text-red-600 rounded-2xl text-2xl font-black active:scale-95 transition-transform shadow-sm hover:bg-red-100">-1</button>
            <button onClick={() => setSalto(s => s + 1)} className="h-16 bg-green-50 text-green-600 rounded-2xl text-2xl font-black active:scale-95 transition-transform shadow-sm hover:bg-green-100">+1</button>
            <button onClick={() => setSalto(s => s + 5)} className="h-16 bg-green-100 text-green-700 rounded-2xl text-xl font-black active:scale-95 transition-transform shadow-sm hover:bg-green-200">+5</button>
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