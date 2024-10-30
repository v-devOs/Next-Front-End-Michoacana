'use client'

import { Branch } from '@/interfaces/admin';
import { usePathname } from 'next/navigation';
import { useDataItem } from '@/hooks';
import { BranchForm } from '@/components/admin/branch';
import { Modal } from '@/components/ui';

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
    <section>
      <Modal img='/img/icon.png'>
        <BranchForm title={'Editar información Sucursal'} data={dataItem} />
      </Modal>
    </section>
  )
}

export default AdminSucursalInfo