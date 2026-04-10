import { Label, Spacer, Button, Input } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/app/settings")({
  component: function RouteAppSettings() {
    return (
      <>
        <Spacer height={64} />

        <Label htmlFor="name">Name</Label>
        <Spacer height={4} />
        <Input name="name" id="name" placeholder="Name" />
        <Spacer height={32} />

        <Label htmlFor="email">Email</Label>
        <Spacer height={4} />
        <Input name="email" id="email" placeholder="Email" type="email" />
        <Spacer height={32} />

        <Button>Save</Button>
      </>
    )
  },
})
