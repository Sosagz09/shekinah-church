"use client";
import { useState, useEffect } from "react";

export default function HeroCarrusel() {
  const fotos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % fotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [fotos.length]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden" style={{ height: '600px' }}>
      
      {/* Fotos de fondo */}
      {fotos.map((num, i) => (
        <img
          key={num}
          src={`/${num}.webp`}
          alt={`Foto ${num}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0"
          style={{ opacity: i === actual ? 1 : 0 }}
        />
      ))}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[#060d1a]/70 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center gap-4 px-8">
        <h1 className="text-5xl font-bold text-white mb-2">
          Bienvenido a Casa de Dios Shekinah
        </h1>
        <p className="text-xl text-blue-300 mb-4">
          Isaías 35
        </p>
        <a href="/soy-nuevo" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg">
          Únete a nosotros
        </a>
      </div>

      {/* Puntos indicadores */}
      <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-20">
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActual(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === actual ? 'bg-blue-400' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}