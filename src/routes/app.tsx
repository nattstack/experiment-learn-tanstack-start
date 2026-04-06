import { Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute, Link, Outlet } from "@tanstack/react-router"
import { useState } from "react"
import { Logo } from "../components/logo"
import { Sidebar } from "../components/sidebar"

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
          {/* Logo */}
          <Link to="/app" className="-ml-8 p-8 transition-opacity hover:opacity-50">
            <Logo />
          </Link>
        </Row>
        <Spacer height="var(--dimension-topbar-height)" />

        {/* Content */}
        <Row>
          {/* Sidebar */}
          <Sidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />

          {/* Main */}
          <Column as="main" className="bg-gray-1 grow px-16 py-16">
            {/* Main wrapper */}
            <Column className="mx-auto w-full max-w-768">
              <Outlet />
            </Column>
          </Column>
        </Row>
      </Column>
    )
  },
})
