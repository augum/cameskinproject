import axios from 'axios'
import React, { useState } from 'react'

const ValideCommand = ({ mobile, articleSearch }) => {
  const [lot, setLot] = useState('')
  const [qte, setQte] = useState(0)

  const handlerform = async (e) => {
    e.preventDefault()

    if (lot && qte) {
      const data = {
        id_article: articleSearch,
        lot,
        qte: Number.parseInt(qte),
        id_magasin: mobile,
      }
      await axios.post('http://localhost:8083/api/stockdepotmoins', data)
    }
  }
  return (
    <div>
      <form onSubmit={(e) => handlerform(e)}>
        <select onChange={(e) => setLot(e.target.value)}>
          <option value="lot 1">lot 1</option>
          <option value="lot 2">lot 2</option>
          <option value="lot 3">lot 3</option>
          <option value="lot 7">lot 7</option>
        </select>
        <input
          type="number"
          name=""
          min="1"
          placeholder="Quantité"
          onChange={(e) => setQte(e.target.value)}
        />
        <input type="submit" value="OK" />
      </form>
    </div>
  )
}

export default ValideCommand
