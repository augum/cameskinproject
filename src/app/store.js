import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/product.slice'
import cartReducer from '../features/card.slice'
import livraisonReducer from '../features/livraison.slice'
import userReducer from '../features/user.slice'
import connectReducer from '../features/connect.slice'

export default configureStore({
  reducer: {
    carts: cartReducer,
    products: productsReducer,
    livraisons: livraisonReducer,
    users: userReducer,
    connect: connectReducer,
  },
})
