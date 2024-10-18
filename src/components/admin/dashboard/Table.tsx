'use server'

import { Contact } from "@/interfaces/admin"
import { TableButtons } from "./TableButtons"

const headersTable = [
  'ID',
  'Descripcion',
  'Activo',
  'Información',
  'Modificar',
  'Eliminar'
]

interface Props {
  items: Contact[]
}

export const Table = ({ items }: Props) => {
  return (
    <table className="min-w-full ">
      <thead className="bg-gray-400">
        <tr>
          {
            headersTable.map(header => (
              <th scope="col" className="text-sm font-medium text-white py-4" key={header}>{header}</th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          items.map((item, idx) => (
            <tr key={idx}>
              <td className="text-center text-sm font-medium text-gray-900" >{item.id_contact}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.email}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.active ? 'Activo' : 'Inactivo'}</td>

              <TableButtons />
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
