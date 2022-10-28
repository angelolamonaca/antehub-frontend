import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import NavMenu from './NavMenu'
import LoginButton from './LoginButton'
import { useAppSelector } from '../../redux/hooks'
import { selectStatus } from '../../redux/slices/metaMaskSlice'
import { MetaMaskStatus } from '../../utils/MetaMask'

const AppBarTop = (): JSX.Element => {
  const status = useAppSelector(selectStatus)

  return (
    <AppBar position='static' style={{ background: '#37237c' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <NavMenu />
          {status !== MetaMaskStatus.RECEIVED && <LoginButton />}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppBarTop
