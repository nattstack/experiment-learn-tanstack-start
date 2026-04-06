import { Column, Row } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: RouteTest,
})

function RouteTest() {
  return (
    <Column className="min-h-dvh">
      {/* Topbar */}
      <Row as="header" className="h-64">
        topbar
      </Row>

      {/* Content */}
      <Row className="d grow">
        {/* Sidebar */}
        <Row as="aside" className="d w-240 shrink-0">
          sidebar
        </Row>

        {/* Main */}
        <Row as="main" className="d grow">
          main
        </Row>
      </Row>
    </Column>
  )
}
