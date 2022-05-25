import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productsItem: localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [],
  quantity: 0,
  total: 0,
  commandes: [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**ajouter dans la commande */
    addProductTocart: (state, { payload }) => {
      const itemindex = state.productsItem.findIndex(
        (item) => item.articleId === payload.articleId,
      )
      if (itemindex >= 0) {
        state.productsItem[itemindex].quantity += 1
      } else {
        const cartTemplate = { ...payload, quantity: 1 }
        state.productsItem.push(cartTemplate)
      }
      localStorage.setItem('items', JSON.stringify(state.productsItem))
    },
    /**cette methode permet d'enlever le produit dans la commande */
    removeFromCart(state, { payload }) {
      const nextCartItems = state.productsItem.filter(
        (item) => item.articleId !== payload.articleId,
      )
      state.productsItem = nextCartItems
      localStorage.setItem('items', JSON.stringify(state.productsItem))
    },
    /**incrementer ou decrementrer la quantité */
    decreaseCart(state, { payload }) {
      const itemIndex = state.productsItem.findIndex(
        (item) => item.articleId === payload.articleId,
      )

      if (state.productsItem[itemIndex].quantity > 1) {
        state.productsItem[itemIndex].quantity -= 1
      } else if (state.productsItem[itemIndex].quantity === 1) {
        const nextCartItems = state.productsItem.filter(
          (item) => item.articleId !== payload.articleId,
        )
        state.productsItem = nextCartItems
        localStorage.setItem('items', JSON.stringify(state.productsItem))
      }
    },
    /**vider la commande */
    clearCart(state, { payload }) {
      state.productsItem = []
      localStorage.setItem('items', JSON.stringify(state.productsItem))
    },
    /** calculer le total */
    getTotal(state, { payload }) {
      let { total, quantity } = state.productsItem.reduce(
        (cartTotal, cartItem) => {
          const { prixVente, quantity } = cartItem
          const itemTotal = prixVente * quantity

          cartTotal.total += itemTotal
          cartTotal.quantity += quantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        },
      )

      state.quantity = quantity
      state.total = total
    },
    /** Commande on state */
    addCommande: (state, { payload }) => {
      console.log(payload)
      state.commandes.push(payload)
    },
  },
})
export const {
  addProductTocart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotal,
  addCommande,
} = cartSlice.actions
export default cartSlice.reducer
