import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#0a1628]">
      <Link href="/">
        <Image
          src="/logo shekinah.png"
          alt="Logo Casa de Dios Shekinah"
          width={90}
          height={90}
        />
      </Link>
      <ul className="flex gap-8 text-white font-medium text-sm tracking-wide uppercase">
        <li><a href="/" className="hover:text-blue-400 transition-colors">Inicio</a></li>
        <li><a href="/mensajes" className="hover:text-blue-400 transition-colors">Mensajes</a></li>
        <li><a href="/servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
        <li><a href="/nosotros" className="hover:text-blue-400 transition-colors">Nosotros</a></li>
        <li><a href="/oracion" className="hover:text-blue-400 transition-colors">Oración</a></li>
      </ul>
    </nav>
  );
}