import { Fragment } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import PropTypes from 'prop-types'
import { pages, settings } from './index'

export const Desktop = (props: Props): JSX.Element => {
  return (
    <Fragment>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant='h6'
        noWrap
        component='a'
        href='/'
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        AnteHub
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={props.handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>

      <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
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
    </Fragment>
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
