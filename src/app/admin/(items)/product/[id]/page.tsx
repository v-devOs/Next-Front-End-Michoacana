'use client'

import { ProductForm } from "@/components/admin/product/ProductForm";
import { useDataItem } from "@/hooks";
import { Product } from "@/interfaces/admin";
import { usePathname } from "next/navigation"

const AdminProductsInfo = () => {

  const path = usePathname().split('/');

  const { dataItem } = useDataItem<Product>(path[2], path[3])

  return (
    <section>
      <ProductForm data={dataItem} title="Editar información del Producto" />
    </section>
  )
}

export default AdminProductsInfo