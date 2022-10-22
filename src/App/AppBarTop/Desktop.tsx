import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import PropTypes from 'prop-types'
import { pages, settings } from './index'
import { Link } from 'react-router-dom'
import dynamicLogo from '../../assets/antehub-logo/svg/dynamic-logo'
import dynamicText from '../../assets/antehub-logo/svg/dynamic-text'

export const Desktop = (props: Props): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' }, margin: 0 }}>
      <Box sx={{ flexGrow: 0, display: 'flex' }}>
        <Link to='/' style={{ color: '#FFF' }}>
          <span style={{ marginRight: 6 }}>{dynamicLogo(50)}</span>
          {dynamicText(240)}
        </Link>
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', marginX: 5, justifyContent: 'right' }}>
        {pages.map((page) => (
          <Link to={`/${page}`} key={page} style={{ textDecoration: 'none' }}>
            <Button onClick={props.handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'DM Mono', fontSize: 17 }}>
              {page}
            </Button>
          </Link>
        ))}
      </Box>

      <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'right' }}>
        <Tooltip title='Open settings'>
          <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id='menu-appbar'
          anchorEl={props.anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(props.anchorElUser)}
          onClose={props.handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={props.handleCloseUserMenu}>
              <Typography textAlign='center'>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  )
}

Desktop.propTypes = {
  anchorElNav: PropTypes.instanceOf(HTMLElement),
  anchorElUser: PropTypes.instanceOf(HTMLElement),
  handleOpenNavMenu: PropTypes.func,
  handleOpenUserMenu: PropTypes.func,
  handleCloseNavMenu: PropTypes.func,
  handleCloseUserMenu: PropTypes.func
}

interface Props {
  anchorElNav: HTMLElement | null
  anchorElUser: HTMLElement | null
  handleOpenNavMenu: (event: never) => void
  handleOpenUserMenu: (event: never) => void
  handleCloseNavMenu: (event: never) => void
  handleCloseUserMenu: (event: never) => void
}

export default Desktop
