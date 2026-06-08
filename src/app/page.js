import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />
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
    </main>
  );
}