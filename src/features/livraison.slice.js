import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productsItem: localStorage.getItem('livraison')
    ? JSON.parse(localStorage.getItem('livraison'))
    : [],
  quantity: 0,
  total: 0,
  commandes: [],
}

export const livraisonSlice = createSlice({
  name: 'cartliv',
  initialState,

  reducers: {
    /**Ajouter le produit dans le pannier de la livraison */
    addProductTocartLivarison: (state, { payload }) => {
      const itemindex = state.productsItem.findIndex(
        (item) => item.articleId === payload.articleId,
      )
      if (itemindex >= 0) {
        state.productsItem[itemindex].quantity += 1
      } else {
        const cartTemplate = { ...payload, quantity: 1 }
        state.productsItem.push(cartTemplate)
      }
      localStorage.setItem('livraison', JSON.stringify(state.productsItem))
    },
    /**cette methode permet d'enlever le produit dans la commande */
    removeFromCart(state, { payload }) {
      const nextCartItems = state.productsItem.filter(
        (item) => item.articleId !== payload.articleId,
      )
      state.productsItem = nextCartItems
      localStorage.setItem('livraison', JSON.stringify(state.productsItem))
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
        localStorage.setItem('livraison', JSON.stringify(state.productsItem))
      }
    },
    /**vider la commande */
    clearCart(state, { payload }) {
      state.productsItem = []

      localStorage.setItem('livraison', JSON.stringify(state.productsItem))
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
    addCommandeLiv: (state, { payload }) => {
      console.log(payload)
      state.commandes = []
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
  addCommandeLiv,
  addProductTocartLivarison,
} = livraisonSlice.actions
export default livraisonSlice.reducer
