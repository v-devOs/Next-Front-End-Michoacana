import React from 'react'
import { AdminView, Table } from '@/components/admin'
import { getAllData } from '@/actions/admin/getData'
import { Product } from '@/interfaces/admin';



const AdminProductPage = async () => {

  const data: Product[] = await getAllData('product');

  const fieldsOmmit = ['product_image_url', 'active', 'description']
  return (
    <div>
      <AdminView title='Información productos' />

      <Table items={data} fieldsOmmit={fieldsOmmit} />
    </div>
  )
}

export default AdminProductPage