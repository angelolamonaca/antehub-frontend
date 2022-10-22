import { Fragment, MouseEvent, useState } from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'

export const navMenuItems = ['wallets', 'transactions']

const NavMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void =>
    setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = (): void => setAnchorElNav(null)

  return (
    <Fragment>
      <Mobile
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
      <Desktop />
    </Fragment>
  )
}

export default NavMenu
