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
import { Column, Spacer } from "@nattstack/ui"
import { useMatchRoute } from "@tanstack/react-router"
import { SidebarLink, type SidebarLinkProps } from "./sidebar-link"

interface SidebarLinksProps {
  variant: SidebarLinkProps["variant"]
}

export function SidebarLinks(props: SidebarLinksProps) {
  const { variant } = props

  const matchRoute = useMatchRoute()
  const isRouteSettings = Boolean(matchRoute({ fuzzy: true, to: "/app/settings" }))

  return (
    <Column className="gap-y-2 overflow-y-auto px-8">
      {isRouteSettings ? (
        <SidebarLinksSettings variant={variant} />
      ) : (
        <SidebarLinksDashboard variant={variant} />
      )}
    </Column>
  )
}

function SidebarLinksSettings(props: SidebarLinksProps) {
  const { variant } = props

  return (
    <>
      <SidebarLink icon={IconArrowLeft} label="Back" to="/app" variant={variant} />
      <Spacer height={8} />
      <SidebarLink icon={IconPeople} label="Account" to="/app/settings" variant={variant} />
      <SidebarLink icon={IconGroup3} label="Groups" to="/app/search" variant={variant} />
    </>
  )
}

function SidebarLinksDashboard(props: SidebarLinksProps) {
  const { variant } = props

  return (
    <>
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
    </>
  )
}
