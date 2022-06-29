import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCommandeLiv,
  addProductTocartLivarison,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from '../features/livraison.slice'
import Facture from './Facture'

const CharLivraison = () => {
  const cart = useSelector((state) => state.livraisons)
  const dispatch = useDispatch()
  const [client, setClient] = useState('Inconnu')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

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
    dispatch(addProductTocartLivarison(cartItem))
  }
  const handlerClearCart = () => {
    dispatch(clearCart())
  }

  const handlerCommande = (e) => {
    e.preventDefault()

    const data = {
      user_id: 2,
      nomClient: client,
      id_user: 1,
      totalAmount: cart.total,
      lfactureMobiles: cart.productsItem,
    }

    axios.post('http://localhost:8083/api/facturesmobiles', data).then(() => {
      dispatch(addCommandeLiv(data))
    })
    handlerClearCart()
    handleOpen()
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
          <select
            className="lotClass"
            onChange={(e) => setClient(e.target.value)}
          >
            <option value="Hopital saint Joseph">Hopital saint Joseph</option>
            <option value="CH Monkole">CH Monkole</option>
            <option value="Hopital Roi Beaudouin">Hopital Roi Beaudouin</option>
          </select>
          <div className="titles">
            <h3 className="product-title">Article</h3>
            <h3 className="pice">Prix</h3>
            <h3 className="quantity">Qte</h3>
            <h3 className="total">Total</h3>
          </div>

          <div className="cart-items" id="content">
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
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Facture onClose={() => handleClose()} />
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default CharLivraison
