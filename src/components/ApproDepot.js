import React, { useState } from 'react'
import axios from 'axios'

const ApproDepot = ({ article, onClose, appro }) => {
  console.log(article.libelle + ' ' + appro)
  const [qte, setQte] = useState(0)
  const [lot, setLot] = useState(0)
  const [date, setDate] = useState()
  const handlerAppDepot = (e) => {
    e.preventDefault()
    if (lot === 0) {
      const data = {
        id_article: article.id_article,
        nom_article: article.nom_article,
        lot: article.lot,
        qte,
      }
      axios.post('http://localhost:8083/api/stockdepots', data)
    } else {
      const data = {
        id_article: article.id,
        nom_article: article.libelle,
        lot: lot,
        dateExpiration: date,
        qte,
      }
      console.log(data)
      axios.post('http://localhost:8083/api/stockdepots', data)
    }
  }
  return (
    <div className="formContainer">
      {!appro && (
        <div>
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
      )}
      {appro && (
        <div>
          <form onSubmit={(e) => handlerAppDepot(e)}>
            <div className="formelement">
              <select
                className="lotClass"
                onChange={(e) => setLot(e.target.value)}
              >
                <option value="lot 1">lot 1</option>
                <option value="lot 2">lot 2</option>
                <option value="lot 3">lot 3</option>
                <option value="lot 7">lot 7</option>
              </select>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
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
      )}
    </div>
  )
}

export default ApproDepot
