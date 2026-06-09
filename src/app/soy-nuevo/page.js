"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function SoyNuevo() {
  const [form, setForm] = useState({ nombre: "", edad: "", telefono: "", direccion: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Hola, mi nombre es ${form.nombre}, tengo ${form.edad} años, mi teléfono es ${form.telefono}, vivo en ${form.direccion}. Me gustaría ser parte de Casa de Dios Shekinah.`;
    const url = `https://wa.me/50372989635?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero con imagen de fondo */}
      <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
        <img src="/soynuevo.jpeg" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(6,13,26,0.72)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 2rem' }}>
          <h1 className="text-5xl font-bold text-white leading-tight mb-4">
            ¡Te estábamos esperando!
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl leading-relaxed">
            Casa de Dios Shekinah es un lugar donde el alma descansa, 
            la familia crece y la vida es transformada por el amor de Dios.
          </p>
          <p className="text-blue-300 text-md mt-3">
            Llena el formulario y nos pondremos en contacto contigo.
          </p>
        </div>
      </div>

      {/* Formulario */}
      <section className="flex flex-col items-center py-16 px-8">
        <form onSubmit={handleSubmit} className="bg-[#0a1628] rounded-2xl p-10 w-full max-w-xl flex flex-col gap-6 border border-blue-900">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Cuéntanos sobre ti</h2>
          <div className="flex flex-col gap-2">
            <label className="text-blue-300 text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              Nombre completo
            </label>
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre completo" className="bg-[#060d1a] border border-blue-900 rounded-xl px-4 py-3 text-white placeholder-blue-900 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-300 text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
              Edad
            </label>
            <input type="number" name="edad" value={form.edad} onChange={handleChange} required placeholder="Tu edad" className="bg-[#060d1a] border border-blue-900 rounded-xl px-4 py-3 text-white placeholder-blue-900 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-300 text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              Teléfono
            </label>
            <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required placeholder="Tu número de teléfono" className="bg-[#060d1a] border border-blue-900 rounded-xl px-4 py-3 text-white placeholder-blue-900 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-300 text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Dirección
            </label>
            <input type="text" name="direccion" value={form.direccion} onChange={handleChange} required placeholder="Tu dirección" className="bg-[#060d1a] border border-blue-900 rounded-xl px-4 py-3 text-white placeholder-blue-900 focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-500 text-white font-semibold py-4 rounded-full transition-colors text-lg flex items-center justify-center gap-3 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.535 5.847L.057 23.571a.75.75 0 00.921.921l5.724-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.362l-.355-.212-3.393.875.891-3.282-.231-.368A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
            Enviar por WhatsApp
          </button>
        </form>
      </section>
    </main>
  );
}