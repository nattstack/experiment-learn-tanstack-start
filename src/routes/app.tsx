import { Button, Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute, Link, type LinkProps, Outlet } from "@tanstack/react-router"
import { useState } from "react"
import { Logo } from "../components/logo"

export const Route = createFileRoute("/app")({
  component: function RouteApp() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

    return (
      <Column className="min-h-dvh [--dimension-sidebar-width:240px] [--dimension-topbar-height:56px]">
        {/* Topbar */}
        <Row
          as="header"
          className="bg-gray-2 border-gray-4 fixed top-0 left-0 z-10 h-(--dimension-topbar-height) w-full items-center border-b px-16"
        >
          <Link to="/app" className="-ml-8 p-8 transition-opacity hover:opacity-50">
            <Logo />
          </Link>
        </Row>

        {/* Content */}
        <Row>
          {/* Sidebar */}
          <Column
            as="aside"
            className="bg-gray-2 border-gray-4 fixed top-(--dimension-topbar-height) left-0 z-10 h-[calc(100dvh-var(--dimension-topbar-height))] w-(--dimension-sidebar-width) shrink-0 overflow-y-auto border-r py-8 transition-[left] data-[is-sidebar-expanded=false]:-left-(--dimension-sidebar-width)"
            data-is-sidebar-expanded={isSidebarExpanded}
          >
            <Column className="mx-16">
              <Button
                isFullWidth
                onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                variant="secondary"
              >
                isSidebarExpanded: {isSidebarExpanded.toString()}
              </Button>
            </Column>
            <Spacer height={8} />

            {/* Sidebar links */}
            <Column className="gap-y-2 px-8">
              <SidebarLink to="/app">New chat</SidebarLink>
              <SidebarLink to="/app/search">Search chats</SidebarLink>
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
            className="bg-gray-1 mt-(--dimension-topbar-height) ml-(--dimension-sidebar-width) grow px-16 py-16 transition-[margin-left] data-[is-sidebar-expanded=false]:ml-0"
            data-is-sidebar-expanded={isSidebarExpanded}
          >
            <Outlet />
          </Column>
        </Row>
      </Column>
    )
  },
})

function SidebarLink(props: LinkProps) {
  const { children = "", to = "/" } = props

  return (
    <Link
      activeOptions={{
        exact: true,
      }}
      className="text-14 hover:bg-gray-3 rounded-8 data-[status=active]:bg-gray-4 data-[status=active]:text-gray-12 flex h-36 cursor-pointer items-center px-8"
      to={to}
    >
      {children}
    </Link>
  )
}
