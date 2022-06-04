import axios from 'axios'
import React, { useState } from 'react'

const NewProduct = ({ onClose }) => {
  const [libelle, setLibelle] = useState('')
  const [prixAchat, setPrixachat] = useState(0)
  const [prixVente, setPrixvente] = useState(0)

  const handlePoost = async (e) => {
    e.preventDefault()
    if (libelle !== '') {
      const data = {
        libelle,
        prixAchat,
        prixVente,
      }
      axios.post('http://localhost:8083/api/articles', data)
      onClose()
    } else {
      console.log('le champ est vide')
    }
  }
  return (
    <div>
      <div className="addArticleContainer">
        <form onSubmit={(e) => handlePoost(e)}>
          <input
            type="text"
            placeholder="le libellé du produit"
            onChange={(e) => setLibelle(e.target.value)}
          />
          <input
            type="number"
            min="1"
            placeholder="le prix achat"
            onChange={(e) => setPrixachat(e.target.value)}
          />
          <input
            type="number"
            min="1"
            placeholder="le prix de vente"
            onChange={(e) => setPrixvente(e.target.value)}
          />
          <button>Valider</button>
        </form>
      </div>
    </div>
  )
}

export default NewProduct
