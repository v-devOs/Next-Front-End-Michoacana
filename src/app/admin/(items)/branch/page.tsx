import { getAllData } from "@/actions/admin/getData"
import { AdminView } from "@/components/admin"
import { Table } from "@/components/admin/Table"
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

      <Table items={data} />

      {/* <BranchTable data={data} /> */}
    </div>
  )
}

export default AdminBranchPage