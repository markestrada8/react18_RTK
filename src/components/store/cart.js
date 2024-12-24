
import { PRODUCT_DATA } from '../../data'

import { createSlice } from '@reduxjs/toolkit'
// export const PRODUCT_DATA = [
//   { id: 1, title: 'Test Item 1', price: 6, description: "Test Item" },
//   { id: 2, title: 'Test Item 2', price: 6, description: "Test Item" },
//   { id: 3, title: 'Test Item 3', price: 6, description: "Test Item" }
// ]

// items: [
// {
//  item: {id, title, price, description},
//  quantity: 1
// }
// ],
const INITIAL_STATE = {
  items: [],
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    replaceCart(state, action) {
      state.changed = false
      state.items = action.payload.items
    },
    addItem(state, action) {
      // console.log(PRODUCT_DATA.find(item => item.id === action.payload))
      state.changed = true
      if (state.items.find(listing => action.payload === listing.item.id)?.quantity > 0) {
        state.items.find(listing => action.payload === listing.item.id).quantity += 1
      } else {
        state.items = [...state.items, { item: PRODUCT_DATA.find(item => item.id === action.payload), quantity: 1 }]
      }

    },
    increaseQuantity(state, action) {
      state.changed = true
      // console.log(state.items.find(listing => action.payload === listing.item.id))
      state.items.find(listing => action.payload === listing.item.id).quantity += 1
    },
    decreaseQuantity(state, action) {
      state.changed = true
      if (state.items.find(listing => action.payload === listing.item.id).quantity === 1) {
        state.items = state.items.filter(listing => listing.item.id !== action.payload)
      } else {
        state.items.find(listing => action.payload === listing.item.id).quantity -= 1
      }
    }
  }
})



export default cartSlice
