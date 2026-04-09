/// <reference types="vite/client" />

import { createRootRoute } from "@tanstack/react-router"
import { RouteNotFound } from "./-route-not-found"
import { RouteRoot } from "./-route-root"
import { RouteRootHead } from "./-route-root-head"

export const Route = createRootRoute({
  component: RouteRoot,
  head: RouteRootHead,
  notFoundComponent: RouteNotFound,
})
