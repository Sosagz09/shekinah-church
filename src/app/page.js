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
        <a href="/soy-nuevo" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg">
          Únete a nosotros
        </a>
      </section>

      {/* Visión y Misión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="bg-blue-700 p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">Nuestra Visión</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            “Ser una iglesia cristiana evangélica sólida y guiada por el Espíritu Santo, dedicada a
            transformar vidas mediante el poder del Evangelio de Jesucristo, formando
            discípulos comprometidos que impacten la familia, la comunidad y las naciones para
            la gloria de Dios.”
          </p>
        </div>
        <div className="bg-[#0a1f44] p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">Nuestra Misión</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            “Predicar el Evangelio de Jesucristo, enseñar la Palabra de Dios, formar discípulos,
            fortalecer a las familias y servir con amor a la comunidad, promoviendo una vida de
            fe, santidad y servicio bajo la dirección del Espíritu Santo.”
          </p>
        </div>
      </section>

      {/* Horarios de Servicios */}
      <section className="py-20 px-8 bg-[#060d1a]">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#0a1628] rounded-2xl p-8 text-center border border-blue-900 hover:border-blue-500 transition-colors">
            <p className="text-blue-400 font-bold text-lg mb-2">Martes</p>
            <p className="text-white text-3xl font-bold mb-3">6:00 PM</p>
            <p className="text-blue-200 text-sm">Familias en Conexiones de Fe</p>
          </div>
          <div className="bg-[#0a1628] rounded-2xl p-8 text-center border border-blue-900 hover:border-blue-500 transition-colors">
            <p className="text-blue-400 font-bold text-lg mb-2">Jueves</p>
            <p className="text-white text-3xl font-bold mb-3">6:00 PM</p>
            <p className="text-blue-200 text-sm">Gracia y Sabiduría</p>
          </div>
          <div className="bg-[#0a1628] rounded-2xl p-8 text-center border border-blue-900 hover:border-blue-500 transition-colors">
            <p className="text-blue-400 font-bold text-lg mb-2">Sábado</p>
            <p className="text-white text-3xl font-bold mb-3">6:00 PM</p>
            <p className="text-blue-200 text-sm">Generación de Fuego — Jóvenes</p>
          </div>
          <div className="bg-[#0a1628] rounded-2xl p-8 text-center border border-blue-900 hover:border-blue-500 transition-colors">
            <p className="text-blue-400 font-bold text-lg mb-2">Domingo</p>
            <p className="text-white text-3xl font-bold mb-3">9:00 AM</p>
            <p className="text-blue-200 text-sm">Servicio General</p>
          </div>
        </div>
      </section>

      {/* Botón flotante WhatsApp */}
      <a href="https://wa.me/50372989635" target="_blank" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white flex items-center gap-3 px-5 py-3 rounded-full shadow-lg transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.535 5.847L.057 23.571a.75.75 0 00.921.921l5.724-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.362l-.355-.212-3.393.875.891-3.282-.231-.368A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        <span className="font-semibold text-sm">Escríbenos</span>
      </a>

      {/* Footer */}
      <footer className="bg-[#0a1628] py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo y ubicacion */}
          <div className="flex flex-col gap-4">
            <img src="/logo shekinah.PNG" alt="Logo" className="w-20" />
            <p className="text-blue-200 text-sm leading-relaxed">
              Casa de Dios Shekinah — Isaías 35
            </p>
            <p className="text-blue-300 text-sm">
              Colonia San José, Cantón Cara Sucia,<br />
              Ahuachapán, El Salvador
            </p>
            <div className="flex gap-3 mt-2">
              <a href="https://maps.app.goo.gl/sZgGmvF1bLtDdef66" target="_blank" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-xs px-3 py-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Google Maps
              </a>
              <a href="https://waze.com/ul?ll=13.77573077483805,-90.03467911258763&navigate=yes" target="_blank" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-xs px-3 py-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M20.54 6.63C19.3 4.31 17.1 2.6 14.5 2.1c-2.6-.5-5.3.3-7.2 2L6 5.4C3.8 7.3 2.7 10 3 12.8c.2 2 1.2 3.8 2.7 5.1l.3 2.7c.1.6.6 1 1.2.9l2.7-.3c1.3.5 2.7.8 4.1.8 5 0 9-4 9-9 0-2.2-.8-4.3-2.46-5.37zM12 20c-1.1 0-2.2-.2-3.2-.6l-.4-.2-1.8.2-.2-1.8-.2-.4C4.9 16.1 4 14.1 4 12c-.2-2.2.7-4.3 2.4-5.8l1.3-1.3C9 3.7 11.1 3.1 13.1 3.5c2.1.4 3.9 1.8 4.9 3.7C19.3 8.8 20 10.4 20 12c0 4.4-3.6 8-8 8z"/></svg>
                Waze
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg mb-2">Contáctanos</h3>
            <a href="https://wa.me/50372989635" target="_blank" className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.535 5.847L.057 23.571a.75.75 0 00.921.921l5.724-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.362l-.355-.212-3.393.875.891-3.282-.231-.368A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
              +503 7298 9635
            </a>
            <a href="https://www.facebook.com/share/1DyxBj4YLW/?mibextid=wwXIfr" target="_blank" className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="https://youtube.com/@casadediosshekinah" target="_blank" className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
            <a href="https://tiktok.com/@casadediosshekinah" target="_blank" className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              TikTok
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg mb-2">Instagram</h3>
            <a href="https://instagram.com/casadediosshekinah" target="_blank" className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Principal
            </a>
            <a href="https://instagram.com/gdf_shekinah" target="_blank" className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Generación de Fuego
            </a>
          </div>

        </div>
        <div className="text-center text-blue-900 text-xs mt-12">
          © 2026 Casa de Dios Shekinah — Todos los derechos reservados
        </div>
      </footer>

    </main>
  );
}