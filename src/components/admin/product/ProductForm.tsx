import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Image from "next/image"
import { ChangeEvent } from "react"

import { Loading } from "@/components/ui"
import { Product } from "@/interfaces/admin"

interface Props {
  title: string,
  data?: Product
}

export const ProductForm = ({ title, data }: Props) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm<Product>({
    defaultValues: {
      ...data
    }
  })

  const onSubmit = (data: Product) => {
    console.log({ data })
  }

  useEffect(() => {
    if (data) reset(data)
  }, [data, reset])

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Aquí puedes manejar la carga del archivo
    console.log(file);
  }

  if (!data)
    return <Loading />

  return (
    <div className="relative mb-4 flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray">
      <div className="relative w-full max-w-4xl mx-auto text-center">
        <span className="text-2xl font-light ">{title}</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
            <div className="flex gap-8 mb-6">
              <div className="flex-shrink-0 mb-4">
                <Image
                  src={'/img/icon.png'}
                  alt="Imagen del producto"
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-2">Seleccionar imagen</label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/gif"
                  onChange={onFileSelected}
                  className='border w-full px-3 py-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">Nombre del Producto</label>
                <input
                  {...register('product', { required: 'Este campo es requerido' })}
                  className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />

                <label className="block font-semibold">Precio</label>
                <input
                  {...register('price', { required: 'Este campo es requerido' })}
                  type="number"
                  className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />
              </div>

              <div>
                <label className="block font-semibold">Tipo</label>
                <input
                  {...register('type', { required: 'Este campo es requerido' })}
                  className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />

                <label className="block font-semibold">Sabor</label>
                <input
                  {...register('flavor', { required: 'Este campo es requerido' })}
                  className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />
              </div>
            </div>

            <label className="block font-semibold">Presentación</label>
            <input
              {...register('presentation', { required: 'Este campo es requerido' })}
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />

            <label className="block font-semibold">Descripción</label>
            <textarea
              {...register('description', { required: 'Este campo es requerido' })}
              className='border w-full px-3 py-2 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
              rows={3}
            />

            <label className="block font-semibold">Activo</label>
            <input
              {...register('active')}
              type="checkbox"
              className="border h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />

            <div className="flex justify-between items-baseline">
              <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
