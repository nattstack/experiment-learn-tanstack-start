import { IconSidebarHiddenLeftWide } from "@nattstack/icons-outlined"
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@nattstack/ui"
import { useSidebarStore } from "./sidebar-content"

export function SidebarButtonToggle() {
  const { sidebarDesktopIsCollapsed, sidebarDesktopSetIsCollapsed } = useSidebarStore()

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            className="group m-8"
            isIconOnly
            onClick={() => sidebarDesktopSetIsCollapsed(!sidebarDesktopIsCollapsed)}
            size={36}
            variant="ghost"
          >
            <IconSidebarHiddenLeftWide
              className="text-gray-11 group-hover:text-gray-12 transition-colors [&>path]:last:transition-transform data-[sidebar-desktop-is-collapsed=true]:[&>path]:last:translate-x-10"
              data-sidebar-desktop-is-collapsed={sidebarDesktopIsCollapsed}
            />
          </Button>
        }
      />
      <TooltipContent side="right">
        {sidebarDesktopIsCollapsed ? "Expand" : "Collapse"} sidebar
      </TooltipContent>
    </Tooltip>
  )
}
