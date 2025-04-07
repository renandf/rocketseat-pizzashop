import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'
import { OrdersDetails } from './orders-details'

// interface OrderTableRowProps {}

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search />
              <span className="sr-only">Order details</span>
            </Button>
          </DialogTrigger>

          <OrdersDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        2309fkajf0293
      </TableCell>
      <TableCell className="text-muted-foreground">
        15 minutes ago
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pending</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">
        Renan Castro
      </TableCell>
      <TableCell className="font-medium">$149.00</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight />
          Approve
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}