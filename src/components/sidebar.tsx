import {
  type CentralIconBaseProps,
  Icon3dBoxTop,
  IconAppleIntelligenceIcon,
  IconApps,
  IconBooks,
  IconEditBig,
  IconImages1,
  IconMagnifyingGlass,
  IconSettingsGear2,
  IconTelescope,
} from "@nattstack/icons-outlined"
import { Column, Tooltip, TooltipContent, TooltipTrigger } from "@nattstack/ui"
import { Link, type LinkProps } from "@tanstack/react-router"
import type { ComponentType } from "react"
import { create } from "zustand"

export function Sidebar() {
  return (
    <Column className="h-full">
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
        <SidebarLink icon={IconSettingsGear2} label="Settings" to="/app/settings" />
      </Column>
    </Column>
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
            className="text-14 hover:bg-gray-3 rounded-8 data-[status=active]:bg-gray-4 data-[status=active]:text-gray-12 hover:text-gray-12 flex h-36 shrink-0 cursor-pointer items-center overflow-hidden px-8 font-[450] transition-colors select-none"
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
