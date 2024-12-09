"use client"
import { ReactNode, useContext, useEffect } from "react"
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/admin"
import { AuthContext } from "@/context/auth"

interface Props {
  children: ReactNode
}

const AdminLayoutContent = ({ children }: Props) => {
  const { isLoggedIn, user } = useContext(AuthContext)

  useEffect(() => {
    if (!isLoggedIn) {
      redirect('/auth/login')
    }

    if (isLoggedIn && user?.employee.rol !== 'Admin')
      redirect('/auth/sales')
  }, [isLoggedIn, user?.employee.rol])

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>


      <div className="col-span-10">
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

const AdminLayout = ({ children }: Props) => {
  return (
    <AdminLayoutContent>
      {children}
    </AdminLayoutContent>
  )
}

export default AdminLayout
