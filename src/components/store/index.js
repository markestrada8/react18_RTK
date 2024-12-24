import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart'
import UISlice from './UI'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    UI: UISlice.reducer
  }
})

export const cartActions = cartSlice.actions
export const UIActions = UISlice.actions
export default store