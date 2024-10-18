import { AdminView } from '@/components/admin';
import { Table } from '@/components/admin/dashboard/Table';
import { Contact } from '@/interfaces/admin';


const getDataContact = async () => {

  const res = await fetch('http://localhost:8080/contact')

  if (!res.ok)
    throw new Error('Failed to fetch data')

  return res.json()
}

const ContactAdmin = async () => {
  const data: Contact[] = await getDataContact()

  return (
    <div>
      <AdminView title='Información de contacto sucursales' />


      <Table items={data} />

    </div>
  )
}

export default ContactAdmin