'use client'

import { Loading } from "@/components/ui"
import { AuthContext } from "@/context/auth"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"


interface AuthData {
  email: string,
  password: string
}

const LoginPage = () => {
  const { isLoggedIn, loginUser, user } = useContext(AuthContext)
  const [isloading, setIsloading] = useState(false);
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthData>()

  const onSubmit = async (data: AuthData) => {

    setIsloading(current => !current)
    await loginUser(data.email, data.password)
    setIsloading(current => !current)

  }

  useEffect(() => {
    if (isLoggedIn && user?.employee.rol.includes('Admin')) {
      router.replace('/admin')
    }
    if (isLoggedIn && user?.employee.rol.includes('Empleado'))
      router.replace('/sales')
  }, [isLoggedIn, router, user?.employee.rol])

  if (isloading)
    return <Loading />

  return (

    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray">
      <div className="relative sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Inicia Sesión</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "El correo no tiene un formato válido"
                }
              })}
              placeholder='alguien@michoacana.com'
              className='border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
            )}

            <label className="block font-semibold">Contraseña</label>
            <input
              type="password"
              {...register('password', {
                required: 'Este campo es requerido',
                // minLength: {
                //   value: 8,
                //   message: 'La contraseña debe tener al menos 8 caracteres'
                // }
              })}
              placeholder='segura'
              className='border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
            )}



            <div className="flex justify-between items-baseline">
              <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage