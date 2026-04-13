import { IconCrossLarge } from "@nattstack/icons-outlined"
import { Button, Column, Row } from "@nattstack/ui"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { LogoLink } from "./logo-link"
import { SidebarContent, useSidebarStore } from "./sidebar-content"

export function SidebarMobile() {
  const { sidebarMobileIsOpen, sidebarMobileSetIsOpen } = useSidebarStore()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(function onSidebarMobileEffect() {
    setIsMounted(true)

    return function onSidebarMobileUnmount() {
      sidebarMobileSetIsOpen(false)
    }
  }, [])

  if (!isMounted) {
    return <></>
  }

  return createPortal(
    <div className="max-768:block pointer-events-none fixed inset-0 z-10 hidden duration-300">
      {/* Backdrop */}
      <button
        className="bg-gray-12/50 pointer-events-auto absolute inset-0 hidden opacity-0 transition-[display,opacity] transition-discrete duration-[inherit] data-[sidebar-mobile-is-open=true]:block data-[sidebar-mobile-is-open=true]:opacity-100 starting:data-[sidebar-mobile-is-open=true]:opacity-0"
        data-sidebar-mobile-is-open={sidebarMobileIsOpen}
        onClick={() => sidebarMobileSetIsOpen(false)}
      />

      <Column
        as="aside"
        className="bg-bg-primary pointer-events-auto absolute top-0 right-0 hidden! h-full w-full max-w-320 translate-x-full transition-[display,translate] transition-discrete duration-[inherit] data-[sidebar-mobile-is-open=true]:flex! data-[sidebar-mobile-is-open=true]:translate-x-0 starting:data-[sidebar-mobile-is-open=true]:translate-x-full"
        data-sidebar-mobile-is-open={sidebarMobileIsOpen}
      >
        <Row className="m-8 items-center justify-between">
          <LogoLink onClick={() => sidebarMobileSetIsOpen(false)} />
          <Button isIconOnly onClick={() => sidebarMobileSetIsOpen(false)} variant="ghost">
            <IconCrossLarge />
          </Button>
        </Row>
        <SidebarContent variant="mobile" />
      </Column>
    </div>,
    document.body,
  )
}
