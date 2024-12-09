'use client'

import { useState } from "react"
import { ContactForm } from "./ContactForm"

export const BranchPostFormContainer = () => {

  const [isActiveForm, setIsActiveForm] = useState(false)


  return (

    <div className="mb-4">
      <div className="flex justify-between items-baseline">
        <button
          className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-sm hover:bg-purple-600 "
          onClick={() => setIsActiveForm(current => !current)}
        >
          Crear
        </button>
      </div>

      <div className={`${!isActiveForm && 'hidden'}`}>
        <ContactForm title="Crear nueva información de conracto" isPostForm={false} />
      </div>
    </div >
  )
}
