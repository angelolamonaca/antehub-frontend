import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import metaMaskReducer from './slices/metaMaskSlice'

const store = configureStore({
  reducer: {
    metaMask: metaMaskReducer
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
