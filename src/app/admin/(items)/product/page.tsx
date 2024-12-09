import React from 'react'
import { AdminView } from '@/components/admin'
import { ProductTable } from '@/components/admin/product';
import Link from 'next/link';



const AdminProductPage = async () => {

  return (
    <div>
      <AdminView title='Información productos' />

      <div className="flex justify-between items-baseline">
        <Link
          className="mb-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
          href={'/admin/product/create'}
        >Crear</Link>
      </div>
      <ProductTable />
    </div>
  )
}

export default AdminProductPage