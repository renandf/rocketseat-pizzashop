import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, X } from 'lucide-react'

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filters:</span>
      <Input placeholder="Order ID" className="h-8 w-auto" />
      <Input placeholder="Client name" className="h-8 w-xs" />
      <Select defaultValue="all">
        <SelectTrigger size="sm" className="w-[164px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All status</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="delivering">Out for delivery</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="sm" className="hover:text-purple-600 dark:hover:text-purple-400">
        <Search />
        Apply filters
      </Button>

      <Button type="button" variant="ghost" size="sm" className="text-muted-foreground">
        <X />
        Clear
      </Button>
    </form>
  )
}