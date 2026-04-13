import { IconSidebarHiddenLeftWide, IconSidebarHiddenRightWide } from "@nattstack/icons-outlined"
import { Button, Spacer, Tooltip, TooltipContent, TooltipTrigger } from "@nattstack/ui"
import { create } from "zustand"
import { type SidebarLinkProps } from "./sidebar-link"
import { SidebarLinks } from "./sidebar-links"

interface SidebarContentProps {
  variant: SidebarLinkProps["variant"]
}

export function SidebarContent(props: SidebarContentProps) {
  const { variant } = props

  const { sidebarDesktopIsCollapsed, sidebarDesktopSetIsCollapsed } = useSidebarStore()

  return (
    <>
      {/* Links */}
      <SidebarLinks variant={variant} />
      <Spacer className="grow" />

      {/* Expand/Collapse toggle */}
      {variant === "desktop" && (
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                className="group mt-8 ml-8"
                isIconOnly
                onClick={() => sidebarDesktopSetIsCollapsed(!sidebarDesktopIsCollapsed)}
                size={36}
                variant="ghost"
              >
                {sidebarDesktopIsCollapsed ? (
                  <IconSidebarHiddenRightWide className="text-gray-11 group-hover:text-gray-12 transition-colors" />
                ) : (
                  <IconSidebarHiddenLeftWide className="text-gray-11 group-hover:text-gray-12 transition-colors" />
                )}
              </Button>
            }
          />
          <TooltipContent side="right">
            {sidebarDesktopIsCollapsed ? "Expand" : "Collapse"} sidebar
          </TooltipContent>
        </Tooltip>
      )}
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
