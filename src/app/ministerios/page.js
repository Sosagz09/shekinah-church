import Navbar from "@/components/Navbar";

export default function Ministerios() {
  const ministerios = [
    {
      titulo: "Familias en Conexiones de Fe",
      horario: "Martes — 6:00 PM",
      icono: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
      desc: "Un espacio dedicado al fortalecimiento de la familia como base de la sociedad y la iglesia. Aquí las familias se conectan, crecen juntas y edifican su hogar sobre los principios de Dios.",
    },
    {
      titulo: "Gracia y Sabiduría",
      horario: "Jueves — 6:00 PM",
      icono: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z",
      desc: "Un ministerio enfocado en la enseñanza profunda de la Palabra de Dios, formando creyentes maduros que vivan con sabiduría y gracia en cada área de su vida.",
    },
    {
      titulo: "Generación de Fuego",
      horario: "Sábado — 6:00 PM",
      icono: "M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5 0.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z",
      desc: "El ministerio de jóvenes de Casa de Dios Shekinah. Un lugar donde la juventud encuentra su propósito, adora con pasión y es equipada para impactar su generación.",
    },
    {
      titulo: "Servicio General",
      horario: "Domingo — 9:00 AM",
      icono: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
      desc: "Nuestro culto principal donde toda la familia de Casa de Dios Shekinah se reúne para adorar, recibir la Palabra y crecer juntos en comunidad.",
    },
    {
      titulo: "Multimedia",
      icono: "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h5v2h8v-2h5c1.1 0 2-.89 2-2V5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z",
      desc: "Utiliza la tecnología audiovisual y digital para llevar el evangelio más allá de las paredes de la iglesia: proyección de alabanzas y prédicas, transmisiones en vivo, grabación de mensajes y elaboración de anuncios y contenido para mantener informada a la comunidad.",
    },
    {
      titulo: "Escuelita Bíblica",
      icono: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
      desc: "Un espacio vital diseñado para guiar a los más pequeños en su crecimiento espiritual, enseñándoles las Escrituras de manera adecuada a su edad, formando su carácter y desarrollando los talentos que Dios les ha dado.",
    },
    {
      titulo: "Misiones",
      icono: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      desc: "Lleva a cabo la Gran Comisión extendiendo el Reino de Dios a través del envío y sostén de misioneros, ayuda humanitaria, evangelismo local e intercesión por los pueblos no alcanzados.",
    },
    {
      titulo: "Intercesión",
      icono: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
      desc: "Es la columna vertebral espiritual y la muralla protectora de la congregación. Los intercesores oran por las necesidades de la iglesia, dan cobertura a los líderes y preparan el camino para el avivamiento y el evangelismo.",
    },
    {
      titulo: "Alabanza",
      icono: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
      desc: "Guía a la congregación en la exaltación y adoración a Dios a través de la música y el canto, ayudando a enfocar el corazón en Su presencia, edificar a la iglesia y fomentar la unidad de la comunidad.",
    },
    {
      titulo: "Servidores",
      icono: "M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.984 2.984 0 0 0 17.06 6.5c-.74 0-1.38.38-1.76.95l-1.36 2.05c-.32.5-.32 1.14 0 1.64L15.5 14H18v8h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5C9 8.12 7.88 7 6.5 7h-2C3.12 7 2 8.12 2 9.5V15h1.5v7h4z",
      desc: "Facilita el desarrollo ordenado de los servicios siendo la primera cara visible de la iglesia: dan la bienvenida, ayudan con la acomodación, gestionan las ofrendas y diezmos, y velan por el orden y la preparación del espacio.",
    },
    {
      titulo: "Iglesia en la Calle",
      icono: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
      desc: "Conocido como evangelismo callejero, lleva el mensaje de salvación fuera de las paredes del templo: proclama el evangelio, brinda ayuda práctica a personas vulnerables y conecta a quienes lo necesitan con la congregación.",
    },
    {
      titulo: "Evangelismo",
      icono: "M12 2L1 21h22L12 2zm0 3.84L18.93 19H5.07L12 5.84zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z",
      desc: "Proclama el evangelio de Jesucristo y extiende el mensaje de salvación a quienes no conocen a Dios, capacitando a los miembros para compartir su fe y dando seguimiento a quienes deciden seguir a Cristo.",
    },
    {
      titulo: "Conservación de Frutos",
      icono: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
      desc: "Su función es retener y discipular a los nuevos creyentes que llegan a la congregación, dándoles seguimiento, enseñándoles los principios básicos de la fe y ayudándolos a integrarse plenamente a la vida de la iglesia.",
    },
  ];

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
          {ministerios.map((m, i) => (
            <div key={i} className="bg-[#0a1628] rounded-2xl p-10 border border-blue-900 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-700 rounded-full p-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d={m.icono}/></svg>
                </div>
                <div>
                  {m.horario && <p className="text-blue-400 text-sm font-medium uppercase tracking-wide">{m.horario}</p>}
                  <h2 className="text-2xl font-bold text-white">{m.titulo}</h2>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}