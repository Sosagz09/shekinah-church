import Navbar from "@/components/Navbar";
import { client } from "../../sanity/lib/client";
export const revalidate = 60

export default async function Mensajes() {
  const videos = await client.fetch(`*[_type == "sermon"] | order(fecha desc) {
    _id,
    titulo,
    subtitulo,
    youtubeId
  }`);

  const reels = ["reel1.mp4", "reel2.mp4", "reel3.mp4", "reel4.mp4"];

  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-8 overflow-hidden" style={{ height: '500px' }}>
        <img src="/mensajes.png" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#060d1a]/75 z-10"></div>
        <div className="relative z-20 flex flex-col items-center gap-4">
          <p className="text-blue-400 text-sm uppercase tracking-widest font-medium">Casa de Dios Shekinah</p>
          <h1 className="text-6xl font-bold text-white mb-2">Mensajes</h1>
          <p className="text-blue-300 text-xl max-w-2xl leading-relaxed">
            Deja que la Palabra de Dios transforme tu vida. Escucha nuestras enseñanzas cuando quieras, donde quieras.
          </p>
        </div>
      </section>

      {/* Enseñanzas */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-white">Enseñanzas</h2>
          <a href="https://www.youtube.com/@CasadeDiosShekinah" target="_blank" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
            Ver canal completo
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </a>
        </div>

        {videos.length === 0 ? (
          <p className="text-blue-300 text-center py-12">No hay sermones publicados aún.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video._id} className="group">
                <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-blue-900 group-hover:ring-blue-500 transition-all" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="pt-4">
                  <p className="text-blue-400 text-xs uppercase tracking-wide font-medium mb-1">{video.subtitulo}</p>
                  <h3 className="text-white font-bold text-lg leading-snug group-hover:text-blue-300 transition-colors">{video.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Reels */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-white">Reels</h2>
          <p className="text-blue-300 mt-2">Contenido corto e inspirador de nuestras redes.</p>
        </div>
        <div className="max-w-6xl mx-auto overflow-x-auto pb-4">
          <div className="flex gap-5" style={{ width: 'max-content' }}>
            {reels.map((reel, i) => (
              <div key={i} className="rounded-2xl overflow-hidden flex-shrink-0 ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ width: '220px', height: '390px' }}>
                <video className="w-full h-full object-cover" controls playsInline preload="metadata">
                  <source src={`/${reel}`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Galería</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '1/1' }}>
            <img src="/1.jpeg" alt="Foto 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '1/1' }}>
            <img src="/2.jpeg" alt="Foto 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '1/1' }}>
            <img src="/3.jpeg" alt="Foto 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '1/1' }}>
            <img src="/4.jpeg" alt="Foto 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '1/1' }}>
            <img src="/5.jpeg" alt="Foto 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '2/1' }}>
            <img src="/6.jpeg" alt="Foto 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '1/1' }}>
            <img src="/7.jpeg" alt="Foto 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '1/1' }}>
            <img src="/8.jpeg" alt="Foto 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden ring-1 ring-blue-900 hover:ring-blue-500 transition-all" style={{ aspectRatio: '2/1' }}>
            <img src="/9.jpeg" alt="Foto 9" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

    </main>
  );
}