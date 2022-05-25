import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DepotstockCard from './DepotstockCard'

const StockDepot = () => {
  const [articles, setarticles] = useState([])
  const [search, setSearch] = useState(' ')

  useEffect(() => {
    axios
      .get(`http://localhost:8083/api/articlesearchs?nom=${search}`)
      .then((res) => setarticles(res.data))
  }, [search])

  return (
    <div>
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrer la recette"
            onChange={(e) => setSearch(e.target.value)}
          />
          <label>
            <span>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </label>
        </form>
      </div>
      <div className="result">
        {articles.map((article) => (
          <DepotstockCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default StockDepot
