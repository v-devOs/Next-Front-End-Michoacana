
interface Props<T> {
  item: T | any,
  headers: string[]
}

export const TableItem = <T,>({ item, headers }: Props<T>) => {
  return (
    <tr>
      {
        headers.filter(header => header !== 'active').map(header => (
          <td key={`${header}`} className="text-center text-sm font-medium text-gray-900">
            {item[header]}
          </td>
        ))
      }
    </tr>
  )
}
