import { Fragment, MouseEvent, useState } from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

export const pages = ['wallets', 'transactions']
export const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export const AppBarTop = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = (): void => setAnchorElNav(null)

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>): void => setAnchorElUser(event.currentTarget)
  const handleCloseUserMenu = (): void => setAnchorElUser(null)

  return (
    <Fragment>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Mobile
              anchorElNav={anchorElNav}
              anchorElUser={anchorElUser}
              handleOpenNavMenu={handleOpenNavMenu}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              handleCloseUserMenu={handleCloseUserMenu}
            />
            <Desktop
              anchorElNav={anchorElNav}
              anchorElUser={anchorElUser}
              handleOpenNavMenu={handleOpenNavMenu}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  )
}

export default AppBarTop
