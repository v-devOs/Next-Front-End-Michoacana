import { getAllData } from "@/actions/admin/getData"
import { Product } from "@/interfaces/admin"
import { TableButtons } from "../admin"

const tableHeaders = [
  'Id',
  'Producto',
  'Price',
  'Sabor',
  'Presentación',
  'Modificar',
  'Eliminar'
]

export const ProductTable = async () => {
  const data: Product[] = await getAllData('product')
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
              <td className="text-center text-sm font-medium text-gray-900" >{item.id_product}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.product}</td>
              <td className="text-center text-sm font-medium text-gray-900" >$ {item.price}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.flavor}</td>
              <td className="text-center text-sm font-medium text-gray-900" >{item.presentation}</td>

              <TableButtons id={`${item.id_product}`} />
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
