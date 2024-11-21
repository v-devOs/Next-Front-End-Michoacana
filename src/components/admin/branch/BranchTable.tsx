import { format } from 'date-fns';

import { Branch } from "@/interfaces/admin"
import { TableButtons } from "../dashboard"

interface Props {
  branches: Branch[]
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

export const BranchTable = ({ branches }: Props) => {
  return (
    <table className="min-w-full">
      <thead className="bg-gray-400">
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
          branches.map(branch => (
            <tr key={branch.id_branch}>
              <td className="text-center text-sm font-medium text-gray-900">
                {branch.id_branch}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {branch.name}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {format(branch.date_start, 'yyyy-MM-dd')}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {branch.hour_start}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {branch.hour_end}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {branch.direction.street}
              </td>
              <td className="text-center text-sm font-medium text-gray-900">
                {branch.contact.tel}
              </td>

              <TableButtons id={`${branch.id_branch}`} />
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
