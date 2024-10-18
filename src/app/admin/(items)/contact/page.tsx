import { Metadata } from 'next';
import { AdminView, TableHeader, TableButtons } from '@/components/admin';
import { Contact } from '@/interfaces/admin';
import { getAllData } from '@/actions/admin/getData';

export const metadata: Metadata = {
  title: "Contactos de Sucursales",
  description: "Información general sobre las sucursales",
};

const ContactAdmin = async () => {
  const data: Contact[] = await getAllData('contact');

  const onClickButton = () => {

  }

  return (
    <div>
      <AdminView title='Información de contacto sucursales' />

      <table className="min-w-full ">
        <TableHeader />
        <tbody>
          {
            data.map((item, idx) => (
              <tr key={idx}>
                <td className="text-center text-sm font-medium text-gray-900" >{item.id_contact}</td>
                <td className="text-center text-sm font-medium text-gray-900" >{item.email}</td>
                <td className="text-center text-sm font-medium text-gray-900" >{item.active ? 'Activo' : 'Inactivo'}</td>

                <TableButtons />
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default ContactAdmin