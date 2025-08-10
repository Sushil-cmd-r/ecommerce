import type { RootState } from './store'
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type StateType = {
  items: CartItem[]
}

const initialState: StateType = {
  items: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(i => i.cartId === action.payload.cartId)

      if (!item) {
        state.items.push(action.payload)
      } else {
        item.amount += action.payload.amount
      }
    },

    deleteCartItem: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.items = state.items.filter(i => i.cartId !== action.payload)
    }
  }
})

export const getCartItems = (state: RootState) => state.cartStore.items
export const getCartItemsCount = (state: RootState) => state.cartStore.items.map(item => item.amount).reduce((prev, curr) => prev + curr, 0)

export const { addCartItem, deleteCartItem } = cartSlice.actions
export default cartSlice.reducer
