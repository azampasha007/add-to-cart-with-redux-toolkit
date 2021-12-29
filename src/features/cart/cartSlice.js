import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name:'cart',
  initialState:{
    cartItems:[]
  },
  reducers:{
    addItemToCart:(state, action) => {
      const pseudoId = (new Date()).getTime()

      state.cartItems.push({
        id:pseudoId,
        productId: action.payload.product.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity * action.payload.product.price
      })
    }
  }
})

export const getCartItems = state => state.cart.cartItems
export const {addItemToCart} = slice.actions
export default slice.reducer