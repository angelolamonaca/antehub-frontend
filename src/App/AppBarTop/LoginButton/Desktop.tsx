import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'

const Desktop = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Button variant='outlined' color='neutral' endIcon={<LoginIcon />}>
        LOGIN
      </Button>
    </Box>
  )
}

export default Desktop
