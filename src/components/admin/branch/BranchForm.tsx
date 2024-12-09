'use client'

import { useEffect, useState, } from "react"

import { useRouter, useSearchParams } from "next/navigation"

import Swal from "sweetalert2";

import { createData, updateData } from "@/actions/admin/crudActions"
import { Loading } from "@/components/ui"

import { Branch, BranchPost, Contact, Direction } from "@/interfaces/admin"
import { useForm } from 'react-hook-form'
import { getAllData } from "@/actions/general/getData";


interface Props {
  title: string
  data?: Branch
  isPostForm?: boolean
}

export const BranchForm = ({ title, data, isPostForm = true }: Props) => {
  const [contacts, setContacts] = useState<Contact[]>()
  const [directions, setDirections] = useState<Direction[]>()

  const searchParams = useSearchParams()
  const router = useRouter()

  const { register, handleSubmit, formState: { }, reset } = useForm<Branch>()

  const onSubmit = async (dataForm: Branch) => {
    try {
      const isUpdate = searchParams.get('action') === 'update'

      const baseData: BranchPost = {
        name: dataForm.name,
        hour_start: +dataForm.hour_start,
        hour_end: +dataForm.hour_end,
        id_contact: +dataForm.contact.email,
      }

      const dataToSend: BranchPost = isUpdate
        ? {
          ...baseData,
          date_start: dataForm.date_start,
        }
        : {
          ...baseData,
          date_start: new Date().toISOString(),
          id_direction: +dataForm.direction.street
        }

      if (isUpdate) {
        await updateData<BranchPost>(dataToSend, 'branch', `${dataForm.id_branch}`)
      } else {
        await createData<BranchPost>(dataToSend, 'branch')
        router.replace('/admin/branch')
      }

      Swal.fire({
        title: 'Success',
        text: `Sucursal ${isUpdate ? 'actualizada' : 'creada'} correctamente`,
        icon: 'success'
      })

    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: `Error al ${searchParams.get('action') ? 'actualizar' : 'crear'} sucursal`,
        icon: 'error'
      })
      console.log('Error al procesar registro:', error)
    }
  }

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const contactsData = await getAllData('contact')
        setContacts(contactsData)
      } catch (error) {
        console.error('Error loading directions:', error)
      }
    }

    const loadDirections = async () => {
      try {
        const directionsData = await getAllData('direction')
        setDirections(directionsData)
      } catch (error) {
        console.log('Error on loading directions: ', error)
      }
    }

    loadContacts()
    loadDirections()
  }, [])

  useEffect(() => {
    if (data)
      reset(data)

  }, [data, reset])

  if (!data && isPostForm) {
    return <Loading />
  }

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray">
      <div className="relative sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">{title}</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
            <label htmlFor="" className="block font-semibold">Nombre Sucursal</label>
            <input
              {
              ...register('name', { required: 'Este campo es requerido' })
              }
              placeholder='Sucursal Madero'
              className='border w-full h-5 px-3 py-5  mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md' />

            <label htmlFor="" className="block font-semibold">Hora de Apertura</label>
            <input
              {
              ...register('hour_start', { required: 'Este campo es requerido' })
              }
              type="number"
              className="border w-full h-5 px-3 py-5  mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />
            <label htmlFor="" className="block font-semibold">Hora de Cierre</label>
            <input
              {
              ...register('hour_end', { required: 'Este campo es requerido' })
              }
              type="number"
              className="border w-full h-5 px-3 py-5  mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />

            <label htmlFor="" className="block font-semibold">Activo</label>
            <input
              {
              ...register('active')
              }
              type="checkbox"
              className="border h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />

            <label className="block font-semibold">Datos de Contacto</label>
            <select
              {...register('contact.email', { required: 'Este campo es requerido' })}
              className="border w-full px-3 py-2 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            >
              <option value="">Seleccione un contacto</option>
              {contacts?.map((contact) => (
                <option key={contact.id_contact} value={contact.id_contact}>
                  {contact.email}
                </option>
              ))}
            </select>

            {
              !searchParams.get('action') && (
                <select
                  {...register('direction.street', { required: 'Este campo es requerido' })}
                  className="border w-full px-3 py-2 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                >
                  <option value="">Seleccione un contacto</option>
                  {directions?.map((direction) => (
                    <option key={direction.id_direction} value={direction.id_direction}>
                      {direction.street}
                    </option>
                  ))}
                </select>
              )
            }

            <div className="flex justify-between items-baseline">
              <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
