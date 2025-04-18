import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import colors from 'tailwindcss/colors'

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 800 },
  { date: '12/12', revenue: 900 },
  { date: '13/12', revenue: 400 },
  { date: '14/12', revenue: 2300 },
  { date: '15/12', revenue: 800 },
  { date: '16/12', revenue: 640 },
]

export function ChartRevenue() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <CardTitle className="text-base font-medium">
          Income
        </CardTitle>
        <CardDescription>Daily income during the time period.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              dy={16}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />

          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}