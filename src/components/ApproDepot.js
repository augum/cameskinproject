import React, { useState } from 'react'
import axios from 'axios'

const ApproDepot = ({ article, onClose }) => {
  const [qte, setQte] = useState(0)
  const handlerAppDepot = (e) => {
    e.preventDefault()
    const data = {
      id_article: article.id_article,
      nom_article: article.nom_article,
      lot: article.lot,
      qte,
    }

    axios.post('http://localhost:8083/api/stockdepots', data)
    onClose()
  }
  return (
    <div className="formContainer">
      <div>
        <h3>
          <span>Article : </span>
          {article.nom_article}
        </h3>
      </div>
      <div>
        <h3>
          <label>
            <span>Lot : </span>
            {article.lot}
          </label>
        </h3>
      </div>
      <div>
        <form onSubmit={(e) => handlerAppDepot(e)}>
          <div className="formelement">
            <input
              type="number"
              min="1"
              placeholder="Quantité"
              onChange={(e) => setQte(e.target.value)}
            />
            <button>Valider</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApproDepot
