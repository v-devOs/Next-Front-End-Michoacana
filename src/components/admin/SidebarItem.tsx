'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Item {
  name: string,
  link: string,
  icon: React.ReactNode
}

interface Props {
  sideItem: Item
}

export const SidebarItem = ({ sideItem }: Props) => {

  const actualPath = usePathname()

  console.log(sideItem.link)

  return (
    <Link key={sideItem.link} href={sideItem.link}
      className={`flex p-2 rounded-sm items-center gap-2 hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900 ${actualPath === sideItem.link ? 'bg-gray-300 bg-opacity-80 text-blue-900 outline-none' : ''}`}
    >
      {sideItem.icon}
      <h4 className="text-xl">{sideItem.name}</h4>
    </Link>
  )
}
