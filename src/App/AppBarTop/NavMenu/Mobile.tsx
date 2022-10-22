import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import dynamicLogo from '../../../assets/antehub-logo/svg/dynamic-logo'
import dynamicText from '../../../assets/antehub-logo/svg/dynamic-text'
import { Link } from 'react-router-dom'
import { capitalize } from '@mui/material'
import PropTypes from 'prop-types'
import { navMenuItems } from './index'

const Mobile = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu
}: MobileNavMenuProps): JSX.Element => {
  return (
    <Box
      sx={{ flexGrow: 3, display: { xs: 'flex', md: 'none' }, marginY: 0.5 }}
    >
      <Box sx={{ flexGrow: 0, display: 'flex' }}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' }
          }}
        >
          {navMenuItems.map((page) => (
            <Link to={`/${page}`} key={page} style={{ textDecoration: 'none' }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  sx={{ color: 'black', fontFamily: 'DM Mono' }}
                  textAlign='center'
                >
                  {capitalize(page)}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <Link to='/' style={{ color: '#FFF' }}>
          <span style={{ marginRight: 6 }}>{dynamicLogo(40)}</span>
          {dynamicText(120)}
        </Link>
      </Box>
    </Box>
  )
}

interface MobileNavMenuProps {
  anchorElNav: HTMLElement | null
  handleOpenNavMenu: (event: never) => void
  handleCloseNavMenu: (event: never) => void
}

Mobile.propTypes = {
  anchorElNav: PropTypes.instanceOf(HTMLElement),
  handleOpenNavMenu: PropTypes.func,
  handleCloseNavMenu: PropTypes.func
}

export default Mobile
