import dynamicLogo from '../../../assets/metamask-logo/dynamic-logo'
import { Box, Button, Typography } from '@mui/material'
import { Fragment } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// eslint-disable-next-line max-len
import {
  connectMetaMask,
  selectAccounts,
  selectNetwork
} from '../../../redux/slices/metaMaskSlice'

const Login = () => {
  const network = useAppSelector(selectNetwork)
  const accounts = useAppSelector(selectAccounts)
  const dispatch = useAppDispatch()

  return (
    <Fragment>
      <Typography sx={{ fontFamily: 'DM Mono' }}>
        AnteHub requires to connect with your MetaMask Account
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Button onClick={() => dispatch(connectMetaMask())}>
          {dynamicLogo(70)}
        </Button>
        <Typography sx={{ fontFamily: 'DM Mono', textAlign: 'center' }}>
          Click on the MetaMask Logo to login
        </Typography>
      </Box>
      <p>{network?.network}</p>
      <p>{accounts}</p>
    </Fragment>
  )
}

export default Login
