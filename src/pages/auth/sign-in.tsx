import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<SignInForm>()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })

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
      <title>🍕 Log in</title>
      <div className="p-8">
        <Button variant="link" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">
            New account
          </Link>
        </Button>

        <div className="w-96 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Access dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage your pizza shop via our partner dashboard!</p>

          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-2 flex flex-col gap-2">
            <div>
              <Label className="mb-2" htmlFor="email">Email</Label>
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