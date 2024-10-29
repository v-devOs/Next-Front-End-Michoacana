import { TableButtons } from "./dashboard"

interface Props<T> {
  item: T,
  headers: string[],
  fieldsOmmit?: string[],
  id: T[keyof T]
}

export const TableItem = <T,>({ item, headers, fieldsOmmit, id }: Props<T>) => {
  return (
    <tr>
      {
        headers.filter(header => !fieldsOmmit?.includes(header) && header !== 'acciones').map(header => (
          <td key={`${header}`} className="text-center text-sm font-medium text-gray-900">
            {
              `${item[header as keyof T]}`
            }
          </td>
        ))
      }

      <TableButtons id={id as string} />

    </tr>
  )
}
