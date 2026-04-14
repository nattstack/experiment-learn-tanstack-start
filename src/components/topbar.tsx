import { IconArrowBoxLeft, IconBarsThree } from "@nattstack/icons-outlined"
import { Button, Row, Spacer } from "@nattstack/ui"
import { useServerFn } from "@tanstack/react-start"
import { signOutPost } from "../server/auth/sign-out-post"
import { LogoLink } from "./logo-link"
import { useSidebarStore } from "./sidebar-content"

export function Topbar() {
  const { sidebarMobileSetIsOpen } = useSidebarStore()

  const signOut = useServerFn(signOutPost)

  async function onSignOut() {
    await signOut()
  }

  return (
    <>
      <Row
        as="header"
        className="bg-bg-secondary max-768:border-b max-768:border-border fixed top-0 left-0 z-10 h-(--dimension-topbar-height) w-full items-center justify-between px-8"
      >
        {/* Left */}
        <Row className="items-center">
          {/* Logo */}
          <LogoLink />
        </Row>

        {/* Right */}
        <Row className="items-center gap-x-2">
          {/* Sign out */}
          <Button iconStart={<IconArrowBoxLeft />} variant="ghost" onClick={onSignOut}>
            Sign out
          </Button>

          {/* Toggle sidebar mobile */}
          <Button
            className="max-768:flex! hidden!"
            isIconOnly
            onClick={() => sidebarMobileSetIsOpen(true)}
            variant="ghost"
          >
            <IconBarsThree />
          </Button>
        </Row>
      </Row>
      <Spacer height="var(--dimension-topbar-height)" />
    </>
  )
}
