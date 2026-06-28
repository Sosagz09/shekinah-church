import Navbar from "@/components/Navbar";

export default function Ministerios() {
  const ministerios = [
    {
      titulo: "Familias en Conexiones de Fe",
      icono: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
      desc: "Un espacio dedicado al fortalecimiento de la familia como base de la sociedad y la iglesia. Aquí las familias se conectan, crecen juntas y edifican su hogar sobre los principios de Dios.",
    },
    {
      titulo: "Gracia y Sabiduría",
      icono: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z",
      desc: "Un ministerio enfocado en la enseñanza profunda de la Palabra de Dios, formando creyentes maduros que vivan con sabiduría y gracia en cada área de su vida.",
    },
    {
      titulo: "Generación de Fuego",
      icono: "M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5 0.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z",
      desc: "El ministerio de jóvenes de Casa de Dios Shekinah. Un lugar donde la juventud encuentra su propósito, adora con pasión y es equipada para impactar su generación.",
    },   
    {
      titulo: "Multimedia",
      icono: "M4 6h16v10H4V6zm16-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4l-2 2v1h12v-1l-2-2h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 9l5-3-5-3v6z",
      desc: "Utiliza la tecnología audiovisual y digital para llevar el evangelio más allá de las paredes de la iglesia: proyección de alabanzas y prédicas, transmisiones en vivo, grabación de mensajes y elaboración de anuncios y contenido para mantener informada a la comunidad.",
    },
    {
      titulo: "Escuelita Bíblica",
      icono: "M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-3.31 0-6 1.79-6 4v2h12v-2c0-2.21-2.69-4-6-4zm-7-3.5c.83 0 1.5-.67 1.5-1.5S5.83 5.5 5 5.5 3.5 6.17 3.5 7 4.17 8.5 5 8.5zm1.5 1.5c-1.4 0-4.5.7-4.5 2.5V14h4v-1.5c0-.66.16-1.55.5-2.5zm12.5-1.5c.83 0 1.5-.67 1.5-1.5S19.83 5.5 19 5.5 17.5 6.17 17.5 7s.67 1.5 1.5 1.5zM24 14v-1.5c0-1.8-3.1-2.5-4.5-2.5.34.95.5 1.84.5 2.5V14h4z",
      desc: "Un espacio vital diseñado para guiar a los más pequeños en su crecimiento espiritual, enseñándoles las Escrituras de manera adecuada a su edad, formando su carácter y desarrollando los talentos que Dios les ha dado.",
    },
    {
      titulo: "Misiones",
      icono: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
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
      icono: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
      desc: "Facilita el desarrollo ordenado de los servicios siendo la primera cara visible de la iglesia: dan la bienvenida, ayudan con la acomodación, gestionan las ofrendas y diezmos, y velan por el orden y la preparación del espacio.",
    },
    {
      titulo: "Iglesia en la Calle",
      icono: "M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM4 18V8h16v10H4zm2-7h2v2H6v-2zm0 4h8v2H6v-2zm10-4h2v2h-2v-2z",
      desc: "Conocido como evangelismo callejero, lleva el mensaje de salvación fuera de las paredes del templo: proclama el evangelio, brinda ayuda práctica a personas vulnerables y conecta a quienes lo necesitan con la congregación.",
    },
    {
      titulo: "Evangelismo",
      icono: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14.5l-3.5-3.5 1.41-1.41L11 12.67l4.59-4.59L17 9.5 11 15.5z",
      desc: "Proclama el evangelio de Jesucristo y extiende el mensaje de salvación a quienes no conocen a Dios, capacitando a los miembros para compartir su fe y dando seguimiento a quienes deciden seguir a Cristo.",
    },
    {
      titulo: "Conservación de Frutos",
      icono: "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5c0 1.61.92 3.4 2.39 4.65C5.55 14.42 8.6 9.65 17 8z",
      desc: "Su función es retener y discipular a los nuevos creyentes que llegan a la congregación, dándoles seguimiento, enseñándoles los principios básicos de la fe y ayudándolos a integrarse plenamente a la vida de la iglesia.",
    },
  ];

  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-8 overflow-hidden" style={{ height: '500px' }}>
        <img src="/ministerios.webp" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#060d1a]/75 z-10"></div>
        <div className="relative z-20 flex flex-col items-center gap-4">
          <p className="text-blue-400 text-sm uppercase tracking-widest font-medium">Casa de Dios Shekinah</p>
          <h1 className="text-5xl font-bold text-white mb-2">Nuestros Ministerios</h1>
          <p className="text-blue-300 text-xl max-w-2xl leading-relaxed">
            Cada ministerio es un espacio diseñado para crecer, servir y encontrarse con Dios.
          </p>
        </div>
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