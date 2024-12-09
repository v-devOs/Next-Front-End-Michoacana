'use client'

import { useEffect, useState, ChangeEvent } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useForm } from "react-hook-form"

import Swal from 'sweetalert2'

import { Loading } from "@/components/ui"
import { Product, ProductPost } from "@/interfaces/admin"
import { uploadImage } from '../../../lib/cloudinary/index';
import { createData, updateData } from "@/actions/admin/crudActions"

interface Props {
  title: string,
  data?: Product,
  isPostForm: boolean
}

export const ProductForm = ({ title, data, isPostForm = true }: Props) => {
  const [imgUrl, setImgUrl] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<Product>()

  const onSubmit = async (dataForm: Product) => {
    const isUpdate = searchParams.get('action') === 'update'
    const dataToSend: ProductPost = {
      active: dataForm.active,
      description: dataForm.description,
      flavor: dataForm.flavor,
      presentation: dataForm.presentation,
      price: +dataForm.price,
      product: dataForm.product,
      product_image_url: imgUrl,
      type: dataForm.type
    }

    console.log({ dataToSend })

    try {


      if (isUpdate)
        await updateData<ProductPost>(dataToSend, 'product', `${dataForm.id_product}`)
      else
        await createData<ProductPost>(dataToSend, 'product')

      Swal.fire({
        title: 'Success',
        text: `Prodcuto ${isUpdate ? 'actualizado' : 'creado'} correctamente`,
        icon: 'success'
      })

      router.replace('/admin/product')

    } catch (error) {
      console.log('Error al crear prodcuto', error)
      Swal.fire({
        title: 'Error',
        text: 'Error al crear producto',
        icon: 'error'
      })
    }
  }

  const onFileSelected = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const publicId = await uploadImage(file);
      console.log('Imagen subida exitosamente:', publicId);
      setImgUrl(publicId)
      // Aquí puedes actualizar el estado del formulario con la URL de la imagen
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  }

  useEffect(() => {
    if (data) {
      reset(data)
      if (data.product_image_url) {
        setImgUrl(data.product_image_url)
      }
    }
  }, [data, reset])


  if (!data && isPostForm)
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
                  src={data?.product_image_url || '/img/icon.png'}
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
