import Navbar from "@/components/Navbar";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

export const revalidate = 60

export default async function Eventos() {
  const eventos = await client.fetch(`*[_type == "evento"] | order(fecha asc) {
    _id, titulo, descripcion, fecha, imagen
  }`);

  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-8 overflow-hidden" style={{ height: '400px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#060d1a]"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <p className="text-blue-400 text-sm uppercase tracking-widest font-medium">Casa de Dios Shekinah</p>
          <h1 className="text-5xl font-bold text-white mb-2">Eventos</h1>
          <p className="text-blue-300 text-xl max-w-2xl leading-relaxed">
            Mantente al día con todas las actividades y eventos especiales de nuestra iglesia.
          </p>
        </div>
      </section>

      {/* Lista de eventos */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        {eventos.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-blue-300 text-xl">No hay eventos próximos por ahora.</p>
            <p className="text-blue-500 mt-2">Vuelve pronto para más novedades.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventos.map((evento) => (
              <div key={evento._id} className="bg-[#0a1628] rounded-2xl overflow-hidden border border-blue-900 hover:border-blue-500 transition-colors">
                {evento.imagen && (
                  <img
                    src={urlFor(evento.imagen).width(800).height(400).fit('crop').url()}
                    alt={evento.titulo}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-8">
                  <p className="text-blue-400 text-sm font-medium mb-2">
                    {new Date(evento.fecha).toLocaleDateString('es-SV', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-3">{evento.titulo}</h2>
                  {evento.descripcion && (
                    <p className="text-blue-200 leading-relaxed">{evento.descripcion}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}