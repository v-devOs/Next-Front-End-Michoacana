
import { Metadata } from 'next';
import { AdminView, Table } from '@/components/admin';
import { Contact } from '@/interfaces/admin';
import { getAllData } from '@/actions/general/getData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contactos de Sucursales",
  description: "Información general sobre las sucursales",
};

const ContactAdmin = async () => {
  const data: Contact[] = await getAllData('contact');

  return (
    <div>
      <AdminView title='Información de contacto sucursales' />

      <div className="flex justify-between items-baseline">
        <Link
          className="mb-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
          href={'/admin/contact/create'}
        >Crear</Link>
      </div>

      <Table items={data} />
    </div>
  )
}

export default ContactAdmin