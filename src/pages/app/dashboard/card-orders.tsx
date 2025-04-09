import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function CardOrders() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Orders (month)</CardTitle>
        <Utensils className="text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">
          246
        </span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> compared to last month
        </p>
      </CardContent>
    </Card>
  )
}