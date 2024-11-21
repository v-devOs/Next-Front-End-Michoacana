'use client'

import { Branch } from "@/interfaces/admin"
import { useForm } from "useform-simple-hook"

interface Props {
  title: string
  data?: Branch
}

interface formData {
  name?: string
  hour_start?: number
  hour_end?: number
  active?: boolean
}

export const BranchForm = ({ title, data }: Props) => {
  const { formState, onInputChange } = useForm(data)

  const { name, hour_start, hour_end, active }: formData = formState

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray">
      <div className="relative sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">{title}</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <form action="/" className="px-8 py-6">
            <label htmlFor="" className="block font-semibold">Nombre Sucursal</label>
            <input
              name='name'
              type='text'
              placeholder='Sucursal Madero'
              onChange={onInputChange}
              value={name}
              className='border w-full h-5 px-3 py-5  mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md' />

            <label htmlFor="" className="block font-semibold">Hora de Apertura</label>
            <input
              name="hour_start"
              onChange={onInputChange}
              value={hour_start}
              type="number"
              className="border w-full h-5 px-3 py-5  mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />
            <label htmlFor="" className="block font-semibold">Hora de Cierre</label>
            <input
              name="hour_start"
              onChange={onInputChange}
              value={hour_end}
              type="number"
              className="border w-full h-5 px-3 py-5  mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />

            <label htmlFor="" className="block font-semibold">Hora de Cierre</label>
            <input
              name="active"
              onChange={onInputChange}
              checked={active}
              value={`${active}`}
              type="checkbox"
              className="border h-5 px-3 py-5 mb-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
