import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCommande,
  addProductTocart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from '../features/card.slice'

const ChartMobile = () => {
  const cart = useSelector((state) => state.carts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [cart])
  const handlerRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }
  const handlerDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handlerIncreaseCart = (cartItem) => {
    dispatch(addProductTocart(cartItem))
  }
  const handlerClearCart = () => {
    dispatch(clearCart())
  }

  const handlerCommande = (e) => {
    e.preventDefault()

    const data = {
      id_mobile: 2,
      nom_mobile: 'D-mobile 9',
      id_user: 1,
      totalAmount: cart.total,
      lcommande: cart.productsItem,
    }

    axios.post('http://localhost:8083/api/commandes', data).then(() => {
      dispatch(addCommande(data))
    })

    handlerClearCart()
  }
  return (
    <div className="cart-container">
      <h2>Commande des produits</h2>
      {cart.productsItem.length === 0 ? (
        <div className="cart-empty">
          <p> Il ya pas de commande</p>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Article</h3>
            <h3 className="pice">Prix</h3>
            <h3 className="quantity">Qte</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.productsItem?.map((cartItem) => (
              <div className="cart-item" key={cartItem.articleId}>
                <div className="cart-product">
                  <h3>{cartItem.libelle}</h3>
                  <button onClick={() => handlerRemoveFromCart(cartItem)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="cart-product-price">{cartItem.prixVente}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handlerDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.quantity}</div>
                  <button onClick={() => handlerIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className="cart-product-total-price">
                  {cartItem.quantity * cartItem.prixVente}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handlerClearCart()}>
              Annuler
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Total: </span>
                <span className="amount">{cart.total}</span>
              </div>
              <div>
                <button
                  className="cart-valider"
                  onClick={(e) => handlerCommande(e)}
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChartMobile
