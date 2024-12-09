'use client'
import { useEffect } from "react"
import { useForm } from "react-hook-form"

import Swal from 'sweetalert2'
import { Loading } from "@/components/ui"
import { Direction, DirectionPost } from "@/interfaces/admin"
import { useSearchParams, useRouter } from "next/navigation"
import { createData, updateData } from "@/actions/admin/crudActions"

interface Props {
  title: string
  data?: Direction
  isPostForm?: boolean
}

export const DirectionForm = ({ title, data, isPostForm = true }: Props) => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<Direction>()

  const onSubmit = async (dataForm: Direction) => {

    const dataToSend: DirectionPost = {
      active: dataForm.active,
      street: dataForm.street,
      zone: dataForm.zone
    }

    try {

      const isUpdate = searchParams.get('action') === 'update'

      if (isUpdate)
        await updateData<DirectionPost>(dataToSend, 'direction', `${dataForm.id_direction}`)
      else
        await createData<DirectionPost>(dataForm, 'direction')

      Swal.fire({
        title: 'Succes',
        text: `Dirección ${isUpdate ? 'actualizada' : 'creada'} correctamente`,
        icon: 'success'
      })

      router.replace('/admin/direction')

    } catch (error) {
      console.log('Error al crear registro', error)
      Swal.fire({
        title: 'Error',
        text: 'Error al crear dirección',
        icon: 'error'
      })
    }
  }

  useEffect(() => {
    if (data) reset(data)
  }, [data, reset])

  if (!data && isPostForm)
    return <Loading />

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray">
      <div className="relative sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">{title}</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
            <label className="block font-semibold">Zona</label>
            <input
              {...register('zone', { required: 'Este campo es requerido' })}
              placeholder='Nombre de la zona'
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />

            <label className="block font-semibold">Calle</label>
            <input
              {...register('street', { required: 'Este campo es requerido' })}
              placeholder='Nombre de la calle'
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
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
