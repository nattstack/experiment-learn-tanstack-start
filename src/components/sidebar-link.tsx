import { type CentralIconBaseProps } from "@nattstack/icons-outlined"
import { Tooltip, TooltipContent, TooltipTrigger } from "@nattstack/ui"
import { Link, type LinkProps } from "@tanstack/react-router"
import type { ComponentType } from "react"
import { useSidebarStore } from "./sidebar-content"

interface SidebarLinkProps extends Omit<LinkProps, "children"> {
  icon: ComponentType<CentralIconBaseProps>
  label: string
}

export function SidebarLink(props: SidebarLinkProps) {
  const { icon, label = "", to = "/" } = props

  const Icon = icon

  const sidebarDesktopIsCollapsed = useSidebarStore((state) => state.desktopIsCollapsed)

  return (
    <Tooltip isDisabled={!sidebarDesktopIsCollapsed}>
      <TooltipTrigger
        render={
          <Link
            activeOptions={{
              exact: true,
            }}
            className="text-14 hover:bg-gray-3 rounded-8 data-[status=active]:bg-gray-4 data-[status=active]:text-gray-12 hover:text-gray-12 font-500 flex h-36 shrink-0 cursor-pointer items-center overflow-hidden px-8 transition-colors select-none"
            to={to}
          >
            <Icon size={20} className="mr-8 shrink-0" />
            <span
              className="text-nowrap transition-opacity data-[sidebar-desktop-is-collapsed=true]:opacity-0"
              data-sidebar-desktop-is-collapsed={sidebarDesktopIsCollapsed}
            >
              {label}
            </span>
          </Link>
        }
      />
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}
