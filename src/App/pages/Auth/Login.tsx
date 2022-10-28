import dynamicLogo from '../../../assets/metamask-logo/dynamic-logo'
import { Box, Button, Typography } from '@mui/material'
import { Fragment } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// eslint-disable-next-line max-len
import {
  connectMetaMask,
  selectStatus
} from '../../../redux/slices/metaMaskSlice'
import { MetaMaskStatus } from '../../../utils/MetaMask'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const status = useAppSelector(selectStatus)

  const dispatch = useAppDispatch()

  if (status === MetaMaskStatus.RECEIVED) {
    return <Navigate replace to='/' />
  }

  return (
    <Fragment>
      <Typography sx={{ fontFamily: 'DM Mono' }}>
        AnteHub requires to connect with your MetaMask Account
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: 6
        }}
      >
        <Button onClick={() => dispatch(connectMetaMask())}>
          {dynamicLogo(120)}
        </Button>
        <Typography sx={{ fontFamily: 'DM Mono', textAlign: 'center' }}>
          Click on the MetaMask Logo to login
        </Typography>
        <Box sx={{ textAlign: 'center', marginY: 10 }}>
          {status === MetaMaskStatus.PENDING && (
            <Typography sx={{ fontFamily: 'DM Mono' }}>
              Connecting to MetaMask, please wait...
            </Typography>
          )}
          {status === MetaMaskStatus.FAILED && (
            <Typography sx={{ fontFamily: 'DM Mono' }}>
              Please install&nbsp;
              <a
                href='https://metamask.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                MetaMask
              </a>
              &nbsp;and try again!
            </Typography>
          )}
        </Box>
      </Box>
    </Fragment>
  )
}

export default Login
