import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  detectProvider,
  fetchAccounts,
  fetchNetwork
} from '../services/metaMaskService'

import { AppThunk, RootState } from '../store'
import { Chain, MetaMaskStatus } from '../../utils/MetaMask'

export interface MetaMaskState {
  network: Chain | undefined
  accounts: [string?] | undefined
  status: MetaMaskStatus
}

const initialState: MetaMaskState = {
  network: undefined,
  accounts: undefined,
  status: MetaMaskStatus.NO_REQUESTS_YET
}

export const fetchMetaMaskNetwork = createAsyncThunk(
  'metaMask/fetchNetwork',
  async () => {
    const provider = await detectProvider()
    console.log('Provider is present', provider)
    const network = await fetchNetwork(provider)
    console.log('Network', network)
    return network
  }
)

export const fetchMetaMaskAccounts = createAsyncThunk(
  'metaMask/fetchAccounts',
  async () => {
    const provider = await detectProvider()
    const accounts = await fetchAccounts(provider)
    console.log('Accounts', accounts)
    return accounts
  }
)

export const metaMaskSlice = createSlice({
  name: 'metaMask',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetaMaskNetwork.pending, (state) => {
        state.status = MetaMaskStatus.NETWORK_REQUEST_PENDING
      })
      .addCase(fetchMetaMaskNetwork.fulfilled, (state, action) => {
        state.status = MetaMaskStatus.NETWORK_RECEIVED
        state.network = action.payload
      })
      .addCase(fetchMetaMaskNetwork.rejected, (state) => {
        state.status = MetaMaskStatus.NOT_INSTALLED
      })

      .addCase(fetchMetaMaskAccounts.pending, (state) => {
        state.status = MetaMaskStatus.ACCOUNTS_REQUEST_PENDING
      })
      .addCase(fetchMetaMaskAccounts.fulfilled, (state, action) => {
        state.status = MetaMaskStatus.ACCOUNTS_RECEIVED
        state.accounts = action.payload
      })
      .addCase(fetchMetaMaskAccounts.rejected, (state) => {
        state.status = MetaMaskStatus.FAILED
      })
  }
})

export const selectNetwork = (state: RootState) => state.metaMask.network
export const selectAccounts = (state: RootState) => state.metaMask.accounts
export const selectStatus = (state: RootState) => state.metaMask.status

export const fetchNetworkIfNotFetchedAlready =
  (): AppThunk => (dispatch, getState) => {
    const currentStatus = selectStatus(getState())
    if (currentStatus === MetaMaskStatus.NO_REQUESTS_YET) {
      dispatch(fetchMetaMaskNetwork())
    }
  }

export default metaMaskSlice.reducer
