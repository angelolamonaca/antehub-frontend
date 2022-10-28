import { Typography } from '@mui/material'
import { Fragment } from 'react'
import { useAppSelector } from '../../redux/hooks'
import {
  selectAccounts,
  selectNetwork,
  selectStatus
} from '../../redux/slices/metaMaskSlice'
import { MetaMaskStatus } from '../../utils/MetaMask'

const Home = () => {
  const accounts = useAppSelector(selectAccounts)
  const network = useAppSelector(selectNetwork)
  const status = useAppSelector(selectStatus)

  return (
    <Fragment>
      <Typography sx={{ fontFamily: 'DM Mono' }}>Home</Typography>
      <Typography sx={{ fontFamily: 'DM Mono' }}>
        Network {JSON.stringify(network)}
      </Typography>
      <Typography sx={{ fontFamily: 'DM Mono' }}>
        Accounts {accounts}
      </Typography>
      <Typography sx={{ fontFamily: 'DM Mono' }}>
        Status {MetaMaskStatus[status]}
      </Typography>
    </Fragment>
  )
}

export default Home
