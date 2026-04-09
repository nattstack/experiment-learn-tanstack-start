import { Column, Row } from "@nattstack/ui"
import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Sidebar } from "../components/sidebar"
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
          <Sidebar />

          {/* Main */}
          <Column
            as="main"
            className="bg-bg-primary border-border rounded-8 shadow-2 max-768:ml-8 mr-8 mb-8 grow border"
          >
            {/* Main wrapper */}
            <Column className="mx-auto w-full max-w-768 p-16">
              <Outlet />
            </Column>
          </Column>
        </Row>
      </Column>
    )
  },
})
