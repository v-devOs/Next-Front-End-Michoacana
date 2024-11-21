'use client'


import { Loading } from "@/components/ui"

import { Branch } from "@/interfaces/admin"
import { useEffect } from "react"
import { useForm } from 'react-hook-form'

interface Props {
  title: string
  data?: Branch
}

export const BranchForm = ({ title, data }: Props) => {
  // const [contacts, setContact] = useState<Contact[]>([])

  const { register, handleSubmit, formState: { }, reset } = useForm<Branch>({
    defaultValues: {
      ...data
    }
  })

  const onSubmit = (data: Branch) => {
    // TODO: INTEGRAR EL SERVER ACTION PARA IMPACTAR LA BASE DE DATOS
    console.log({ data }, 'Data del formulario')
  }

  useEffect(() => {
    if (data)
      reset(data)

  }, [data, reset])

  // useEffect(() => {
  //   const loadContacts = async () => {
  //     try {
  //       const contactsData = await getAllData('contact')
  //       setContact(contactsData)
  //     } catch (error) {
  //       console.error('Error loading directions:', error)
  //     }
  //   }

  //   loadContacts()
  // }, [])

  if (!data) {
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

            {/* <label className="block font-semibold">Datos de Contacto</label>
            <select
              {...register('contact.email', { required: 'Este campo es requerido' })}
              className="border w-full px-3 py-2 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            >
              <option value="">Seleccione una dirección</option>
              {contacts.map((contact) => (
                <option key={contact.id_contact} value={contact.id_contact}>
                  {contact.email}
                </option>
              ))}
            </select> */}

            <div className="flex justify-between items-baseline">
              <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
