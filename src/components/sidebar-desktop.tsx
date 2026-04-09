import { Column, Spacer } from "@nattstack/ui"
import { Sidebar, useSidebarStore } from "./sidebar"

export function SidebarDesktop() {
  const sidebarDesktopIsCollapsed = useSidebarStore((state) => state.desktopIsCollapsed)

  return (
    <>
      <Column
        as="aside"
        className="bg-bg-secondary max-768:hidden! fixed top-(--dimension-topbar-height) left-0 z-10 h-[calc(100dvh-var(--dimension-topbar-height))] w-(--dimension-sidebar-desktop-width-expanded) shrink-0 transition-[width] data-[sidebar-desktop-is-collapsed=true]:w-(--dimension-sidebar-desktop-width-collapsed)"
        data-sidebar-desktop-is-collapsed={sidebarDesktopIsCollapsed}
      >
        <Sidebar />
      </Column>

      {/* Spacer */}
      <Spacer
        className="max-768:hidden w-(--dimension-sidebar-desktop-width-expanded) transition-[width] data-[sidebar-desktop-is-collapsed=true]:w-(--dimension-sidebar-desktop-width-collapsed)"
        data-sidebar-desktop-is-collapsed={sidebarDesktopIsCollapsed}
      />
    </>
  )
}
