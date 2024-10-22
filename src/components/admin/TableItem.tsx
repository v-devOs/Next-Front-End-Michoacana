import { TableButtons } from "./dashboard"

interface Props<T> {
  item: T | any,
  headers: string[],
  fieldsOmmit?: string[],
  id: string
}

export const TableItem = <T,>({ item, headers, fieldsOmmit, id }: Props<T>) => {
  return (
    <tr>
      {
        headers.filter(header => !fieldsOmmit?.includes(header) && header !== 'acciones').map(header => (
          <td key={`${header}`} className="text-center text-sm font-medium text-gray-900">
            {item[header]}
          </td>
        ))
      }

      <TableButtons id={id} />

    </tr>
  )
}
