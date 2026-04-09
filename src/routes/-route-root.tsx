import { TooltipProvider } from "@nattstack/ui"
import { HeadContent, Outlet, Scripts } from "@tanstack/react-router"

export function RouteRoot() {
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
}
