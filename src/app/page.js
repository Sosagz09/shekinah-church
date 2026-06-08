import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-8 bg-gradient-to-b from-[#0a1628] to-[#060d1a]">
        <h1 className="text-5xl font-bold text-white mb-4">
          Bienvenido a Casa de Dios Shekinah
        </h1>
        <p className="text-xl text-blue-300 mb-8">
          Isaías 35
        </p>
        <a href="/servicios" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg">
          Únete a nosotros
        </a>
      </section>

      {/* Visión y Misión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="bg-blue-700 p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">Nuestra Visión</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Ser una iglesia que transforma vidas a través del amor de Dios, 
            llevando esperanza y restauración a cada familia de nuestra comunidad.
          </p>
        </div>
        <div className="bg-[#0a1f44] p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">Nuestra Misión</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Discipular a cada persona en los principios del reino de Dios, 
            formando creyentes comprometidos con la Palabra y el servicio.
          </p>
        </div>
      </section>

    </main>
  );
}