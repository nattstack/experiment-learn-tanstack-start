import { IconAirplayAudio, IconSearchIntelligence } from "@nattstack/icons-outlined"
import { Button, Column, Row, Spacer } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import { useSidebarStore } from "../components/sidebar-content"

export const Route = createFileRoute("/app/search")({
  component: function RouteAppSearch() {
    const { sidebarDesktopIsCollapsed, sidebarDesktopSetIsCollapsed } = useSidebarStore()

    return (
      <>
        <Spacer height={64} />
        <p>1234567890</p>
        <p>abcdefghijklmnopqrstuvwxyz</p>

        <Spacer height={64} />
        <p>asdf</p>
        <p>asdf</p>
        <p>asdf</p>
        <p>asdf</p>
        <Spacer height={32} />
        <Button onClick={() => sidebarDesktopSetIsCollapsed(!sidebarDesktopIsCollapsed)}>
          Click me
        </Button>
        <Spacer height={32} />
        <div
          className="bg-gray-4 text-gray-12 flex w-240 flex-col items-center justify-start transition-[width] data-[is-collapsed=true]:w-[52px]"
          data-is-collapsed={sidebarDesktopIsCollapsed}
        >
          <Column className="w-full gap-y-2 px-8">
            <Row className="h-36 w-full items-center px-8">
              <IconSearchIntelligence className="shrink-0" size={20} />
              <span
                className="font-500 text-14 mr-8 text-nowrap transition-opacity data-[is-collapsed=true]:opacity-0"
                data-is-collapsed={sidebarDesktopIsCollapsed}
              >
                Deep research
              </span>
            </Row>
            <Row className="h-36 w-full items-center px-8">
              <IconAirplayAudio className="shrink-0" size={20} />
              <span
                className="font-500 text-14 mr-8 text-nowrap transition-opacity data-[is-collapsed=true]:opacity-0"
                data-is-collapsed={sidebarDesktopIsCollapsed}
              >
                Audio
              </span>
            </Row>
          </Column>
        </div>
        <Spacer height={32} />
      </>
    )
  },
})
