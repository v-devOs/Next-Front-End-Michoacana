
import { getAllData } from "@/actions/general/getData";
import { AdminView, Table } from "@/components/admin";
import { Direction } from "@/interfaces/admin";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Direcciones de Sucursales",
  description: "Información general sobre las sucursales",
};

const AdminDirecction = async () => {

  const data: Direction[] = await getAllData('direction');

  return (
    <div>
      <AdminView title="Direcciones de las sucursales" />

      <div className="flex justify-between items-baseline">
        <Link
          className="mb-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
          href={'/admin/direction/create'}
        >Crear</Link>
      </div>

      <Table items={data} />
    </div>
  )
}

export default AdminDirecction