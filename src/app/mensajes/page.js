import Navbar from "@/components/Navbar";

export default function Mensajes() {
  const videos = [
    {
      id: "1",
      titulo: "¿Cómo te sientes Mamá? - Servicio General Honrando a las Madres",
      embedId: "0DAxX6CXa-Q",
    },
    {
      id: "2",
      titulo: "La Omnipotencia de Dios - Jueves de Enseñanza",
      embedId: "U4Qc6TYf4dI",
    },
    {
      id: "3",
      titulo: "Amado deseo que seas prosperado - Prédica Servicio General",
      embedId: "l4hdWhc6P4s",
    },
  ];

  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero con logos decorativos */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-8 overflow-hidden">
        
        {/* Fondo degradado */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#060d1a] to-[#0a1628]"></div>

        {/* Logos decorativos flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* YouTube */}
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-10 left-10 w-20 h-20 opacity-5" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-10 right-20 w-32 h-32 opacity-5" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/4 w-14 h-14 opacity-5" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>

          {/* TikTok */}
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-16 right-16 w-16 h-16 opacity-5" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-20 left-16 w-24 h-24 opacity-5" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>

          {/* Facebook */}
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/3 right-1/4 w-18 h-18 opacity-5" viewBox="0 0 24 24" fill="white" style={{width:'72px', height:'72px'}}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-1/3 left-1/3 w-12 h-12 opacity-5" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>

          {/* Circulos decorativos */}
          <div className="absolute top-20 left-1/2 w-64 h-64 rounded-full border border-blue-900 opacity-10"></div>
          <div className="absolute bottom-10 right-1/3 w-40 h-40 rounded-full border border-blue-800 opacity-10"></div>
          <div className="absolute top-1/2 left-10 w-20 h-20 rounded-full border border-blue-700 opacity-10"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <p className="text-blue-400 text-sm uppercase tracking-widest font-medium">Casa de Dios Shekinah</p>
          <h1 className="text-6xl font-bold text-white mb-2">Mensajes</h1>
          <p className="text-blue-300 text-xl max-w-2xl leading-relaxed">
            Deja que la Palabra de Dios transforme tu vida. Escucha nuestras predicaciones cuando quieras, donde quieras.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Mensajes Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-[#0a1628] rounded-2xl overflow-hidden border border-blue-900 hover:border-blue-500 transition-colors group">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-base leading-snug group-hover:text-blue-300 transition-colors">{video.titulo}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Ver mas */}
        <div className="flex justify-center mt-16">
          <a href="https://www.youtube.com/@CasadeDiosShekinah" target="_blank" className="flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Ver todos en YouTube
          </a>
        </div>
      </section>

    </main>
  );
}