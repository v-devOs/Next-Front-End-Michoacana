'use client'

import { Form, InputCustom, Modal } from '@/components/ui'
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

  const inputs: InputCustom[] = [
    {
      input: { placeHolder: 'Sucursal Madero', type: 'text', value: dataItem.name },
      label: 'Nombre de la sucursal'
    },
    {
      input: { placeHolder: '', type: 'date', value: dataItem.date_start },
      label: 'Fecha de apertua'
    },
    {
      input: { placeHolder: '8:00', type: 'text', value: `${dataItem.hour_start}` },
      label: 'Hora de apertura'
    },
    {
      input: { placeHolder: '19:00', type: 'text', value: `${dataItem.hour_end}` },
      label: 'Hora de cierre'
    },
  ]

  return (
    <section>
      <Modal img='/img/icon.png'>
        <Form inputs={inputs} />
      </Modal>
    </section>
  )
}

export default AdminSucursalInfo