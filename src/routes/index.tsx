import { Button, Row } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <Row className="d p-64">
      <Button variant="accent" onClick={() => {}}>
        Hello
      </Button>
    </Row>
  )
}
