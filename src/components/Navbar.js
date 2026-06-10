import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0a1628] sticky top-0 z-50 px-6 py-3">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo shekinah.PNG" alt="Logo" width={75} height={75} />
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-8 text-white font-medium text-sm tracking-wide uppercase">
          <li><a href="/">Inicio</a></li>
          <li><a href="/mensajes">Mensajes</a></li>
          <li><a href="/ministerios">Ministerios</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/oracion">Oración</a></li>
        </ul>

        {/* Hamburguesa */}
        <label htmlFor="menu-toggle" className="md:hidden text-white cursor-pointer p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </div>

      {/* Checkbox oculto */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      {/* Menu mobile */}
      <div className="hidden peer-checked:flex md:hidden flex-col items-center gap-5 py-6 border-t border-blue-900 mt-3">
        <a href="/" className="text-white text-sm uppercase tracking-wide">Inicio</a>
        <a href="/mensajes" className="text-white text-sm uppercase tracking-wide">Mensajes</a>
        <a href="/ministerios" className="text-white text-sm uppercase tracking-wide">Ministerios</a>
        <a href="/nosotros" className="text-white text-sm uppercase tracking-wide">Nosotros</a>
        <a href="/oracion" className="text-white text-sm uppercase tracking-wide">Oración</a>
      </div>
    </nav>
  );
}