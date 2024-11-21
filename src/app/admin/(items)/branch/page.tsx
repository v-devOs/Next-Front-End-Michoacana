import { getAllData } from "@/actions/admin/getData"
import { AdminView } from "@/components/admin"
import { BranchTable } from "@/components/admin/branch"
import { Branch } from "@/interfaces/admin"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Información Sucursales'
}


const AdminBranchPage = async () => {

  const data: Branch[] = await getAllData('branch');

  return (
    <div>
      <AdminView title="Información Sucursales" />

      <BranchTable branches={data} />
    </div>
  )
}

export default AdminBranchPage