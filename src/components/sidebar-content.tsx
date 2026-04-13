import { Column, Spacer } from "@nattstack/ui"
import { create } from "zustand"
import { SidebarButtonToggle } from "./sidebar-button-toggle"
import { type SidebarLinkProps } from "./sidebar-link"
import { SidebarLinks } from "./sidebar-links"

interface SidebarContentProps {
  variant: SidebarLinkProps["variant"]
}

export function SidebarContent(props: SidebarContentProps) {
  const { variant } = props

  return (
    <>
      {/* Links */}
      <SidebarLinks variant={variant} />
      <Spacer className="grow" />

      {/* Expand/Collapse toggle */}
      {variant === "desktop" && <SidebarButtonToggle />}
    </>
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
