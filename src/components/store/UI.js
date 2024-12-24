import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  cartIsOpen: false,
  notification: null
}

const UISlice = createSlice({
  name: 'UI',
  initialState: INITIAL_STATE,
  reducers: {
    toggleIsOpen(state) {
      console.log('toggle click')
      state.cartIsOpen = !state.cartIsOpen
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
})

export default UISlice
