import { Sidebar } from "@/components/admin"
import { AuthProvider } from "@/context/auth/AuthProvider"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
  return (
    <AuthProvider>

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
    </AuthProvider>
  )
}

export default AdminLayout
