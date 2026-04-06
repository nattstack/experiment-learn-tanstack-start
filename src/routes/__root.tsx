/// <reference types="vite/client" />

import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
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
  component: RootDocument,
})

function RootDocument() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="color-gray-mauve color-primary-crimson">
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
