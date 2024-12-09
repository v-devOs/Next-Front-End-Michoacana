import { TableButtons } from "./dashboard"

interface Props<T> {
  item: T,
  headers: string[],
  fieldsOmmit?: string[],
  // id: T[keyof T]
}


const extractId = <T,>(item: T) => {
  let id = ''

  for (const key in item) {
    if (key.includes('id')) {
      id = String(item[key]) as string;
    }
  }

  return id
}
export const TableItem = <T,>({ item, headers, fieldsOmmit }: Props<T>) => {

  const id = extractId(item)


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

      <TableButtons id={id} />

    </tr>
  )
}
