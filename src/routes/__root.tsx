/// <reference types="vite/client" />

import { TooltipProvider } from "@nattstack/ui"
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import css from "../styles/global.css?url"

export const Route = createRootRoute({
  head: function RouteRootHead() {
    return {
      links: [
        {
          href: css,
          rel: "stylesheet",
        },
      ],
      meta: [
        {
          charSet: "utf-8",
        },
        {
          content: "initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width",
          name: "viewport",
        },
        {
          title: "TanStack Start Starter",
        },
      ],
    }
  },
  component: function RouteRoot() {
    return (
      <html className="color-gray-mauve color-primary-crimson">
        <head>
          <HeadContent />
        </head>
        <body>
          <TooltipProvider>
            <Outlet />
          </TooltipProvider>
          <Scripts />
        </body>
      </html>
    )
  },
})
