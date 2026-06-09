import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Nosotros() {
  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-8 bg-gradient-to-b from-[#0a1628] to-[#060d1a]">
        <h1 className="text-5xl font-bold text-white mb-4">Nuestra Historia</h1>
        <p className="text-blue-300 text-lg max-w-2xl">
          Desde el 1 de mayo de 2017, Casa de Dios Shekinah ha sido un lugar de encuentro con Dios, 
          transformando vidas en Cara Sucia, Ahuachapán y más allá.
        </p>
      </section>

      {/* Pastores */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Nuestros Pastores</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image src="/pastores.jpeg" alt="Pastores Carlos y Yensi Rivas" width={700} height={500} className="rounded-2xl w-full object-cover shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-1">Pastor Carlos Armando Rivas</h3>
              <p className="text-blue-400 font-medium mb-4">Pastor Principal</p>
              <p className="text-blue-200 leading-relaxed">
                Hombre de fe y visión, el Pastor Carlos ha dedicado su vida a guiar a su congregación 
                en los caminos de Dios, con un corazón apasionado por ver vidas transformadas 
                por el poder del Espíritu Santo.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-1">Pastora Yensi Ayala de Rivas</h3>
              <p className="text-blue-400 font-medium mb-4">Pastora</p>
              <p className="text-blue-200 leading-relaxed">
                La Pastora Yensi es un pilar de amor y servicio en la iglesia, 
                ministrando con gracia y dedicación a cada familia de la congregación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="py-20 px-8 bg-[#0a1628]">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Nuestra Trayectoria</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <Image src="/inicio.jpeg" alt="Inicios 2017" width={500} height={300} className="rounded-2xl w-full object-cover shadow-xl" />
            <div className="bg-blue-700 text-white font-bold text-xl px-6 py-2 rounded-full">2017</div>
            <h3 className="text-white font-bold text-xl">Los Inicios</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              El 1 de mayo de 2017 nació Casa de Dios Shekinah en casa de la familia Martínez, 
              con inicios humildes pero con una gran visión de Dios.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="hidden md:block w-16 h-1 bg-blue-600"></div>
          </div>
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <Image src="/presente.jpeg" alt="Hoy 2026" width={500} height={300} className="rounded-2xl w-full object-cover shadow-xl" />
            <div className="bg-blue-700 text-white font-bold text-xl px-6 py-2 rounded-full">2026</div>
            <h3 className="text-white font-bold text-xl">Hoy</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Hoy somos una iglesia con 4 ministerios activos 
              y una comunidad creciente unida por el amor de Dios. 
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-8 bg-[#060d1a]">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Nuestros Valores</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { titulo: "Amor a Dios", desc: "Dios ocupa el primer lugar mediante la adoración, la obediencia y la comunión diaria." },
            { titulo: "Autoridad de la Palabra", desc: "Reconocemos la Biblia como la autoridad suprema de fe, conducta y enseñanza cristiana." },
            { titulo: "Oración y Dependencia", desc: "Fomentamos una vida de oración constante y dependencia del Espíritu Santo." },
            { titulo: "Evangelismo", desc: "Compartimos el mensaje de salvación de Jesucristo con pasión y compromiso." },
            { titulo: "Discipulado", desc: "Formamos creyentes maduros que vivan conforme al carácter de Cristo." },
            { titulo: "Servicio y Compasión", desc: "Servimos a nuestra comunidad con amor, humildad y solidaridad." },
            { titulo: "Integridad y Testimonio", desc: "Promovemos una conducta transparente, ética y coherente con la fe cristiana." },
          ].map((valor, i) => (
            <div key={i} className="bg-[#0a1628] rounded-2xl p-8 border border-blue-900 hover:border-blue-500 transition-colors">
              <h3 className="text-white font-bold text-lg mb-3">{valor.titulo}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{valor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estadisticas */}
      <section className="py-16 px-8 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-blue-400 mb-2">9</p>
            <p className="text-white font-medium">Años de ministerio</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-400 mb-2">4</p>
            <p className="text-white font-medium">Ministerios activos</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-400 mb-2">1</p>
            <p className="text-white font-medium">Comunidad unida</p>
          </div>
        </div>
      </section>

    </main>
  );
}