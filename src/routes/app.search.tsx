import { Column } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/app/search")({
  component: function RouteAppSearch() {
    return <Column className="">search</Column>
  },
})
