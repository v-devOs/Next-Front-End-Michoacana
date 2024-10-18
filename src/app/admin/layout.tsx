import { Sidebar } from "@/components/admin"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
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

export default AdminLayout
