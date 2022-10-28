import { Box, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'

const Desktop = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Link to='/auth/logout'>
        <Button variant='contained' color='error' endIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Link>
    </Box>
  )
}

export default Desktop
