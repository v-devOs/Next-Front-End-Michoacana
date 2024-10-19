import { Contact } from "@/interfaces/admin";
import { TableButtons } from "../dashboard";

interface Props {
  data: Contact[]
}

const tableHeaders = [
  'ID',
  'Correo',
  'Facebook',
  'Instagram',
  'Telefono',
  'Modificar',
  'Eliminar'
]

export const ContactTable = ({ data }: Props) => {
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
              <td className="text-center text-sm font-medium text-gray-900" >{item.id_contact}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.email}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.facebook}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.instagram}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.tel}</td>

              <TableButtons id={item.id_contact} />
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};
