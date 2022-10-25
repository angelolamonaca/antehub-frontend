import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'

const Mobile = () => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Button variant='outlined' color='neutral'>
        <LoginIcon />
      </Button>
    </Box>
  )
}

export default Mobile
