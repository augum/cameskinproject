import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/product.slice'
import cartReducer from '../features/card.slice'

export default configureStore({
  reducer: {
    carts: cartReducer,
    products: productsReducer,
  },
})
