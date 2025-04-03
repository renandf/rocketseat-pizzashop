import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export function SignIn() {
  return (
    <>
      <title>🍕 Sign in</title>
      <div className="p-8">
        <div className="w-96 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Access dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage your pizza shop via our partner dashboard!</p>

          </div>

          <form className="space-y-2 flex flex-col gap-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>

            <Button type="submit">Access dashboard</Button>
          </form>
        </div>
      </div>
    </>
  )
}