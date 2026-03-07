'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResistenciaPage() {
  const router = useRouter();
  
  // Estados para el cronómetro
  const [tiempo, setTiempo] = useState(0); // Tiempo en milisegundos
  const [corriendo, setCorriendo] = useState(false);
  const [guardando, setGuardando] = useState(false);

  // La "Magia" del Cronómetro (Se ejecuta cada 10 milisegundos)
  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    if (corriendo) {
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 10);
      }, 10);
    } else if (!corriendo) {
      clearInterval(intervalo!);
    }
    return () => clearInterval(intervalo!);
  }, [corriendo]);

  // Matemáticas para darle formato al tiempo (00:00:00)
  const minutos = ("0" + Math.floor((tiempo / 60000) % 60)).slice(-2);
  const segundos = ("0" + Math.floor((tiempo / 1000) % 60)).slice(-2);
  const milisegundos = ("0" + ((tiempo / 10) % 100)).slice(-2);

  const handleGuardar = () => {
    setGuardando(true);
    setTimeout(() => {
      alert(`¡Tiempo de resistencia registrado!\nTiempo total: ${minutos}:${segundos}:${milisegundos}`);
      router.push('/dashboard');
    }, 1000);
  };

  const reiniciarCronometro = () => {
    setCorriendo(false);
    setTiempo(0);
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
            <h1 className="text-xl font-black">Prueba de Resistencia</h1>
            <p className="text-xs text-blue-200 uppercase tracking-widest">Carrera de 12 min / Cooper</p>
          </div>
        </div>

        {/* Ficha del Cadete */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Evaluando a:</p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-xl shadow-inner border border-red-200">
              🏃🏽‍♂️
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">Carlos Ramírez</p>
              <p className="text-xs text-gray-500 font-medium">Placa: <span className="font-bold text-[#002e5f]">#8842</span> | Edad: 31</p>
            </div>
          </div>
        </div>

        {/* Pantalla del Cronómetro */}
        <div className="p-8 space-y-8 flex flex-col items-center">
          <label className="block text-xs font-black text-gray-400 uppercase tracking-widest text-center">Tiempo Transcurrido</label>
          
          <div className="bg-gray-900 text-white w-full rounded-3xl py-8 px-4 shadow-inner flex justify-center items-end gap-2 font-mono">
            <span className="text-6xl font-black">{minutos}</span>
            <span className="text-4xl font-bold text-gray-400 pb-1">:</span>
            <span className="text-6xl font-black">{segundos}</span>
            <span className="text-4xl font-bold text-gray-400 pb-1">:</span>
            <span className="text-4xl font-black text-red-500 pb-1">{milisegundos}</span>
          </div>

          {/* Controles del Cronómetro (Botones Táctiles) */}
          <div className="flex w-full gap-4">
            <button 
              onClick={() => setCorriendo(!corriendo)} 
              className={`flex-1 py-4 rounded-2xl font-black text-white text-lg shadow-md active:scale-95 transition-all uppercase tracking-wider ${corriendo ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
            >
              {corriendo ? 'Pausar' : 'Iniciar'}
            </button>
            
            <button 
              onClick={reiniciarCronometro} 
              disabled={corriendo}
              className="px-6 py-4 rounded-2xl font-black text-gray-600 bg-gray-200 hover:bg-gray-300 shadow-md active:scale-95 transition-all uppercase tracking-wider disabled:opacity-50"
            >
              Reset
            </button>
          </div>
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