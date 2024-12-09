'use client'

import { Loading } from "@/components/ui"
import { Contact, ContactPost } from "@/interfaces/admin"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useRouter, useSearchParams } from "next/navigation"
import Swal from "sweetalert2"
import { createData, updateData } from "@/actions/admin/crudActions"

interface Props {
  title: string
  data?: Contact
  isPostForm?: boolean
}

export const ContactForm = ({ data, title, isPostForm = true }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<Contact>()

  const onSubmit = async (dataForm: Contact) => {
    try {
      const isUpdate = searchParams.get('action') === 'update'

      const dataToSend: ContactPost = {
        tel: dataForm.tel,
        email: dataForm.email,
        instagram: dataForm.instagram,
        facebook: dataForm.facebook,
        active: dataForm.active
      }

      if (isUpdate) {
        await updateData<ContactPost>(dataToSend, 'contact', `${dataForm.id_contact}`)
      } else {
        await createData<ContactPost>(dataToSend, 'contact')
        router.replace('/admin/contact')
      }

      Swal.fire({
        title: 'Success',
        text: `Contacto ${isUpdate ? 'actualizado' : 'creado'} correctamente`,
        icon: 'success'
      })

    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: `Error al ${searchParams.get('action') ? 'actualizar' : 'crear'} contacto`,
        icon: 'error'
      })
      console.log('Error al procesar registro:', error)
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
            <label className="block font-semibold">Teléfono</label>
            <input
              {...register('tel', { required: 'Este campo es requerido' })}
              placeholder='(555) 555-5555'
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />

            <label className="block font-semibold">Email</label>
            <input
              {...register('email', { required: 'Este campo es requerido' })}
              type="email"
              placeholder='ejemplo@correo.com'
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />

            <label className="block font-semibold">Instagram</label>
            <input
              {...register('instagram', { required: 'Este campo es requerido' })}
              placeholder='@usuario'
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />

            <label className="block font-semibold">Facebook</label>
            <input
              {...register('facebook', { required: 'Este campo es requerido' })}
              placeholder='facebook.com/usuario'
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
