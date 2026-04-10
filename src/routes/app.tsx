import { Column, Row } from "@nattstack/ui"
import { createFileRoute, Outlet } from "@tanstack/react-router"
import { SidebarDesktop } from "../components/sidebar-desktop"
import { SidebarMobile } from "../components/sidebar-mobile"
import { Topbar } from "../components/topbar"

export const Route = createFileRoute("/app")({
  component: function RouteApp() {
    return (
      <Column className="min-h-dvh [--dimension-sidebar-desktop-width-collapsed:52px] [--dimension-sidebar-desktop-width-expanded:240px] [--dimension-topbar-height:56px]">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <Row className="grow">
          {/* Sidebar */}
          <SidebarDesktop />
          <SidebarMobile />

          {/* Main */}
          <Column
            as="main"
            className="bg-bg-primary border-border rounded-8 shadow-2 max-768:mr-0 max-768:mb-0 max-768:rounded-none max-768:shadow-none max-768:border-none max-768:bg-transparent mr-8 mb-8 grow border"
          >
            {/* Main wrapper */}
            <Column className="mx-auto w-full max-w-768 px-16">
              <Outlet />
            </Column>
          </Column>
        </Row>
      </Column>
    )
  },
})
