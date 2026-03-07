'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const estaciones = [
    { id: 1, nombre: 'Agarre', icono: '💪', color: 'bg-blue-500', ruta: '/dashboard/agarre' },
    { id: 2, nombre: 'Salto', icono: '🚀', color: 'bg-yellow-500', ruta: '/dashboard/salto' },
    { id: 3, nombre: 'Agilidad', icono: '⚡', color: 'bg-green-500', ruta: '/dashboard/agilidad' },
    { id: 4, nombre: 'Resistencia', icono: '🏃', color: 'bg-red-500', ruta: '/dashboard/resistencia' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Encabezado Principal */}
        <header className="flex justify-between items-center bg-[#002e5f] p-6 rounded-3xl text-white shadow-lg mt-2">
          <div>
            <h1 className="text-2xl font-black tracking-tight">METRIFOD</h1>
            <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest mt-1">Panel de Inicio</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center text-lg mb-1 shadow-inner">
              👨🏽‍💻
            </div>
            <span className="text-[10px] font-bold tracking-wider uppercase">S. Lara</span>
          </div>
        </header>

        {/* Panel de Estado Offline (Justifica la app móvil en tu revisión) */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 h-12 w-12 rounded-full flex items-center justify-center text-xl">⚠️</div>
            <div>
              <h3 className="text-sm font-black text-yellow-800 uppercase tracking-tight">Datos sin sincronizar</h3>
              <p className="text-xs text-yellow-600 font-medium">3 pruebas locales.</p>
            </div>
          </div>
          <button className="bg-yellow-500 text-white text-xs font-black uppercase px-4 py-3 rounded-xl shadow-md hover:bg-yellow-600 active:scale-95 transition-all">
            Subir Nube
          </button>
        </div>

        {/* Módulos Principales */}
        <div>
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 ml-2">Módulos Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Módulo: Nueva Evaluación */}
            <button 
              onClick={() => router.push('/dashboard/seleccion')}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl transition-all hover:-translate-y-1 border border-gray-100 text-left flex items-center gap-5"
            >
              <div className="bg-blue-50 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl shadow-inner group-hover:bg-[#002e5f] transition-colors">
                <span className="group-hover:scale-110 transition-transform">📋</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-800">Nueva Evaluación</h3>
                <p className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">Buscar oficial y registrar métricas.</p>
              </div>
            </button>

            {/* Módulo: Historial de Resultados */}
            <button 
              onClick={() => router.push('/dashboard/historial')}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl transition-all hover:-translate-y-1 border border-gray-100 text-left flex items-center gap-5"
            >
              <div className="bg-green-50 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl shadow-inner group-hover:bg-green-600 transition-colors">
                <span className="group-hover:scale-110 transition-transform">📊</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-800">Historial</h3>
                <p className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">Consultar resultados previos.</p>
              </div>
            </button>

          </div>
        </div>

        {/* Accesos Rápidos a Estaciones */}
        <div className="pt-4">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 ml-2">Acceso a Estaciones</h2>
          <div className="grid grid-cols-2 gap-4">
            {estaciones.map((estacion) => (
              <button 
                key={estacion.id}
                onClick={() => router.push(estacion.ruta)}
                className="bg-white p-4 rounded-3xl shadow-md border border-gray-50 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 active:scale-95 transition-all text-center"
              >
                <div className={`${estacion.color} h-12 w-12 rounded-full flex items-center justify-center text-xl text-white shadow-inner`}>
                  {estacion.icono}
                </div>
                <span className="text-xs font-bold text-gray-700">{estacion.nombre}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}