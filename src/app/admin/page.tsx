'use client'
import { getAllData } from "@/actions/general/getData"
import { AdminView } from "@/components/admin"
import { Loading } from "@/components/ui"
import { AuthContext } from "@/context/auth"
import { SaleDetails } from "@/interfaces/admin/SaleDetails"
import { useContext, useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { getDataByid } from "@/actions/admin/crudActions"

interface ChartDataPoint {
  date: string;
  ventas: number;
}

interface DetailedSale extends SaleDetails {
  employee?: {
    name: string;
    surname: string;
    second_surname: string;
  };
  product?: {
    product: string;
    price: number;
  };
}

const AdminPage = () => {
  const { user } = useContext(AuthContext)
  const [data, setData] = useState<SaleDetails[] | null>(null)
  const [currentMonthSales, setCurrentMonthSales] = useState<SaleDetails[] | null>(null)
  const [chartData, setChartData] = useState<ChartDataPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [detailedSales, setDetailedSales] = useState<DetailedSale[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllData('sale-details')
      setData(result)

      // Obtener detalles adicionales para cada venta
      const salesWithDetails = await Promise.all(
        result.map(async (sale: SaleDetails) => {
          const employee = await getDataByid('employee', `${sale.id_employee}`)
          const product = await getDataByid('product', `${sale.id_product}`)

          return {
            ...sale,
            employee,
            product
          }
        })
      )

      setDetailedSales(salesWithDetails)

      // Filtrar ventas del mes actual
      const today = new Date()
      const currentMonth = today.getMonth()
      const currentYear = today.getFullYear()

      const thisMonthSales = result.filter((sale: SaleDetails) => {
        const saleDate = new Date(sale.date)
        return saleDate.getMonth() === currentMonth &&
          saleDate.getFullYear() === currentYear
      })

      // Preparar datos para la gráfica
      const salesByMonth: Record<string, number> = {}

      result.forEach((sale: SaleDetails) => {
        const date = new Date(sale.date)
        const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`

        if (!salesByMonth[monthYear]) {
          salesByMonth[monthYear] = 0
        }
        salesByMonth[monthYear] += 1
      })

      const formattedChartData: ChartDataPoint[] = Object.entries(salesByMonth)
        .map(([date, count]): ChartDataPoint => ({
          date,
          ventas: count
        }))
        .sort((a, b) => a.date.localeCompare(b.date))

      setChartData(formattedChartData)
      setCurrentMonthSales(thisMonthSales)
      setLoading(false)
    }
    fetchData()
  }, [])

  const generatePDF = () => {
    const doc = new jsPDF()

    // Encabezado
    doc.setFontSize(20)
    doc.text('Reporte de Ventas', 20, 20)

    // Información del usuario
    doc.setFontSize(12)
    doc.text(`Generado por: ${user?.employee.name} ${user?.employee.surname} ${user?.employee.second_surname}`, 20, 30)
    doc.text(`Rol: ${user?.employee.rol}`, 20, 40)
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 50)

    // Resumen
    doc.text('Resumen:', 20, 70)
    doc.text(`Total de ventas: ${data?.length}`, 30, 80)
    doc.text(`Ventas del mes actual: ${currentMonthSales?.length}`, 30, 90)

    // Tabla de ventas por mes
    const monthlyTableData = chartData.map(item => [
      item.date,
      item.ventas.toString()
    ])

      ; (doc as any).autoTable({
        startY: 100,
        head: [['Mes', 'Cantidad de Ventas']],
        body: monthlyTableData,
      })

    // Tabla detallada de ventas
    const detailedTableData = detailedSales.map(sale => [
      new Date(sale.date).toLocaleDateString(),
      sale.product?.product || 'N/A',
      `$${sale.product?.price || 0}`,
      `${sale.employee?.name || 'N/A'} ${sale.employee?.surname || ''} ${sale.employee?.second_surname || ''}`,
      sale.quantity.toString(),
      `$${(sale.quantity * (sale.product?.price || 0)).toFixed(2)}`
    ])

      ; (doc as any).autoTable({
        startY: (doc as any).lastAutoTable.finalY + 20,
        head: [['Fecha', 'Producto', 'Precio Unit.', 'Vendedor', 'Cantidad', 'Total']],
        body: detailedTableData,
      })

    doc.save('reporte-ventas.pdf')
  }

  if (loading) return <Loading />

  return (
    <>
      <AdminView title={`Bienvenido ${user?.employee.name}`} />

      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-2">Ventas totales: </h2>
          <p className="text-2xl text-purple-600 font-bold">{data?.length}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-2">Ventas del mes en curso: </h2>
          <p className="text-2xl text-purple-600 font-bold">{currentMonthSales?.length}</p>
        </div>
      </div>

      <div className="px-4 mb-4">
        <button
          onClick={generatePDF}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
          </svg>
          Generar PDF
        </button>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">Histórico de Ventas</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="ventas"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}

export default AdminPage