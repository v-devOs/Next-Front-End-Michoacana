import { AdminView } from '@/components/admin'
import { ProductTable } from '@/components/product'
import React from 'react'

const AdminProductPage = () => {
  return (
    <div>
      <AdminView title='Información productos' />

      <ProductTable />
    </div>
  )
}

export default AdminProductPage