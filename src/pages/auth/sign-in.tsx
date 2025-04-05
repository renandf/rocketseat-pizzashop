import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('We sent you an authentication link via email. Click on that link to log in.', {
        action: {
          label: 'Resend',
          onClick: () => {handleSignIn(data)},
        }
      })
    } catch {
      toast.error('Invalid credentials.')
    }
  }

  return (
    <>
      <title>🍕 Sign in</title>
      <div className="p-8">
        <div className="w-96 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Access dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage your pizza shop via our partner dashboard!</p>

          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-2 flex flex-col gap-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
              />
            </div>

            <Button type="submit" disabled={isSubmitting}>Access dashboard</Button>
          </form>
        </div>
      </div>
    </>
  )
}