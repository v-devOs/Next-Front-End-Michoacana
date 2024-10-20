'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  id: number
}

export const TableButtons = ({ id }: Props) => {

  const path = usePathname()

  return (
    <>
      <td className="text-center">
        <Link href={`${path}/${id}`}
          // onClick={() => onClick('', item.id)}
          className="middle none center rounded-sm bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Modificar
        </Link>
      </td>

      <td className="text-center">
        <Link href={`${path}/${id}`}
          // onClick={() => onClick('', item.id)}
          className="middle none center rounded-sm bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Eliminar
        </Link>
      </td>
    </>
  )
}
