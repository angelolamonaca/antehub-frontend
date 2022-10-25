import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import dynamicLogo from '../../../assets/antehub-logo/svg/dynamic-logo'
import dynamicText from '../../../assets/antehub-logo/svg/dynamic-text'
import { navMenuItems } from './index'

const Desktop = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>
      <Box
        sx={{
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.2)'
          },
          flexGrow: 0,
          display: 'flex',
          marginLeft: 2
        }}
      >
        <Link to='/' style={{ color: '#FFF' }}>
          <span style={{ marginRight: 6 }}>{dynamicLogo(40)}</span>
          {dynamicText(180)}
        </Link>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          marginX: 5,
          justifyContent: 'right'
        }}
      >
        {navMenuItems.map((page) => (
          <Link to={`/${page}`} key={page} style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontFamily: 'DM Mono',
                fontSize: 17
              }}
            >
              {page}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default Desktop
