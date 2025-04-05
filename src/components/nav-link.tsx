import { Link, LinkProps, useLocation } from 'react-router'

export type NavLinkProps = LinkProps

export function NavLink(props: LinkProps) {
  const { pathname } = useLocation()

  return(
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary data-[current=true]:text-foreground data-[current=true]:font-semibold"
      {...props}
    />
  )
}