import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { Box, capitalize } from '@mui/material'
import { MouseEvent, useState } from 'react'

const userMenuItems = ['profile', 'account', 'dashboard', 'logout']

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>): void =>
    setAnchorElUser(event.currentTarget)
  const handleCloseUserMenu = (): void => setAnchorElUser(null)

  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {userMenuItems.map((setting) => (
          <Link
            to={`/${setting}`}
            key={setting}
            style={{ textDecoration: 'none' }}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography
                sx={{ color: 'black', fontFamily: 'DM Mono' }}
                textAlign='center'
              >
                {capitalize(setting)}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  )
}

export default UserMenu
