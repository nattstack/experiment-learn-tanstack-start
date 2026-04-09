import CSS from "../styles/global.css?url"

export function RouteRootHead() {
  return {
    links: [
      {
        href: CSS,
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
        title: "Placeholder",
      },
    ],
  }
}
