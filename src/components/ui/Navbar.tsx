'use client';

import Link from "next/link";
import { usePathname } from "next/navigation"

export const Navbar = () => {

  const path = usePathname();

  if (path.includes('admin') || path.includes('auth') || path.includes('sales'))
    return <></>

  return (
    <nav className="bg-mint-200 text-mint-800 shadow-lg py-4 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-500">
          <a href="/" className="hover:text-pink-400 transition-colors">Paletería Michoacana 🍦</a>
        </div>

        <div className="flex space-x-6">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400 transition-colors font-semibold">Inicio</Link>
          <Link href="#flavors" className="text-mint-500 hover:text-mint-400 transition-colors font-semibold">Sabores</Link>
          <Link href="#about" className="text-pink-500 hover:text-pink-400 transition-colors font-semibold">Nosotros</Link>
          <Link href="#contact" className="text-yellow-500 hover:text-yellow-400 transition-colors font-semibold">Contacto</Link>
        </div>

      </div>
    </nav>
  )
}
