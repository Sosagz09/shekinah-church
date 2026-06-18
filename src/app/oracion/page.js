"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";

export default function Oracion() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("enviando");
    emailjs.send(
      "service_xjymg7a",
      "template_n15ntwx",
      { name: form.name, email: form.email, message: form.message },
      "PTM7xnoIf8wUloctk"
    ).then(() => {
      setStatus("enviado");
      setForm({ name: "", email: "", message: "" });
    }).catch(() => {
      setStatus("error");
    });
  };

  return (
    <main className="bg-[#060d1a] min-h-screen">
      <Navbar />

      {/* Hero con imagen de fondo */}
      <section className="relative flex flex-col items-center justify-center text-center px-8 overflow-hidden" style={{ height: '500px' }}>
        <img src="/oracion.png" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-[#060d1a]/75 z-10"></div>
        <div className="relative z-20 flex flex-col items-center gap-4">
          <p className="text-blue-400 text-sm uppercase tracking-widest font-medium">Casa de Dios Shekinah</p>
          <h1 className="text-5xl font-bold text-white mb-2">Petición de Oración</h1>
          <p className="text-blue-300 text-xl max-w-2xl leading-relaxed">
            Cuéntanos tu necesidad y nuestro equipo pastoral orará por ti.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="flex flex-col items-center py-16 px-8">
        <form onSubmit={handleSubmit} className="bg-[#0a1628] rounded-2xl p-10 w-full max-w-xl flex flex-col gap-6 border border-blue-900">
          <div className="flex flex-col gap-2">
            <label className="text-blue-300 text-sm font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
              className="bg-[#060d1a] border border-blue-900 rounded-xl px-4 py-3 text-white placeholder-blue-900 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-300 text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="usuario@correo.com"
              className="bg-[#060d1a] border border-blue-900 rounded-xl px-4 py-3 text-white placeholder-blue-900 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-300 text-sm font-medium">Petición de oración</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Cuéntanos tu necesidad..."
              className="bg-[#060d1a] border border-blue-900 rounded-xl px-4 py-3 text-white placeholder-blue-900 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "enviando"}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-full transition-colors text-lg"
          >
            {status === "enviando" ? "Enviando..." : "Enviar petición"}
          </button>
          {status === "enviado" && (
            <p className="text-green-400 text-center font-medium">
              Tu petición fue enviada. Oraremos por ti.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center font-medium">
              Hubo un error. Intenta de nuevo.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}