
import { getAllData } from '@/actions/general/getData'
import { AdminView } from '@/components/admin'
import { EmployeeTable } from '@/components/admin/employee'
import { Employee } from '@/interfaces/admin/Employee'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Información Empleados Activos0'
}

const AdminEmployeePage = async () => {

  const data: Employee[] = await getAllData('employee')

  console.log({ data })

  return (

    <div>
      {/* TODO: REALIAZAR VALIDACIÓN DE ROL PARA MOSTRAR USUARIOS */}
      <AdminView title='Empleados activos' />

      <EmployeeTable data={data} />
    </div>
  )
}

export default AdminEmployeePage