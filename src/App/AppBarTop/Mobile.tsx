import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import PropTypes from 'prop-types'
import { pages, settings } from './index'
import dynamicLogo from '../../assets/antehub-logo/svg/dynamic-logo'
import dynamicText from '../../assets/antehub-logo/svg/dynamic-text'
import { Link } from 'react-router-dom'
import { capitalize } from '@mui/material'

export const Mobile = (props: Props): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 3, display: { xs: 'flex', md: 'none' }, marginY: 0.5 }}>
      <Box sx={{ flexGrow: 0, display: 'flex' }}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={props.handleOpenNavMenu}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={props.anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(props.anchorElNav)}
          onClose={props.handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' }
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={props.handleCloseNavMenu}>
              <Typography textAlign='center'>{capitalize(page)}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <Link to='/' style={{ color: '#FFF' }}>
          <span style={{ marginRight: 6 }}>{dynamicLogo(40)}</span>
          {dynamicText(120)}
        </Link>
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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

Mobile.propTypes = {
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

export default Mobile
