import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/app/settings")({
  component: function RouteAppSettings() {
    return (
      <>
        <p className="text-14">Settings page</p>
      </>
    )
  },
})
