import { format } from 'date-fns';

import { Branch, Contact } from "@/interfaces/admin"
import { TableButtons } from "../dashboard"

interface Props {
  contacts: Contact[]
}

const headers = [
  'ID',
  'Nombre Sucursal',
  'Fecha de Apertura',
  'Hora de Apertura',
  'Hora de Cierre',
  'Calle',
  'Telefono',
  'Acciones'
]

export const BranchTable = ({ contacts }: Props) => {
  return (
    <table className="min-w-full">
      <thead className="bg-purple-400">
        <tr>
          {
            headers.map(header => (
              <th className="text-sm font-medium text-white py-4" key={header}>
                {header}
              </th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          contacts.map(con => (
            <tr key={con.id_con}>
              <td className="text-center text-sm font-medium text-gray-900">
                {con.id_con}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {con.name}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {format(con.date_start, 'yyyy-MM-dd')}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {con.hour_start}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {con.hour_end}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {con.direction.street}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {con.contact.tel}
              </td>

              <TableButtons id={`${con.id_con}`} />
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
