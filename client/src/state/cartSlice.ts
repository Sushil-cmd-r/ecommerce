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
      const item = state.items.find(i => i.id == action.payload.id)
      if (!item) {
        state.items.push(action.payload)
      } else {
        item.amount += action.payload.amount
      }
    }
  }
})

export const getCartItems = (state: RootState) => state.cartStore.items
export const getCartItemsCount = (state: RootState) => state.cartStore.items.map(item => item.amount).reduce((prev, curr) => prev + curr, 0)

export const { addCartItem } = cartSlice.actions
export default cartSlice.reducer
