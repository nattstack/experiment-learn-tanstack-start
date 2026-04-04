/// <reference types="vite/client" />

import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import type { PropsWithChildren } from "react"
import css from "../styles/global.css?url"

export const Route = createRootRoute({
  head: () => ({
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
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument(props: PropsWithChildren) {
  const { children } = props

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="color-gray-mauve color-primary-crimson">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
