import { getManagedShop } from '@/api/get-managed-shop'
import { getProfile } from '@/api/get-profile'
import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })

  const { data: managedShop, isLoading: isLoadingManagedShop } = useQuery({
    queryKey: ['managed-shop'],
    queryFn: getManagedShop
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
          {isLoadingManagedShop ? (
            <Skeleton className="h-4 w-40" />
          ) : (
            managedShop?.name
          )}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {isLoadingProfile ? (
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-40" />
            </div>
          ) : (
            <>
              <span>{profile?.name}</span>
              <span className="text-sm font-normal text-muted-foreground">
                {profile?.email}
              </span>
            </>
          )}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Shop profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:text-rose-500 dark:hover:text-rose-400 ">
          <LogOut className="mr-2 h-4 w-4 text-rose-500 dark:text-rose-400" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}