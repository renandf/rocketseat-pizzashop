import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

const signUpForm = z.object({
  shopName: z.string(),
  managerName: z.string(),
  phone: z.number(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Shop registered successfully!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        }
      })
    } catch {
      toast.error('Error when registering new shop.')
    }
  }

  return (
    <>
      <title>🍕 Sign up</title>
      <div className="p-8">
        <Button variant="link" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">
            Login
          </Link>
        </Button>

        <div className="w-96 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create free account</h1>
            <p className="text-sm text-muted-foreground">Become a partner and start selling!</p>

          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-2 flex flex-col gap-2">
            <div>
              <Label className="mb-2" htmlFor="shopName">Shop name</Label>
              <Input
                id="shopName"
                type="text"
                {...register('shopName')}
              />
            </div>
            
            <div>
              <Label className="mb-2" htmlFor="managerName">Your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div>
              <Label className="mb-2" htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
              />
            </div>

            <div>
              <Label className="mb-2" htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
              />
            </div>

            <Button type="submit" disabled={isSubmitting}>Create account</Button>

            <p className="px-6 text-center text-sm text-muted-foreground">
              By creating an account, you are agreeing to our <a href="" className="underline underline-offset-4 text-primary hover:text-purple-600">terms of service</a> and <a href="" className="underline underline-offset-4 text-primary hover:text-purple-600">privacy policy</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}