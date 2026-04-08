import {
  Icon3dBoxTop,
  IconAppleIntelligenceIcon,
  IconApps,
  IconBooks,
  IconChevronDoubleLeft,
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

  const tooltipContent = isExpanded ? "Collapse sidebar" : "Expand sidebar"

  return (
    <>
      <Column
        as="aside"
        className="bg-gray-2 max-768:hidden! fixed top-(--dimension-topbar-height) left-0 z-10 h-[calc(100dvh-var(--dimension-topbar-height))] w-(--dimension-sidebar-width) shrink-0 transition-[left] data-[is-sidebar-expanded=false]:-left-(--dimension-sidebar-width)"
        data-is-sidebar-expanded={isExpanded}
      >
        {/* <Spacer height={8} /> */}

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

        <Spacer className="grow" />

        {/* Toggle */}
        {/* <button
          className="border-gray-4 hover:bg-gray-3 flex cursor-pointer items-center justify-end border-t py-16 pr-16 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <IconChevronDoubleLeft size={20} />
        </button> */}
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
