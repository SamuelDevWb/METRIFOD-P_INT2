'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Base de datos simulada de evaluaciones terminadas
const resultadosMock = [
  { id: 1, nombre: 'Ana Torres', placa: '1105', fecha: '05 Mar 2026', estatus: 'Apto', puntaje: 95, color: 'text-green-600', bg: 'bg-green-100' },
  { id: 2, nombre: 'Juan Pérez', placa: '4589', fecha: '05 Mar 2026', estatus: 'Apto', puntaje: 88, color: 'text-green-600', bg: 'bg-green-100' },
  { id: 3, nombre: 'Carlos Ramírez', placa: '8842', fecha: '04 Mar 2026', estatus: 'No Apto', puntaje: 55, color: 'text-red-600', bg: 'bg-red-100' },
  { id: 4, nombre: 'María González', placa: '3921', fecha: '02 Mar 2026', estatus: 'Pendiente', puntaje: '--', color: 'text-yellow-600', bg: 'bg-yellow-100' },
];

export default function HistorialPage() {
  const router = useRouter();
  const [busqueda, setBusqueda] = useState('');

  const filtrados = resultadosMock.filter(res =>
    res.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    res.placa.includes(busqueda)
  );

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Encabezado */}
        <header className="flex items-center gap-4 bg-[#002e5f] p-6 rounded-3xl text-white shadow-lg">
          <button 
            onClick={() => router.push('/dashboard')}
            className="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-xl font-bold active:scale-95"
          >
            ←
          </button>
          <div>
            <h1 className="text-xl font-black tracking-tight">Historial de Evaluaciones</h1>
            <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest mt-1">Reportes y Dictámenes</p>
          </div>
        </header>

        {/* Buscador y Filtros */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-4">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Buscar por nombre o placa..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#002e5f] transition-all"
            />
          </div>
          <button className="bg-gray-100 text-gray-600 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors">
            Filtrar
          </button>
        </div>

        {/* Lista de Resultados */}
        <div className="space-y-4">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2 mb-2">Últimos Registros</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtrados.length > 0 ? (
              filtrados.map((res) => (
                <div key={res.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                        {res.id % 2 === 0 ? '👮🏽‍♂️' : '👮🏽‍♀️'}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{res.nombre}</h3>
                        <p className="text-xs text-gray-500 font-medium">Placa: <span className="font-bold text-[#002e5f]">#{res.placa}</span></p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-gray-800">{res.puntaje}</span>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Score</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                      📅 {res.fecha}
                    </span>
                    <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider ${res.bg} ${res.color}`}>
                      {res.estatus}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-bold text-lg">No se encontraron registros 📄</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}