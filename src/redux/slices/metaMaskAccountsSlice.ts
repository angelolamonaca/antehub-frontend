import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMetaMaskAccounts } from '../services/metaMaskAccountsService'
import { AppThunk, RootState } from '../store'

export interface MetaMaskAccountsState {
  accounts: [string?]
  status: 'pending' | 'received' | 'failed' | 'not requested yet'
}

const initialState: MetaMaskAccountsState = {
  accounts: [],
  status: 'not requested yet'
}

export const requestAccountsAsync = createAsyncThunk(
  'metaMask/fetchMetaMaskAccounts',
  async () => {
    const accounts = await fetchMetaMaskAccounts()
    console.log('Accounts', accounts)
    return accounts
  }
)

export const metaMaskAccountsSlice = createSlice({
  name: 'metaMask',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestAccountsAsync.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(requestAccountsAsync.fulfilled, (state, action) => {
        state.status = 'received'
        state.accounts = action.payload
      })
      .addCase(requestAccountsAsync.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const selectAccounts = (state: RootState) =>
  state.metaMaskAccounts.accounts
export const selectStatus = (state: RootState) => state.metaMaskAccounts.status

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
    if (currentStatus === 'not requested yet') {
      dispatch(requestAccountsAsync())
    }
  }

export default metaMaskAccountsSlice.reducer
