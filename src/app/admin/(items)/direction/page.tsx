import { getAllData } from "@/actions/admin/getData";
import { AdminView } from "@/components/admin";
import { DirectionTable } from "@/components/admin/direction";
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

      <DirectionTable data={data} />
    </div>
  )
}

export default AdminDirecction