import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function CardOrdersDay() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Orders (day)</CardTitle>
        <Utensils className="text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">
          12
        </span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-3%</span> compared to yesterday
        </p>
      </CardContent>
    </Card>
  )
}