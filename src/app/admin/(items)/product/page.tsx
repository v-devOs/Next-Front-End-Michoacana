import React from 'react'
import { AdminView } from '@/components/admin'
import { ProductTable } from '@/components/admin/product';



const AdminProductPage = async () => {

  return (
    <div>
      <AdminView title='Información productos' />

      <ProductTable />
    </div>
  )
}

export default AdminProductPage