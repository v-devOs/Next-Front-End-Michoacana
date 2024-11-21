import { Product } from "@/interfaces/admin"
import { Card } from "../ui"

interface Props {
  products: Product[]
}

export const CardGrid = ({ products }: Props) => {
  return (
    <div className="grid mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
      {
        products.map(product => (
          <Card key={product.product} product={product} />
        ))
      }
    </div>
  )
}
