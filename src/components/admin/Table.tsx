import { TableItem } from "./TableItem"

type Props<T> = {
  items: T[]
}

const getTableHeaders = <T,>(items: T[]) => {
  const headers: string[] = []

  for (const key in items[0]) {
    headers.push(key)
  }

  return headers;
}

export const Table = <T,>({ items }: Props<T>) => {
  const tableHeaders: string[] = getTableHeaders(items)

  return (
    <table className="min-w-full ">
      <thead className="bg-gray-400">
        <tr>
          {
            tableHeaders.filter(header => header !== 'active').map(tableHead => (
              <th className="text-sm font-medium text-white py-4" key={tableHead}>
                {`${tableHead.includes('id') ? 'ID' : tableHead.toUpperCase()}`}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, idx) => (
            <TableItem key={idx} item={item} headers={tableHeaders} />
          ))
        }
      </tbody>
    </table>
  );
};