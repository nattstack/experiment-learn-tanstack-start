import { IconLayoutAlignLeft } from "@nattstack/icons-outlined"
import { Button, Row, Spacer, Tooltip, TooltipContent, TooltipTrigger } from "@nattstack/ui"
import { Link } from "@tanstack/react-router"
import { Logo } from "./logo"
import { useSidebarStore } from "./sidebar"

export function Topbar() {
  const sidebarDesktopIsCollapsed = useSidebarStore((state) => state.desktopIsCollapsed)
  const sidebarDesktopSetIsCollapsed = useSidebarStore((state) => state.desktopSetIsCollapsed)

  return (
    <>
      <Row
        as="header"
        className="bg-secondary fixed top-0 left-0 z-10 h-(--dimension-topbar-height) w-full items-center px-16"
      >
        {/* Logo */}
        <Link to="/app" className="-ml-8 p-8 transition-opacity hover:opacity-50">
          <Logo />
        </Link>

        <div className="bg-gray-4 mx-4 h-24 w-1" />

        {/* Toggle sidebar */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                className="text-gray-11! hover:text-gray-12! transition-[background-color,color,opacity,translate]!"
                isIconOnly
                onClick={() => sidebarDesktopSetIsCollapsed(!sidebarDesktopIsCollapsed)}
                size={32}
                variant="ghost"
              >
                <IconLayoutAlignLeft size={20} />
              </Button>
            }
          />
          <TooltipContent side="bottom">
            {sidebarDesktopIsCollapsed ? "Expand" : "Collapse"} sidebar
          </TooltipContent>
        </Tooltip>
      </Row>
      <Spacer height="var(--dimension-topbar-height)" />
    </>
  )
}
