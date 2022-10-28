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
  accounts: [string?]
  status: MetaMaskStatus
}

const initialState: MetaMaskState = {
  network: undefined,
  accounts: [],
  status: MetaMaskStatus.NOT_REQUESTED_YET
}

export const connectMetaMask = createAsyncThunk(
  'metaMask/connect',
  async () => {
    const provider = await detectProvider()
    if (!provider) {
      console.log('Please install MetaMask!')
    }
    const network = await fetchNetwork(provider)
    console.log('Network', network)
    const accounts = await fetchAccounts(provider)
    console.log('Accounts', accounts)
    return { network, accounts }
  }
)

export const metaMaskSlice = createSlice({
  name: 'metaMask',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(connectMetaMask.pending, (state) => {
        state.status = MetaMaskStatus.PENDING
      })
      .addCase(connectMetaMask.fulfilled, (state, action) => {
        state.status = MetaMaskStatus.RECEIVED
        state.network = action.payload.network
        state.accounts = action.payload.accounts
      })
      .addCase(connectMetaMask.rejected, (state) => {
        state.status = MetaMaskStatus.FAILED
      })
  }
})

export const selectNetwork = (state: RootState) => state.metaMask.network
export const selectAccounts = (state: RootState) => state.metaMask.accounts
export const selectStatus = (state: RootState) => state.metaMask.status

// We can also write thunks by hand,
// which may contain both sync and async logic.
// Here's an example of conditionally dispatching
// actions based on current state.
// You can dispatch it in your component:
// const dispatch = useAppDispatch()
// dispatch(fetchAccountsIfNotRequestedYet())
export const fetchAccountsIfNotRequestedYet =
  (): AppThunk => (dispatch, getState) => {
    const currentStatus = selectStatus(getState())
    if (currentStatus === MetaMaskStatus.NOT_REQUESTED_YET) {
      dispatch(connectMetaMask())
    }
  }

export default metaMaskSlice.reducer
