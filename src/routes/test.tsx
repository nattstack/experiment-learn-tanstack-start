import { Column, Row } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: RouteTest,
})

function RouteTest() {
  return (
    <Column className="d min-h-dvh">
      <Row as="header" className="d h-64">
        topbar
      </Row>
      <Row className="d h-full">content</Row>
    </Column>
  )
}
