import { getAllData } from "@/actions/general/getData"
import { AdminView } from "@/components/admin"
import { BranchTable } from "@/components/admin/branch"
import { Branch } from "@/interfaces/admin"
import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
  title: 'Información Sucursales'
}

const AdminBranchPage = async () => {

  const data: Branch[] = await getAllData('branch');

  return (
    <div>
      <AdminView title="Información Sucursales" />

      <div className="flex justify-between items-baseline">
        <Link
          className="mb-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
          href={'/admin/branch/create'}
        >Crear</Link>
      </div>
      <BranchTable branches={data} />
    </div>
  )
}

export default AdminBranchPage