import Image from "next/image"
import { FaHouse, FaPhone, FaStreetView, FaBox, FaUsers } from "react-icons/fa6";


import { SidebarItem } from "./SidebarItem";

interface Item {
  name: string,
  link: string,
  icon: React.ReactNode
}

const sidebarItems: Item[] = [
  {
    name: 'Sucursales',
    link: '/admin/branch',
    icon: <FaHouse />
  },
  {
    name: 'Contacto',
    link: '/admin/contact',
    icon: <FaPhone />
  },
  {
    name: 'Direcciones',
    link: '/admin/direction',
    icon: <FaStreetView />
  },
  {
    name: 'Empleados',
    link: '/admin/employee',
    icon: <FaUsers />
  },
  {
    name: 'Productos',
    link: '/admin/product',
    icon: <FaBox />
  },
]

export const Sidebar = () => {
  return (
    <aside>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 min-h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="flex justify-center">
          <Image className="rounded-sm" src={"/img/icon.png"} alt="Icono Michoacana" width={250} height={100} />
        </div>
        <div className="mb-2 p-4">
          <h3 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-gray-900">Paleteria Michoacana</h3>
        </div>

        <hr style={{ width: '100%' }} />
        <nav className="flex flex-col gap-1  p-2 font-sans text-base font-normal text-gray-700">
          {
            sidebarItems.map(sideItem => (
              <SidebarItem key={sideItem.link} sideItem={sideItem} />
            ))
          }
        </nav>
      </div>
    </aside>
  )
}
