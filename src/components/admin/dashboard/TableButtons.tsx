'use client';


import { deleteData } from "@/actions/admin/crudActions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPencil, FaTrash } from "react-icons/fa6";

import Swal from 'sweetalert2'


interface Props {
  id: string
}

export const TableButtons = ({ id }: Props) => {


  const path = usePathname()

  const onClickDeleteButton = async () => {
    try {
      const splitPath = path.split('/')
      await deleteData(splitPath[2], id)

      Swal.fire({
        title: 'Success',
        text: 'Registro eliminado correctamente',
        icon: 'success'
      })
    } catch (error) {

      console.log(error)
      Swal.fire({
        title: 'Error',
        text: 'Error al eliminar registro',
        icon: 'error'
      })
    }
  }
  return (
    <>
      <td className="flex justify-center py-4 gap-5 items-center">
        <Link href={`${path}/${id}?action=update`}
          // onClick={() => onClick('', item.id)}
          className=""
        >
          <FaPencil color="green" size={20} />
        </Link>
        <Link href={``}
          onClick={onClickDeleteButton}
          className=""
        >
          {<FaTrash color="red" size={20} />}
        </Link>
      </td>
    </>
  )
}
