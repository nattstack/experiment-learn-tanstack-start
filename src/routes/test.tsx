import { Button, Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { PropsWithChildren } from "react"
import { Logo } from "../components/logo"

export const Route = createFileRoute("/test")({
  component: RouteTest,
})

function RouteTest() {
  return (
    <Column className="bg-gray-2 min-h-dvh [--dimension-sidebar-width:240px] [--dimension-topbar-height:48px]">
      {/* Topbar */}
      <Row
        as="header"
        className="bg-gray-2 border-gray-4 sticky top-0 left-0 z-10 h-(--dimension-topbar-height) items-center border-b px-16"
      >
        <Logo />
      </Row>

      {/* Content */}
      <Row className="grow items-start">
        {/* Sidebar */}
        <Column
          as="aside"
          className="border-gray-4 sticky top-48 left-0 z-10 h-[calc(100dvh-var(--dimension-topbar-height))] w-(--dimension-sidebar-width) shrink-0 overflow-y-auto border-r py-8"
        >
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
        <Column as="main" className="bg-gray-1 grow px-24 py-24">
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
