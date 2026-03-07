'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Base de datos simulada (Humo y espejos para la revisión)
const oficialesMock = [
  { id: 1, nombre: 'Juan Pérez', placa: '4589', edad: 28, sexo: 'M', estatus: 'Pendiente' },
  { id: 2, nombre: 'María González', placa: '3921', edad: 25, sexo: 'F', estatus: 'Pendiente' },
  { id: 3, nombre: 'Carlos Ramírez', placa: '8842', edad: 31, sexo: 'M', estatus: 'En progreso' },
  { id: 4, nombre: 'Ana Torres', placa: '1105', edad: 29, sexo: 'F', estatus: 'Completado' },
];

export default function SeleccionOficialPage() {
  const router = useRouter();
  const [busqueda, setBusqueda] = useState('');

  // Lógica para filtrar la lista en tiempo real
  const oficialesFiltrados = oficialesMock.filter(oficial =>
    oficial.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    oficial.placa.includes(busqueda)
  );

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Encabezado con Botón de Regreso */}
        <header className="flex items-center gap-4 bg-[#002e5f] p-6 rounded-3xl text-white shadow-lg">
          <button 
            onClick={() => router.push('/dashboard')}
            className="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-xl font-bold active:scale-95"
          >
            ←
          </button>
          <div>
            <h1 className="text-xl font-black tracking-tight">Selección de Personal</h1>
            <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest mt-1">Nueva Evaluación</p>
          </div>
        </header>

        {/* Buscador interactivo y Botón de Escáner */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input 
                type="text" 
                placeholder="Buscar por nombre o placa..." 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#002e5f] transition-all"
              />
            </div>
            <button className="bg-[#002e5f] text-white px-5 rounded-2xl shadow-md hover:bg-blue-900 active:scale-95 transition-all flex items-center justify-center gap-2">
              <span className="text-xl">📷</span>
              <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">Escanear</span>
            </button>
          </div>
        </div>

        {/* Lista de Oficiales */}
        <div className="space-y-3">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2 mb-2">Directorio de Cadetes</h2>
          
          {oficialesFiltrados.length > 0 ? (
            oficialesFiltrados.map((oficial) => (
              <div key={oficial.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 bg-blue-50 rounded-full flex items-center justify-center text-2xl border border-blue-100 shadow-inner">
                    {oficial.sexo === 'M' ? '👮🏽‍♂️' : '👮🏽‍♀️'}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{oficial.nombre}</h3>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      Placa: <span className="text-[#002e5f] font-black">#{oficial.placa}</span> | Edad: {oficial.edad}
                    </p>
                  </div>
                </div>
                
                {/* Botón que nos llevará a la estación de pruebas */}
                <button 
                  onClick={() => router.push('/dashboard/agarre')} 
                  className="bg-green-100 text-green-700 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-green-200 active:scale-95 transition-all shadow-sm"
                >
                  Evaluar
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-bold text-lg">No se encontró al oficial 🕵🏽‍♂️</p>
              <p className="text-xs text-gray-400 mt-2">Verifica el nombre o número de placa.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}