import { Employee } from "@/interfaces/admin/Employee"
import { TableButtons } from "../dashboard"

interface Props {
  data: Employee[]
}


const tableHeaders = [
  'ID',
  'No.Empleado',
  'Genero',
  'Nombre',
  'Apellidos',
  'Fecha Inicio',
  'Telefono',
  'Sucursal',
  'Acciones',
]


export const EmployeeTable = ({ data }: Props) => {
  return (
    <table className="min-w-full ">
      <thead className="bg-purple-400">
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
              <td className="text-center text-sm font-medium text-gray-900" >{item.id_employee}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.no_employee}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.gender}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.name}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.surname} {item.second_surname}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.date_start}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.tel}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.branch.name}</td>

              <TableButtons id={`${item.id_employee}`} />
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
