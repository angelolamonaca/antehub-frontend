import dynamicLogo from '../../../assets/metamask-logo/dynamic-logo'
import { Box, Button, Typography } from '@mui/material'
import { ethers } from 'ethers'
import { Fragment } from 'react'

function connectToWallet() {
  let address: string
  if (window.ethereum) {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((res: [string]) => {
        // Return the address of the wallet
        console.log(res)
        address = res[0]
      })
      .then(() => {
        window.ethereum
          .request({
            method: 'eth_getBalance',
            params: [address, 'latest']
          })
          .then((balance: string) => {
            console.log(balance)
            console.log(ethers.utils.formatEther(balance))
          })
      })
  } else {
    alert('install metamask extension!!')
  }
}

const Login = () => {
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
        <Button onClick={connectToWallet}>{dynamicLogo(70)}</Button>
        <Typography sx={{ fontFamily: 'DM Mono', textAlign: 'center' }}>
          Click on the MetaMask Logo to login
        </Typography>
      </Box>
    </Fragment>
  )
}

export default Login
