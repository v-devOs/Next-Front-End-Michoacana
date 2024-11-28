'use client'

import { EmployeeForm } from '@/components/admin/employee'


import { useDataItem } from '@/hooks'
import { Employee } from '@/interfaces/admin'
import { usePathname } from 'next/navigation'


const AdminEmployeeInfo = () => {

  const path = usePathname().split('/')

  const { dataItem } = useDataItem<Employee>(path[2], path[3])
  return (
    <section>
      {/* <Modal img='/img/icon.png'> */}
      <EmployeeForm title='Editar información del Empleado' data={dataItem} />
      {/* </Modal> */}
    </section>
  )
}

export default AdminEmployeeInfo