import { IconBarsThree, IconLayoutAlignLeft } from "@nattstack/icons-outlined"
import { Button, Row, Spacer, Tooltip, TooltipContent, TooltipTrigger } from "@nattstack/ui"
import { Link } from "@tanstack/react-router"
import { Logo } from "./logo"
import { useSidebarStore } from "./sidebar-content"

export function Topbar() {
  const sidebarDesktopIsCollapsed = useSidebarStore((state) => state.desktopIsCollapsed)
  const sidebarDesktopSetIsCollapsed = useSidebarStore((state) => state.desktopSetIsCollapsed)

  return (
    <>
      <Row
        as="header"
        className="bg-bg-secondary max-768:border-b max-768:border-border fixed top-0 left-0 z-10 h-(--dimension-topbar-height) w-full items-center justify-between px-16"
      >
        {/* Left */}
        <Row className="items-center">
          {/* Logo */}
          <Link to="/app" className="-ml-8 p-8 transition-opacity hover:opacity-75">
            <Logo />
          </Link>

          {/* Separator */}
          <div className="bg-border max-768:hidden mx-4 h-24 w-1" />

          {/* Toggle sidebar desktop */}
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  className="text-gray-9! max-768:hidden! hover:text-gray-12! -ml-4 transition-[background-color,color,opacity,translate]!"
                  isIconOnly
                  onClick={() => sidebarDesktopSetIsCollapsed(!sidebarDesktopIsCollapsed)}
                  variant="ghost"
                >
                  <IconLayoutAlignLeft />
                </Button>
              }
            />
            <TooltipContent className="max-768:hidden!" side="bottom">
              {sidebarDesktopIsCollapsed ? "Expand" : "Collapse"} sidebar
            </TooltipContent>
          </Tooltip>
        </Row>

        {/* Right */}
        <Row className="items-center">
          {/* Toggle sidebar mobile */}
          <Button className="max-768:flex! -mr-12 hidden!" isIconOnly variant="ghost">
            <IconBarsThree />
          </Button>
        </Row>
      </Row>
      <Spacer height="var(--dimension-topbar-height)" />
    </>
  )
}
