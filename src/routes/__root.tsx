import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import type { PropsWithChildren } from "react"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
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
      <body className="color-gray-slate color-primary-blue">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
