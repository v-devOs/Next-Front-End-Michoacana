'use client';


import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPencil, FaTrash } from "react-icons/fa6";


interface Props {
  id: string
}

export const TableButtons = ({ id }: Props) => {

  const path = usePathname()

  return (
    <>
      <td className="flex justify-center gap-5 items-center">
        <Link href={`${path}/${id}`}
          // onClick={() => onClick('', item.id)}
          className=""
        >
          <FaPencil color="green" size={20} />
        </Link>
        <Link href={`${path}/${id}`}
          // onClick={() => onClick('', item.id)}
          className=""
        >
          {<FaTrash color="red" size={20} />}
        </Link>
      </td>
    </>
  )
}
