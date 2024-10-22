
import { Metadata } from 'next';
import { AdminView, ContactTable } from '@/components/admin';
import { getAllData } from '@/actions/admin/getData';
import { Contact } from '@/interfaces/admin';
import { Table } from '@/components/admin/Table';

export const metadata: Metadata = {
  title: "Contactos de Sucursales",
  description: "Información general sobre las sucursales",
};

const ContactAdmin = async () => {
  const data: Contact[] = await getAllData('contact');

  return (
    <div>
      <AdminView title='Información de contacto sucursales' />

      {/* <ContactTable data={data} /> */}
      <Table items={data} />
    </div>
  )
}

export default ContactAdmin