import {
  type CentralIconBaseProps,
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
import type { ComponentType } from "react"
import { create } from "zustand"

export function Sidebar() {
  const sidebarDesktopIsCollapsed = useSidebarStore((state) => state.desktopIsCollapsed)

  return (
    <>
      <Column
        as="aside"
        className="bg-gray-2 max-768:hidden! fixed top-(--dimension-topbar-height) left-0 z-10 h-[calc(100dvh-var(--dimension-topbar-height))] w-(--dimension-sidebar-desktop-width-expanded) shrink-0 transition-[width] data-[sidebar-desktop-is-collapsed=true]:w-(--dimension-sidebar-desktop-width-collapsed)"
        data-sidebar-desktop-is-collapsed={sidebarDesktopIsCollapsed}
      >
        {/* <Spacer height={8} /> */}

        {/* Links */}
        <Column className="gap-y-2 overflow-y-auto px-8">
          <SidebarLink icon={IconEditBig} label="New chat" to="/app" />
          <SidebarLink icon={IconMagnifyingGlass} label="Search chats" to="/app/search" />
          <SidebarLink icon={IconImages1} label="Images" />
          <SidebarLink icon={IconBooks} label="Library" />
          <SidebarLink icon={IconApps} label="Apps" />
          <SidebarLink icon={IconTelescope} label="Deep research" />
          <SidebarLink icon={IconAppleIntelligenceIcon} label="Codex" />
          <SidebarLink icon={Icon3dBoxTop} label="GPTs" />
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
        className="max-768:hidden w-(--dimension-sidebar-desktop-width-expanded) transition-[width] data-[sidebar-desktop-is-collapsed=true]:w-(--dimension-sidebar-desktop-width-collapsed)"
        data-sidebar-desktop-is-collapsed={sidebarDesktopIsCollapsed}
      />
    </>
  )
}

interface SidebarLinkProps extends Omit<LinkProps, "children"> {
  icon: ComponentType<CentralIconBaseProps>
  label: string
}

function SidebarLink(props: SidebarLinkProps) {
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
            className="text-14 hover:bg-gray-3 rounded-8 data-[status=active]:bg-gray-4 data-[status=active]:text-gray-12 hover:text-gray-12 flex h-36 shrink-0 cursor-pointer items-center overflow-hidden px-8 font-[450] transition-colors"
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

interface SidebarStore {
  desktopIsCollapsed: boolean
  desktopSetIsCollapsed: (desktopWidthCollapsed: boolean) => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  desktopIsCollapsed: false,
  desktopSetIsCollapsed: (desktopIsCollapsed: boolean) => set({ desktopIsCollapsed }),
}))
