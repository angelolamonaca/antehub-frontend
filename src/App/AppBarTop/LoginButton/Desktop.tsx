import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router-dom'

const Desktop = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Link to='/auth/'>
        <Button variant='contained' color='login' endIcon={<LoginIcon />}>
          LOGIN
        </Button>
      </Link>
    </Box>
  )
}

export default Desktop
