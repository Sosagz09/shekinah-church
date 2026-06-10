import Navbar from "@/components/Navbar";

export default function Ministerios() {
  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-8 bg-gradient-to-b from-[#0a1628] to-[#060d1a]">
        <h1 className="text-5xl font-bold text-white mb-4">Nuestros Ministerios</h1>
        <p className="text-blue-300 text-lg max-w-2xl">
          Cada ministerio es un espacio diseñado para crecer, servir y encontrarse con Dios.
        </p>
      </section>

      {/* Ministerios */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Familias en Conexiones de Fe */}
          <div className="bg-[#0a1628] rounded-2xl p-10 border border-blue-900 hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-700 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Familias en Conexiones de Fe</h2>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Un espacio dedicado al fortalecimiento de la familia como base de la sociedad y la iglesia. 
              Aquí las familias se conectan, crecen juntas y edifican su hogar sobre los principios de Dios.
            </p>
          </div>

          {/* Gracia y Sabiduría */}
          <div className="bg-[#0a1628] rounded-2xl p-10 border border-blue-900 hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-700 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Gracia y Sabiduría</h2>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Un ministerio enfocado en la enseñanza profunda de la Palabra de Dios, 
              formando creyentes maduros que vivan con sabiduría y gracia en cada área de su vida.
            </p>
          </div>

          {/* Generación de Fuego */}
          <div className="bg-[#0a1628] rounded-2xl p-10 border border-blue-900 hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-700 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5 0.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Generación de Fuego</h2>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              El ministerio de jóvenes de Casa de Dios Shekinah. Un lugar donde la juventud 
              encuentra su propósito, adora con pasión y es equipada para impactar su generación.
            </p>
          </div>

          {/* Servicio General */}
          <div className="bg-[#0a1628] rounded-2xl p-10 border border-blue-900 hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-700 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Servicio General</h2>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Nuestro culto principal donde toda la familia de Casa de Dios Shekinah se reúne 
              para adorar, recibir la Palabra y crecer juntos en comunidad.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}