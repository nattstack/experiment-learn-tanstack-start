import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/api")({
  server: {
    handlers: {
      GET: function handlerApiGet({ request }) {
        console.log(request)
        return new Response("Hello, World!")
      },
    },
  },
})
