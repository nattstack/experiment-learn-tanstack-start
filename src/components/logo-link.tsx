import { Link, type LinkProps } from "@tanstack/react-router"
import { Logo } from "./logo"

interface LogoLinkProps extends LinkProps {
  onClick?: () => void
}

export function LogoLink(props: LogoLinkProps) {
  const { ...rest } = props

  return (
    <Link className="p-8 transition-opacity hover:opacity-75" to="/app" {...rest}>
      <Logo />
    </Link>
  )
}
