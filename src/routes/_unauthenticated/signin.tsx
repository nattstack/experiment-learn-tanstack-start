import { Column } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_unauthenticated/signin")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Column>
      <p>Sign in</p>
    </Column>
  )
}
