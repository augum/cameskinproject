import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: null,
  stockdepotproducts: null,
}
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsData: (state, action) => {
      state.products = action.payload
    },
    getStockdepot: (state, { payload }) => {
      state.stockdepotproducts = payload
    },
  },
})
export const { getProductsData, getStockdepot } = productSlice.actions
export default productSlice.reducer
