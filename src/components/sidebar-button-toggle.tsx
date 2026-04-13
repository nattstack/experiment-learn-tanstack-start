import { IconSidebarHiddenLeftWide, IconSidebarHiddenRightWide } from "@nattstack/icons-outlined"
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
  )
}
