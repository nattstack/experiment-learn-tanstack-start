import {
  Icon3dBoxTop,
  IconAppleIntelligenceIcon,
  IconApps,
  IconBooks,
  IconEditBig,
  IconImages1,
  IconMagnifyingGlass,
  IconTelescope,
} from "@nattstack/icons-outlined"
import { Column, Spacer, Tooltip, TooltipContent, TooltipTrigger } from "@nattstack/ui"
import { Link, type LinkProps } from "@tanstack/react-router"
import type { ComponentType, Dispatch, ReactNode, SetStateAction } from "react"

interface SidebarProps {
  isExpanded: boolean
  setIsExpanded: Dispatch<SetStateAction<boolean>>
}

export function Sidebar(props: SidebarProps) {
  const { isExpanded, setIsExpanded } = props

  const tooltipContent = isExpanded ? "Close sidebar" : "Open sidebar"

  return (
    <>
      <Column
        as="aside"
        className="bg-gray-2 border-gray-4 max-768:hidden! fixed top-(--dimension-topbar-height) left-0 z-10 h-[calc(100dvh-var(--dimension-topbar-height))] w-(--dimension-sidebar-width) shrink-0 border-r py-8 transition-[left] data-[is-sidebar-expanded=false]:-left-(--dimension-sidebar-width)"
        data-is-sidebar-expanded={isExpanded}
      >
        <Column>
          {/* Links */}
          <Column className="gap-y-2 overflow-y-auto px-8">
            <SidebarLink icon={IconEditBig} to="/app">
              New chat
            </SidebarLink>
            <SidebarLink icon={IconMagnifyingGlass} to="/app/search">
              Search chats
            </SidebarLink>
            <SidebarLink icon={IconImages1}>Images</SidebarLink>
            <SidebarLink icon={IconBooks}>Library</SidebarLink>
            <SidebarLink icon={IconApps}>Apps</SidebarLink>
            <SidebarLink icon={IconTelescope}>Deep research</SidebarLink>
            <SidebarLink icon={IconAppleIntelligenceIcon}>Codex</SidebarLink>
            <SidebarLink icon={Icon3dBoxTop}>GPTs</SidebarLink>
          </Column>

          {/* Toggle */}
          <Tooltip>
            <TooltipTrigger
              render={
                <button
                  className="group outline-primary-9 absolute top-0 -right-[calc(var(--dimension-sidebar-toggle-width)/2)] flex h-full w-(--dimension-sidebar-toggle-width) cursor-w-resize items-center justify-end [--dimension-sidebar-toggle-width:32px]"
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {/* Line */}
                  <div className="bg-gray-4 group-hover:bg-gray-6 absolute top-0 right-[15px] h-full w-1 transition-colors" />
                  {/* Pill */}
                  <div className="bg-gray-4 group-hover:bg-gray-8 mr-4 h-32 w-4 rounded-full transition-colors" />
                  {/* Screen reader */}
                  <span className="sr-only">{tooltipContent}</span>
                </button>
              }
            />
            <TooltipContent side="right">{tooltipContent}</TooltipContent>
          </Tooltip>
        </Column>
      </Column>

      {/* Spacer */}
      <Spacer
        className="max-768:hidden w-(--dimension-sidebar-width) transition-[width] data-[is-sidebar-expanded=false]:w-0"
        data-is-sidebar-expanded={isExpanded}
      />
    </>
  )
}

interface SidebarLinkProps extends Omit<LinkProps, "children"> {
  children?: ReactNode
  icon: ComponentType<{ className?: string }>
}

function SidebarLink(props: SidebarLinkProps) {
  const { children = "", icon, to = "/" } = props

  const Icon = icon

  return (
    <Link
      activeOptions={{
        exact: true,
      }}
      className="text-14 hover:bg-gray-3 rounded-8 data-[status=active]:bg-gray-4 data-[status=active]:text-gray-12 hover:text-gray-12 flex h-36 shrink-0 cursor-pointer items-center px-8 transition-colors"
      to={to}
    >
      <Icon className="mr-8 size-20" />
      {children}
    </Link>
  )
}
