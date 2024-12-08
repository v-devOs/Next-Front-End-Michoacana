
import { getAllData } from "@/actions/general/getData";
import { AdminView, Table } from "@/components/admin";
import { Direction } from "@/interfaces/admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Direcciones de Sucursales",
  description: "Información general sobre las sucursales",
};

const AdminDirecction = async () => {

  const data: Direction[] = await getAllData('direction');

  return (
    <div>
      <AdminView title="Direcciones de las sucursales" />

      <Table items={data} />
    </div>
  )
}

export default AdminDirecction