'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AgilidadPage() {
  const router = useRouter();
  
  const [tiempo, setTiempo] = useState(0); 
  const [corriendo, setCorriendo] = useState(false);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    if (corriendo) {
      intervalo = setInterval(() => {
        setTiempo((prev) => prev + 10);
      }, 10);
    } else if (!corriendo) {
      clearInterval(intervalo!);
    }
    return () => clearInterval(intervalo!);
  }, [corriendo]);

  // Para agilidad, normalmente no pasamos de 1 minuto, así que destacamos los segundos.
  const segundos = ("0" + Math.floor((tiempo / 1000) % 60)).slice(-2);
  const milisegundos = ("0" + ((tiempo / 10) % 100)).slice(-2);

  const handleGuardar = () => {
    setGuardando(true);
    setTimeout(() => {
      alert(`¡Tiempo de agilidad registrado!\nTiempo: ${segundos}.${milisegundos} seg`);
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
            <h1 className="text-xl font-black">Prueba de Agilidad</h1>
            <p className="text-xs text-green-300 uppercase tracking-widest font-bold">Circuito Zig-Zag</p>
          </div>
        </div>

        {/* Ficha del Cadete */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Evaluando a:</p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-xl shadow-inner border border-green-200">
              👩🏽‍🦱
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">Ana Torres</p>
              <p className="text-xs text-gray-500 font-medium">Placa: <span className="font-bold text-[#002e5f]">#1105</span> | Edad: 29</p>
            </div>
          </div>
        </div>

        {/* Cronómetro de Agilidad */}
        <div className="p-8 space-y-8 flex flex-col items-center">
          <label className="block text-xs font-black text-gray-400 uppercase tracking-widest text-center">Tiempo de Circuito</label>
          
          <div className="bg-gray-900 text-white w-full rounded-3xl py-10 flex justify-center items-end gap-2 font-mono shadow-inner border-4 border-gray-800">
            <span className="text-7xl font-black text-green-400">{segundos}</span>
            <span className="text-4xl font-bold text-gray-500 pb-2">.</span>
            <span className="text-5xl font-black text-white pb-1">{milisegundos}</span>
            <span className="text-xl font-bold text-gray-500 pb-2 ml-2">seg</span>
          </div>

          {/* Botón Táctil Gigante (Start/Stop rápido) */}
          <button 
            onClick={() => setCorriendo(!corriendo)} 
            className={`w-full py-6 rounded-3xl font-black text-white text-2xl shadow-lg active:scale-95 transition-all uppercase tracking-wider ${corriendo ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
          >
            {corriendo ? 'DETENER' : 'ARRANCAR'}
          </button>

          {/* Botón de Reset Discreto */}
          <button 
            onClick={() => { setCorriendo(false); setTiempo(0); }} 
            disabled={corriendo || tiempo === 0}
            className="text-sm font-bold text-gray-400 hover:text-gray-600 underline disabled:opacity-0 transition-opacity"
          >
            Reiniciar cronómetro
          </button>
        </div>

        {/* Botón de Guardado */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <button 
            onClick={handleGuardar}
            disabled={guardando || corriendo || tiempo === 0}
            className="w-full bg-[#002e5f] text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-900 active:scale-95 transition-all disabled:bg-gray-400 uppercase tracking-wider"
          >
            {guardando ? "Registrando..." : "Guardar Resultados"}
          </button>
        </div>

      </div>
    </main>
  );
}