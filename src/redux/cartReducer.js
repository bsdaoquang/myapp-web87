import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name:'cart',
  initialState: {
    data: []
  },
  reducers: {
    addToCart: (state, action) => {
      const items = state.data 
      const item = action.payload
      const index = items.findIndex(element => element.id === item.id)

      if (index !== -1) {
        items[index].qty = items[index].qty + 1
      }else{
        items.push({...item, qty: 1, price: Math.floor(Math.random() * 10000)})
      }

      state.data = items
    },

    removeItem : (state, action) => {
      const items = state.data 
      const id = action.payload 
      const index = items.findIndex(element => element.id === id)

      if (index !== -1) {
        items.splice(index, 1)
      }

      state.data= items
    }
  }
})

export const cartReducer = cartSlice.reducer
export const {addToCart, removeItem} = cartSlice.actions
export const cartSelector = (state) => state.cartReducer.data