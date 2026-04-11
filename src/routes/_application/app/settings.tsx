import { Label, Spacer, Button, Input } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_application/app/settings")({
  component: function RouteAppSettings() {
    return (
      <>
        <Spacer height={64} />

        <Label htmlFor="name">Name</Label>
        <Spacer height={4} />
        <Input className="max-w-320" name="name" id="name" placeholder="Name" />
        <Spacer height={32} />

        <Label htmlFor="email">Email</Label>
        <Spacer height={4} />
        <Input className="max-w-320" name="email" id="email" placeholder="Email" type="email" />
        <Spacer height={32} />

        <Button>Save</Button>
      </>
    )
  },
})
