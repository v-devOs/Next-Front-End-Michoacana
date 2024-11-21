import { Product } from '@/interfaces/admin'
import Image from 'next/image'

interface Props {
  product: Product
}

export const Card = ({ product }: Props) => {
  return (
    <div className='bg-pink-100 border border-pink-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'>
      <Image
        src={product.product_image_url}
        alt={product.product}
        width={400}
        height={400}
        className='w-full h-40 object-cover rounded-md mb-4'
      />
      <h2 className="text-2xl font-bold text-pink-600 mb-2">{product.product}</h2>
      <p className="text-pink-500 mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-pink-600 font-semibold">${product.price}</span>
      </div>
    </div>
  )
}
