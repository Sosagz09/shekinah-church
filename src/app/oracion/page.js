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
      <section className="flex flex-col items-center justify-center py-24 px-8">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Petición de Oración</h1>
        <p className="text-blue-300 text-lg mb-12 text-center max-w-xl">
          Cuéntanos tu necesidad y nuestro equipo pastoral orará por ti.
        </p>
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