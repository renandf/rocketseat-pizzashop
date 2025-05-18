import { getManagedShop, GetManagedShopResponse } from '@/api/get-managed-shop'
import { updateProfile } from '@/api/update-profile'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from './ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable()
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  const { data: managedShop } = useQuery({
    queryKey: ['managed-shop'],
    queryFn: getManagedShop,
    staleTime: Infinity
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedShop?.name ?? '',
      description: managedShop?.description ?? '',
    }
  })

  function updateManagedShopCache({
    name,
    description
  }: StoreProfileSchema) {
    const cached = queryClient.getQueryData<GetManagedShopResponse>(['managed-shop'])

    if (cached) {
      queryClient.setQueryData<GetManagedShopResponse>(['managed-shop'], {
        ...cached,
        name,
        description,
      })
    }

    return { cached }
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,

    // onMutate is an 'optimistic update' that will update
    // the UI before successfull confirmation
    onMutate({ name, description }) {
      const { cached } = updateManagedShopCache({ name, description })

      return { previousProfile: cached }
    },

    // if onMutate fails, revert back to previous value
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedShopCache(context.previousProfile)
      }
    },
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })

      toast.success('Profile updated successfully!')
    } catch {
      toast.error('Error when updating profile. Please try again.')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Shop profile</DialogTitle>
        <DialogDescription>
          Update your shop details visible to your clients
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              className="col-span-3"
              id="name"
              {...register('name')}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description">
              Description
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">Cancel</Button>
          </DialogClose>
          <Button 
            type="submit" 
            variant="success"
            disabled={isSubmitting}
          >
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}