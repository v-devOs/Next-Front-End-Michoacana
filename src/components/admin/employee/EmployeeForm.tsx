'use client'

import { useEffect } from "react"
import Image from "next/image"

import { useForm } from "react-hook-form"

import { Loading } from "@/components/ui"
import { Employee } from "@/interfaces/admin"


interface Props {
  title: string
  data?: Employee
}

export const EmployeeForm = ({ title, data }: Props) => {

  const {
    register,
    handleSubmit,
    reset
  } = useForm<Employee>({
    defaultValues: {
      ...data
    }
  })

  const onSubmit = (data: Employee) => {
    console.log({ data })
  }

  useEffect(() => {
    if (data) reset(data)
  }, [data, reset])

  if (!data)
    return <Loading />


  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray">
      <div className="relative w-full max-w-4xl mx-auto text-center">
        <span className="text-2xl font-light ">{title}</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
            <div className="flex gap-8 mb-6">

              <div className="flex-shrink-0 mb-4">
                <Image
                  src={data?.profile_picture_url || '/img/default-profile.png'}
                  alt="Foto de perfil"
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-2">Foto de Perfil</label>
                <input
                  {...register('profile_picture_url')}
                  className='border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />

              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">No. Empleado</label>
                <input
                  {...register('no_employee', { required: 'Este campo es requerido' })}
                  className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />

                <label className="block font-semibold">Nombre</label>
                <input
                  {...register('name', { required: 'Este campo es requerido' })}
                  className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />
              </div>

              <div>
                <label className="block font-semibold">Género</label>
                <input
                  {...register('gender', { required: 'Este campo es requerido' })}
                  className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />

                <label className="block font-semibold">Apellido Paterno</label>
                <input
                  {...register('surname', { required: 'Este campo es requerido' })}
                  className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
                />
              </div>
            </div>

            <label className="block font-semibold">Apellido Materno</label>
            <input
              {...register('second_surname', { required: 'Este campo es requerido' })}
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />




            <label className="block font-semibold">Teléfono</label>
            <input
              {...register('tel', { required: 'Este campo es requerido' })}
              placeholder='(555) 555-5555'
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />

            <label className="block font-semibold">Rol</label>
            <select
              {...register('rol', { required: 'Este campo es requerido' })}
              className='border w-full h-12 px-3 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            >

              <option value="Empleado">Empleado</option>
              <option value="Admin">Admin</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Cajero">Cajero</option>
            </select>

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
