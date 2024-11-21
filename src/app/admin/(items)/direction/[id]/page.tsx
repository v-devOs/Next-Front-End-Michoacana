'use client'

import { usePathname } from 'next/navigation'
import { DirectionForm } from '@/components/admin/direction/DirectionForm'
import { Modal } from '@/components/ui'
import { useDataItem } from '@/hooks'
import { Direction } from '@/interfaces/admin'


const AdminDirectioInfo = () => {
  const path = usePathname().split('/')

  const { dataItem } = useDataItem<Direction>(path[2], path[3])

  return (
    <section>
      <Modal img='/img/icon.png'>
        <DirectionForm title='Editar información de Direccion' data={dataItem} />
      </Modal>
    </section>
  )
}

export default AdminDirectioInfo