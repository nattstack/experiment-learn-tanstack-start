import { Column, Row } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: RouteTest,
})

function RouteTest() {
  return (
    <Column className="bg-gray-2 min-h-dvh">
      {/* Topbar */}
      <Row as="header" className="h-48">
        <p className="text-14 font-mono">topbar</p>
      </Row>

      {/* Content */}
      <Row className="grow">
        {/* Sidebar */}
        <Row as="aside" className="w-240 shrink-0">
          <p className="text-14 font-mono">sidebar</p>
        </Row>

        {/* Main */}
        <Row as="main" className="bg-gray-1 border-gray-4 rounded-8 shadow-2 m-8 grow border px-24">
          <p className="text-14 font-mono">main</p>
        </Row>
      </Row>
    </Column>
  )
}
