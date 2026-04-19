import { ComponentProps } from "react"

export type PageNavbarLayoutProps = ComponentProps<'div'>

export const PageNavbarLayout = (props: PageNavbarLayoutProps) => {
  return <div className='@container/navbar h-full tablet:w-62.5' {...props} />
}
