
import { Metadata } from 'next';
import { AdminView, Table } from '@/components/admin';
import { Contact } from '@/interfaces/admin';
import { getAllData } from '@/actions/general/getData';

export const metadata: Metadata = {
  title: "Contactos de Sucursales",
  description: "Información general sobre las sucursales",
};

const ContactAdmin = async () => {
  const data: Contact[] = await getAllData('contact');

  return (
    <div>
      <AdminView title='Información de contacto sucursales' />

      <Table items={data} />
    </div>
  )
}

export default ContactAdmin