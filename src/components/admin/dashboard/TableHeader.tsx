
const headersTable = [
  'ID',
  'Descripcion',
  'Activo',
  'Información',
  'Modificar',
  'Eliminar'
]

export const TableHeader = () => {
  return (
    <thead className="bg-gray-400">
      <tr>
        {
          headersTable.map(header => (
            <th scope="col" className="text-sm font-medium text-white py-4" key={header}>{header}</th>
          ))
        }
      </tr>
    </thead>
  )
}
