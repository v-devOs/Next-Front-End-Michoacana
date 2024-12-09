'use client'

import { useEffect, useState, ChangeEvent } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'

import { Loading } from "@/components/ui"
import { Branch, Employee, EmployeePost, Storage } from "@/interfaces/admin"
import { uploadImage } from '../../../lib/cloudinary/index';
import { createData, updateData } from "@/actions/admin/crudActions"
import { getAllData } from "@/actions/general/getData"


interface Props {
  title: string
  data?: Employee
}

export const EmployeeForm = ({ title, data }: Props) => {
  const [imgUrl, setImgUrl] = useState('')
  const [branches, setBranches] = useState<Branch[]>()
  const [storages, setStorages] = useState<Storage[]>()
  const searchParams = useSearchParams()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset
  } = useForm<Employee>()

  const onSubmit = async (dataForm: Employee) => {
    const isUpdate = searchParams.get('action') === 'update'

    console.log({ dataForm })
    const dataToSend: EmployeePost = {
      profile_picture_url: imgUrl || dataForm.profile_picture_url,
      active: dataForm.active,
      gender: dataForm.gender,
      id_branch: +dataForm.branch,
      id_storage: +dataForm.storage,
      name: dataForm.name,
      second_surname: dataForm.second_surname,
      rol: dataForm.rol,
      surname: dataForm.surname,
      tel: dataForm.tel
    }

    try {
      if (isUpdate)
        await updateData<EmployeePost>(dataToSend, 'employee', `${dataForm.id_employee}`)
      else
        await createData<EmployeePost>(dataToSend, 'employee')

      Swal.fire({
        title: 'Success',
        text: `Empleado ${isUpdate ? 'actualizado' : 'creado'} correctamente`,
        icon: 'success'
      })

      router.replace('/admin/employee')

    } catch (error) {
      console.log('Error al procesar empleado', error)
      Swal.fire({
        title: 'Error',
        text: 'Error al procesar empleado',
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
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  }

  useEffect(() => {
    const loadBranches = async () => {
      const data = await getAllData('branch')
      setBranches(data)
    }

    const loadStorages = async () => {
      const data = await getAllData('storage')
      setStorages(data)
    }
    loadBranches()
    loadStorages()

  }, [])


  useEffect(() => {
    if (data) {
      reset(data)
      if (data.profile_picture_url) {
        setImgUrl(data.profile_picture_url)
      }
    }
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
            </select>

            <label className="block font-semibold">Activo</label>
            <input
              {...register('active')}
              type="checkbox"
              className="border h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />

            <label className="block font-semibold">Branch</label>
            <select
              {...register('branch', { required: 'Este campo es requerido' })}
              className='border w-full h-12 px-3 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            >
              {branches?.map(branch => (
                <option key={branch.id_branch} value={branch.id_branch}>{branch.name}</option>
              ))}
            </select>

            <label className="block font-semibold">Storage</label>
            <select
              {...register('storage', { required: 'Este campo es requerido' })}
              className='border w-full h-12 px-3 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            >
              {storages?.map(storage => (
                <option key={storage.id_storage} value={storage.id_storage}>{storage.id_storage}</option>
              ))}
            </select>

            <div className="flex justify-between items-baseline">
              <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
