/// <reference types="vite/client" />

import { createRootRoute, redirect } from "@tanstack/react-router"
import { gateGet } from "../server/gate"
import { RouteNotFound } from "./-route-not-found"
import { RouteRoot } from "./-route-root"
import { RouteRootHead } from "./-route-root-head"

export const Route = createRootRoute({
  beforeLoad: async ({ location }) => {
    if (location.pathname === "/coming-soon") return
    const isUnlocked = await gateGet()
    if (!isUnlocked) {
      throw redirect({ to: "/coming-soon" })
    }
  },
  component: RouteRoot,
  head: RouteRootHead,
  notFoundComponent: RouteNotFound,
})
