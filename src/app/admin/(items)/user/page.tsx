
import { getAllData } from '@/actions/general/getData'
import { AdminView, Table } from '@/components/admin'

import { UserClass } from '@/interfaces/general'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Información Empleados Activos0'
}

const AdminUserPage = async () => {

  const data: UserClass[] = await getAllData('user')

  return (

    <div>

      <AdminView title='Usuarios activos' />

      <div className="flex justify-between items-baseline">
        <Link
          className="mb-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
          href={'/admin/user/create'}
        >Crear</Link>
      </div>
      <Table items={data} fieldsOmmit={['id_employee']} />
    </div>
  )
}

export default AdminUserPage