'use client'

import { UserForm } from '@/components/admin'


import { useDataItem } from '@/hooks'
import { UserPost } from '@/interfaces/general'
import { usePathname } from 'next/navigation'


const AdminEmployeeInfo = () => {

  const path = usePathname().split('/')

  const { dataItem } = useDataItem<UserPost>(path[2], path[3])
  return (
    <section>
      {/* <Modal img='/img/icon.png'> */}
      <UserForm title='Editar información del usuarrio' data={dataItem} isPostForm />
      {/* </Modal> */}
    </section>
  )
}

export default AdminEmployeeInfo