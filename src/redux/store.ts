import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import metaMaskAccountsReducer from './slices/metaMaskAccountsSlice'

const store = configureStore({
  reducer: {
    metaMaskAccounts: metaMaskAccountsReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
