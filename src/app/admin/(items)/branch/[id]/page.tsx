'use client'

import { Modal } from '@/components/ui'
import { Branch } from '@/interfaces/admin';
import { usePathname } from 'next/navigation';
import { useDataItem } from '@/hooks';



const AdminSucursalInfo = () => {

  const path = usePathname().split('/')

  const { dataItem } = useDataItem<Branch>(path[2], path[3], {
    id_branch: 0,
    name: '',
    date_start: '',
    active: false,
    hour_start: 0,
    hour_end: 0,
  })

  return (
    <section className='p-20'>
      <Modal img='/img/icon.png'>

        <form action="">
          <label htmlFor="">Nombre de la Sucursal</label>
          <input type="text" value={dataItem.name} />

        </form>
      </Modal>
    </section>
  )
}

export default AdminSucursalInfo