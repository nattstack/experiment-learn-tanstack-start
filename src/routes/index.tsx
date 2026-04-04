import { Button } from "@nattstack/ui"
// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return <Button onClick={() => {}}>Hello</Button>
}
