import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/app/settings")({
  component: function RouteAppSettings() {
    return (
      <>
        <p>Settings page</p>
        <p>Test</p>
        <a href="https://www.google.com">Test</a>
        <code>Test</code>

        <h1>Heading 1</h1>
      </>
    )
  },
})
