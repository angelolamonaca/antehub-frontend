import { Box, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'

const Mobile = () => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Link to='/auth/logout'>
        <Button variant='contained' color='error'>
          <LogoutIcon />
        </Button>
      </Link>
    </Box>
  )
}

export default Mobile
