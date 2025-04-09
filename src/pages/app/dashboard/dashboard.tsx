import { CardOrders } from './card-orders'
import { CardOrdersCancelled } from './card-orders-cancelled'
import { CardOrdersDay } from './card-orders-day'
import { CardRevenue } from './card-revenue'

export function Dashboard() {
  return (
    <>
      <title>🍕 Dashboard</title>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <CardRevenue />
          <CardOrders/>
          <CardOrdersDay />
          <CardOrdersCancelled />
        </div>
      </div>
    </>
  )
}