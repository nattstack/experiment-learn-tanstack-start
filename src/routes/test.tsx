import { Button, Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { Logo } from "../components/logo"

export const Route = createFileRoute("/test")({
  component: RouteTest,
})

function RouteTest() {
  return (
    <Column className="bg-gray-2 min-h-dvh">
      {/* Topbar */}
      <Row as="header" className="h-48 items-center px-16">
        <Logo />
      </Row>

      {/* Content */}
      <Row className="grow">
        {/* Sidebar */}
        <Column as="aside" className="w-240 shrink-0">
          <Column className="gap-y-1 px-8">
            <Row
              className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
              data-is-active={true}
            >
              New chat
            </Row>
            <Row
              className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
              data-is-active={false}
            >
              Search chats
            </Row>
            <Row
              className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
              data-is-active={false}
            >
              Images
            </Row>
            <Row
              className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
              data-is-active={false}
            >
              Library
            </Row>
            <Row
              className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
              data-is-active={false}
            >
              Apps
            </Row>
            <Row
              className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
              data-is-active={false}
            >
              Deep research
            </Row>
            <Row
              className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
              data-is-active={false}
            >
              Codex
            </Row>
            <Row
              className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
              data-is-active={false}
            >
              GPTs
            </Row>
          </Column>
        </Column>

        {/* Main */}
        <Column
          as="main"
          className="bg-gray-1 border-gray-4 rounded-8 shadow-2 mr-8 mb-8 grow border px-24"
        >
          <p className="text-14 font-mono">main</p>
        </Column>
      </Row>
    </Column>
  )
}
