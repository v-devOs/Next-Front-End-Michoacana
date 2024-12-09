'use client'

import { Loading } from "@/components/ui"
import { UserClass, UserPost } from "@/interfaces/general"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter, useSearchParams } from "next/navigation"
import { Employee } from "@/interfaces/admin"
import { getAllData } from "@/actions/general/getData"
import Swal from "sweetalert2"
import { createData, updateData } from "@/actions/admin/crudActions"

interface Props {
  title: string
  data?: UserPost
  isPostForm: boolean
}

export const UserForm = ({ data, title, isPostForm = true }: Props) => {
  const [employees, setEmployees] = useState<Employee[]>()
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<UserClass>()

  const onSubmit = async (dataForm: UserClass) => {

    const dataToSend: UserPost = {
      active: dataForm.active,
      email: dataForm.email,
      id_employee: +dataForm.employee,
      password: dataForm.password!
    }

    try {
      const isUpdate = searchParams.get('action') === 'update'

      if (isUpdate) {
        await updateData<UserPost>(dataToSend, 'user', `${dataForm.id_user}`)
      } else {
        await createData<UserPost>(dataToSend, 'user')
        router.push('/admin/user')
      }

      Swal.fire({
        title: 'Success',
        text: `Usuario ${isUpdate ? 'actualizado' : 'creado'} correctamente`,
        icon: 'success'
      })

    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: `Error al ${searchParams.get('action') ? 'actualizar' : 'crear'} usuario`,
        icon: 'error'
      })
      console.log('Error al procesar registro:', error)
    }
  }

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const employeesData = await getAllData('employee')
        setEmployees(employeesData)
      } catch (error) {
        console.error('Error loading employees:', error)
        Swal.fire({
          title: 'Error',
          text: 'Error al cargar la lista de empleados',
          icon: 'error'
        })
      }
    }

    loadEmployees()
  }, [])

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
            <label className="block font-semibold">Email</label>
            <input
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
              type="email"
              placeholder='ejemplo@correo.com'
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />
            <label className="block font-semibold">Password</label>
            <input
              {...register('password', {
                required: 'Este campo es requerido',

              })}
              type="password"
              placeholder='ejemplo@correo.com'
              className='border w-full h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />

            <label className="block font-semibold">Empleado</label>
            <select
              {...register('employee', { required: 'Este campo es requerido' })}
              className='border w-full px-3 py-2 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            >
              <option value="">Seleccione un empleado</option>
              {employees?.map((emp) => (
                <option key={emp.id_employee} value={emp.id_employee}>
                  {emp.name}
                </option>
              ))}
            </select>


            <label className="block font-semibold">Activo</label>
            <input
              {...register('active')}
              type="checkbox"
              className="border h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />

            {/* Note: Employee fields would go here once the Employee interface is defined */}

            <div className="flex justify-between items-baseline">
              <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">
                {searchParams.get('action') === 'update' ? 'Actualizar' : 'Crear'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
