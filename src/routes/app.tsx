import { Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute, Link, Outlet } from "@tanstack/react-router"
import { Logo } from "../components/logo"
import { Sidebar } from "../components/sidebar"

export const Route = createFileRoute("/app")({
  component: function RouteApp() {
    return (
      <Column className="min-h-dvh [--dimension-sidebar-desktop-width-collapsed:52px] [--dimension-sidebar-desktop-width-expanded:240px] [--dimension-topbar-height:56px]">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <Row className="grow">
          {/* Sidebar */}
          <Sidebar />

          {/* Main */}
          <Column
            as="main"
            className="bg-gray-1 border-gray-4 rounded-8 shadow-2 mr-8 mb-8 grow border"
          >
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

function Topbar() {
  return (
    <>
      <Row
        as="header"
        className="bg-gray-2 fixed top-0 left-0 z-10 h-(--dimension-topbar-height) w-full items-center px-16"
      >
        {/* Logo */}
        <Link to="/app" className="-ml-8 p-8 transition-opacity hover:opacity-50">
          <Logo />
        </Link>
      </Row>
      <Spacer height="var(--dimension-topbar-height)" />
    </>
  )
}
