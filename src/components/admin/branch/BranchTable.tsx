import { Branch } from "@/interfaces/admin"
import { TableButtons } from "../dashboard"

interface Props {
  data: Branch[]
}

const tableHeaders = [
  'ID',
  'Nombre',
  'Fecha Creación',
  'Hora de Apertura',
  'Hora de cierre',
  'Modificar',
  'Eliminar'
]

export const BranchTable = ({ data }: Props) => {
  return (
    <table className="min-w-full ">
      <thead className="bg-gray-400">
        <tr>
          {
            tableHeaders.map(tableHead => (
              <th className="text-sm font-medium text-white py-4" key={tableHead}>{tableHead}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, idx) => (
            <tr key={idx}>
              <td className="text-center text-sm font-medium text-gray-900" >{item.id_branch}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.name}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.date_start}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.hour_start}:00</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.hour_end}:00</td>

              <TableButtons id={item.id_branch} />
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
