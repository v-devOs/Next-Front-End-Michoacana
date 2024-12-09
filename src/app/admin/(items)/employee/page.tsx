
import { getAllData } from '@/actions/general/getData'
import { AdminView } from '@/components/admin'
import { EmployeeTable } from '@/components/admin/employee'
import { Employee } from '@/interfaces/admin/Employee'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Información Empleados Activos0'
}

const AdminEmployeePage = async () => {

  const data: Employee[] = await getAllData('employee')

  return (

    <div>
      <AdminView title='Empleados activos' />
      <div className="flex justify-between items-baseline">
        <Link
          className="mb-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
          href={'/admin/employee/create'}
        >Crear</Link>
      </div>
      <EmployeeTable data={data} />
    </div>
  )
}

export default AdminEmployeePage