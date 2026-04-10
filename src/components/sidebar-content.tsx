import {
  Icon3dBoxTop,
  IconAppleIntelligenceIcon,
  IconApps,
  IconArrowLeft,
  IconBooks,
  IconEditBig,
  IconGroup3,
  IconImages1,
  IconMagnifyingGlass,
  IconPeople,
  IconSettingsGear2,
  IconTelescope,
} from "@nattstack/icons-outlined"
import { Column } from "@nattstack/ui"
import { useRouterState } from "@tanstack/react-router"
import { create } from "zustand"
import { SidebarLink } from "./sidebar-link"

export function SidebarContent() {
  const isRouteSettings = useRouterState({
    select: (state) => state.matches.some((match) => match.routeId === "/app/settings"),
  })

  if (isRouteSettings) {
    return <SidebarContentSettings />
  }

  return <SidebarContentDashboard />
}

function SidebarContentSettings() {
  return (
    <Column className="h-full">
      <Column className="gap-y-2 overflow-y-auto px-8 py-8">
        <SidebarLink icon={IconArrowLeft} label="Back" to="/app" />
        <SidebarLink icon={IconPeople} label="Account" to="/app/settings" />
        <SidebarLink icon={IconGroup3} label="Groups" to="/app/search" />
      </Column>
    </Column>
  )
}

function SidebarContentDashboard() {
  return (
    <Column className="h-full">
      <Column className="gap-y-2 overflow-y-auto px-8 py-8">
        <SidebarLink icon={IconEditBig} label="New chat" to="/app" />
        <SidebarLink icon={IconMagnifyingGlass} label="Search chats" to="/app/search" />
        <SidebarLink icon={IconImages1} label="Images" to="/app/settings" />
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

interface SidebarStore {
  sidebarDesktopIsCollapsed: boolean
  sidebarDesktopSetIsCollapsed: (desktopWidthCollapsed: boolean) => void
  sidebarMobileIsOpen: boolean
  sidebarMobileSetIsOpen: (mobileIsOpen: boolean) => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  sidebarDesktopIsCollapsed: false,
  sidebarDesktopSetIsCollapsed: (sidebarDesktopIsCollapsed: boolean) =>
    set({ sidebarDesktopIsCollapsed }),
  sidebarMobileIsOpen: false,
  sidebarMobileSetIsOpen: (sidebarMobileIsOpen: boolean) => set({ sidebarMobileIsOpen }),
}))
