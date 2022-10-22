import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import NavMenu from './NavMenu'
import UserMenu from './UserMenu'

const AppBarTop = (): JSX.Element => {
  return (
    <AppBar position='static' style={{ background: '#37237c' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <NavMenu />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppBarTop
