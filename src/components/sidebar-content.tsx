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
import { useMatchRoute } from "@tanstack/react-router"
import { create } from "zustand"
import { SidebarLink, type SidebarLinkProps } from "./sidebar-link"

interface SidebarContentProps {
  variant?: SidebarLinkProps["variant"]
}

export function SidebarContent(props: SidebarContentProps) {
  const { variant } = props

  const matchRoute = useMatchRoute()
  const isRouteSettings = Boolean(matchRoute({ fuzzy: true, to: "/app/settings" }))

  if (isRouteSettings) {
    return <SidebarContentSettings variant={variant} />
  }

  return <SidebarContentDashboard variant={variant} />
}

function SidebarContentSettings(props: SidebarContentProps) {
  const { variant } = props

  return (
    <Column className="gap-y-2 overflow-y-auto px-8 py-8">
      <SidebarLink icon={IconArrowLeft} label="Back" to="/app" variant={variant} />
      <SidebarLink icon={IconPeople} label="Account" to="/app/settings" variant={variant} />
      <SidebarLink icon={IconGroup3} label="Groups" to="/app/search" variant={variant} />
    </Column>
  )
}

function SidebarContentDashboard(props: SidebarContentProps) {
  const { variant } = props

  return (
    <Column className="gap-y-2 overflow-y-auto px-8">
      <SidebarLink icon={IconEditBig} label="New chat" to="/app" variant={variant} />
      <SidebarLink
        icon={IconMagnifyingGlass}
        label="Search chats"
        to="/app/search"
        variant={variant}
      />
      <SidebarLink icon={IconImages1} label="Images" to="/signin" variant={variant} />
      <SidebarLink icon={IconBooks} label="Library" variant={variant} />
      <SidebarLink icon={IconApps} label="Apps" variant={variant} />
      <SidebarLink icon={IconTelescope} label="Deep research" variant={variant} />
      <SidebarLink icon={IconAppleIntelligenceIcon} label="Codex" variant={variant} />
      <SidebarLink icon={Icon3dBoxTop} label="GPTs" variant={variant} />
      <SidebarLink icon={IconSettingsGear2} label="Settings" to="/app/settings" variant={variant} />
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
