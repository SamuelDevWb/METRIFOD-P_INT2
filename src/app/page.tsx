import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center">
      <h1 className="text-5xl font-black text-blue-900 tracking-tighter">METRIFOD</h1>
      <p className="mt-4 text-xl text-gray-600 max-w-md">
        Sistema de optimización para la gestión de pruebas físicas de la Facultad de Organización Deportiva.
      </p>
      <div className="mt-10">
        <Link 
          href="/login" 
          className="rounded-full bg-blue-900 px-8 py-4 font-bold text-white shadow-xl hover:bg-blue-800 transition-all"
        >
          Acceder al Panel
        </Link>
      </div>
    </main>
  );
}