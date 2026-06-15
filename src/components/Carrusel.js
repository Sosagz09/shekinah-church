"use client";
import { useState, useEffect } from "react";

export default function Carrusel() {
  const fotos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % fotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [fotos.length]);

  return (
    <section className="py-16 px-8 bg-[#060d1a]">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Nuestra Iglesia en Imágenes</h2>
      <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden ring-1 ring-blue-900" style={{ aspectRatio: '16/9' }}>
        {fotos.map((num, i) => (
          <img
            key={num}
            src={`/${num}.jpeg`}
            alt={`Foto ${num}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === actual ? 1 : 0 }}
          />
        ))}

        {/* Puntos indicadores */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
          {fotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActual(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === actual ? 'bg-blue-400' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}