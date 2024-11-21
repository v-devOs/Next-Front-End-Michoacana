'use client'
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

export const Footer = () => {

  const path = usePathname()

  if (path.includes('admin'))
    return <></>

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-500">Paletería Michoacana</h2>
            <p className="text-gray-400">Sabores auténticos de México en cada bocado</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Síguenos</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-pink-400 hover:text-yellow-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-pink-400 hover:text-yellow-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-pink-400 hover:text-yellow-300">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <p className="text-gray-400">Email: info@michoacana.com</p>
            <p className="text-gray-400">Teléfono: +52 123 456 7890</p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} Paletería Michoacana. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

