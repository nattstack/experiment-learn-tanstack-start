import { Column } from "@nattstack/ui"
import { create } from "zustand"
import { SidebarContent } from "./sidebar-content"

export function Sidebar() {
  return (
    <Column className="h-full py-8">
      <SidebarContent />
    </Column>
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
