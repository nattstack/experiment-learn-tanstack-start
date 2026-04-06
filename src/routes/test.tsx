import { Button, Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { PropsWithChildren } from "react"
import { Logo } from "../components/logo"

export const Route = createFileRoute("/test")({
  component: RouteTest,
})

function RouteTest() {
  return (
    <Column className="bg-gray-2 min-h-dvh">
      {/* Topbar */}
      <Row as="header" className="bg-gray-2 sticky top-0 left-0 z-10 h-48 items-center px-16">
        <Logo />
      </Row>

      {/* Content */}
      <Row className="grow items-start">
        {/* Sidebar */}
        <Column as="aside" className="sticky top-48 left-0 z-10 w-240 shrink-0">
          {/* Sidebar links */}
          <Column className="gap-y-1 px-8">
            <SidebarLink isActive>New chat</SidebarLink>
            <SidebarLink>Search chats</SidebarLink>
            <SidebarLink>Images</SidebarLink>
            <SidebarLink>Library</SidebarLink>
            <SidebarLink>Apps</SidebarLink>
            <SidebarLink>Deep research</SidebarLink>
            <SidebarLink>Codex</SidebarLink>
            <SidebarLink>GPTs</SidebarLink>
          </Column>
        </Column>

        {/* Main */}
        <Column
          as="main"
          className="bg-gray-1 border-gray-4 rounded-8 shadow-2 mr-8 mb-8 grow border px-24"
        >
          <p className="text-14 font-mono">1 main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">main</p>
          <p className="text-14 font-mono">2 main</p>
          <p className="text-14 font-mono">2 main</p>
          <p className="text-14 font-mono">2 main</p>
          <p className="text-14 font-mono">2 main</p>
          <p className="text-14 font-mono">2 main</p>
          <p className="text-14 font-mono">2 main</p>
          <p className="text-14 font-mono">2 main</p>
        </Column>
      </Row>
    </Column>
  )
}

function SidebarLink(props: PropsWithChildren<{ isActive?: boolean }>) {
  const { children, isActive = false } = props

  return (
    <Row
      className="text-14 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-4 h-36 cursor-pointer items-center px-8"
      data-is-active={isActive}
    >
      {children}
    </Row>
  )
}
