'use client'

import { BranchForm } from '@/components/admin/branch';
import { Modal } from '@/components/ui';
import { useDataItem } from '@/hooks';
import { Branch } from '@/interfaces/admin';
import { usePathname } from 'next/navigation';

const AdminSucursalInfo = () => {

  const path = usePathname().split('/');

  const { dataItem } = useDataItem<Branch>(path[2], path[3])

  return (
    <section>
      <Modal img='/img/icon.png'>
        <BranchForm title={'Editar información Sucursal'} data={dataItem} />
      </Modal>
    </section>
  )
}

export default AdminSucursalInfo