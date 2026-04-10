import { TooltipProvider } from "@nattstack/ui"
import { HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router"

export function RouteRoot() {
  const isAppRoute = useRouterState({
    select: (state) => state.matches.some((match) => match.routeId === "/app"),
  })

  return (
    <html className="color-gray-mauve color-primary-crimson">
      <head>
        <HeadContent />
      </head>
      <body data-is-app={isAppRoute}>
        <TooltipProvider>
          <Outlet />
        </TooltipProvider>
        <Scripts />
      </body>
    </html>
  )
}
