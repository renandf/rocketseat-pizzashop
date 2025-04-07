import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({ 
  pageIndex,
  totalCount,
  perPage
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between text-muted-foreground">
      <span className="text-sm">
        {totalCount} {totalCount === 1 ? "item" : "total items"}
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hover:text-purple-600 dark:hover:text-purple-400">
            <ChevronsLeft />
            <span className="sr-only">First page</span>
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-purple-600 dark:hover:text-purple-400">
            <ChevronLeft />
            <span className="sr-only">Previous page</span>
          </Button>

          <div className="text-sm mx-4">
            Page <span className="font-medium text-foreground mx-1">{pageIndex + 1}</span> of {pages}
          </div>

          <Button variant="ghost" size="sm" className="hover:text-purple-600 dark:hover:text-purple-400">
            <ChevronRight />
            <span className="sr-only">Next page</span>
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-purple-600 dark:hover:text-purple-400">
            <ChevronsRight />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}