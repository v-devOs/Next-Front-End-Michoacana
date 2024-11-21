import { TableItem } from "./TableItem"

type Props<T> = {
  items: T[]
  fieldsOmmit?: string[]
}

const getTableHeaders = <T,>(items: T[]) => {
  const headers: string[] = []

  for (const key in items[0]) {
    headers.push(key)
  }

  return headers;
}

const getIdFromItem = <T,>(items: T[], keyId: keyof T) => {
  return items[0][keyId];
};

export const Table = <T,>({ items, fieldsOmmit }: Props<T>) => {
  const tableHeaders: string[] = getTableHeaders(items).concat(['acciones'])
  const keyIdItem = tableHeaders.find(header => header.includes('id')) as keyof T
  const idItem = getIdFromItem(items, keyIdItem)


  return (
    <table className="min-w-full ">
      <thead className="bg-purple-400">
        <tr>
          {
            tableHeaders.filter(header => !fieldsOmmit?.includes(header)).map(tableHead => (
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
            <TableItem key={idx} item={item} id={idItem} headers={tableHeaders} fieldsOmmit={fieldsOmmit} />
          ))
        }

      </tbody>
    </table>
  );
};