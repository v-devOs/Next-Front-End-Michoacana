import { Direction } from "@/interfaces/admin"
import { TableButtons } from "../dashboard/TableButtons"

interface Props {
  data: Direction[]
}

const tableHeaders = [
  'ID',
  'Zona',
  'Calle',
  'Modificar',
  'Eliminar'
]

export const DirectionTable = ({ data }: Props) => {
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
              <td className="text-center text-sm font-medium text-gray-900" >{item.id_direction}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.zone}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.street}</td>

              <TableButtons id={item.id_direction} />
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
