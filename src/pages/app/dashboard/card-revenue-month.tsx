import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export function CardRevenueMonth() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Income (month)</CardTitle>
        <DollarSign className="text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">
          $1,248.60
        </span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span> compared to last month
        </p>
      </CardContent>
    </Card>
  )
}