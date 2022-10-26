import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router-dom'

const Mobile = () => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Link to='/auth/'>
        <Button variant='outlined' color='neutral'>
          <LoginIcon />
        </Button>
      </Link>
    </Box>
  )
}

export default Mobile
