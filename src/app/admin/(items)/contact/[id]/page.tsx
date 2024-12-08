'use client'

import { ContactForm } from '@/components/admin/contact'
import { Modal } from '@/components/ui'
import { useDataItem } from '@/hooks'
import { Contact } from '@/interfaces/admin'
import { usePathname } from 'next/navigation'


const AdminContactInfo = () => {

  const path = usePathname().split('/')

  const { dataItem } = useDataItem<Contact>(path[2], path[3])

  return (
    <section>
      <Modal img='/img/icon.png'>
        <ContactForm data={dataItem} title='Editar información de Contacto' />
      </Modal>

    </section>
  )
}

export default AdminContactInfo
