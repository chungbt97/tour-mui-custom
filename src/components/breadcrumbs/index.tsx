import { Breadcrumbs as BreadcrumbsMui } from '@mui/material/'
import Link from '@mui/material/Link'
import { ReactNode } from 'react'

interface IBreadcrumbItem {
  label: string
  href: string
  active?: boolean
  handleClick?: () => {}
}

interface IBreadcrumbGroup {
  handleClick?: () => {}
  separator?: '›' | '/' | '-' | ReactNode
  items: IBreadcrumbItem[]
}

export default function Breadcrumbs(props: IBreadcrumbGroup) {
  const { items, handleClick } = props

  const isActive = (href: string) => {
    const route = location.pathname
    return href === route || `${href}/` === route
  }

  return (
    <div role='presentation' onClick={handleClick}>
      <BreadcrumbsMui aria-label='breadcrumb'>
        {items.map(i => (
          <Link key={i.href} className={`${isActive(i.href) ? 'active' : ''}`} href={i.href} underline='hover'>
            {i.label}
          </Link>
        ))}
      </BreadcrumbsMui>
    </div>
  )
}
