import { Box, Typography } from '@mui/material'
import { Fragment } from 'react'

const Logout = () => {
  return (
    <Fragment>
      <Typography sx={{ fontFamily: 'DM Mono' }}>
        This is the logout page with a tutorial that will explain you how to
        disconnect your MetaMask Wallet with some useful screenshots
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          marginTop: 6
        }}
      >
        <Typography sx={{ fontFamily: 'DM Mono' }}>
          In order to Logout you need to go on your MetaMask Extension and
          disconnect the accounts
        </Typography>
      </Box>
    </Fragment>
  )
}

export default Logout
