import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductTocart } from '../features/card.slice'
import { getProductsData } from '../features/product.slice'
import ChartMobile from './ChartMobile'

const ArticleCard = () => {
  const articles = useSelector((state) => state.products.products)
  const [search, setSearch] = useState(' ')
  const dispatch = useDispatch()

  const addToCart = (article) => {
    //setCart([...cart, article])

    const data = {
      articleId: article.id,
      libelle: article.libelle,
      prixAchat: article.prixAchat,
      prixVente: article.prixVente,
    }

    dispatch(addProductTocart(data))
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8083/api/articlesearchs?nom=${search}`)
      .then((res) => dispatch(getProductsData(res.data)))
  }, [articles])
  return (
    <div>
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrer le nom du produit"
            onChange={(e) => setSearch(e.target.value)}
          />
          <label>
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </label>
        </form>
      </div>

      <div>
        {articles && (
          <div className="tableau">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Produit</TableCell>
                    <TableCell>Prix achat</TableCell>
                    <TableCell>Prix de vente</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {articles.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.libelle}
                      </TableCell>
                      <TableCell>{row.prixAchat}</TableCell>
                      <TableCell>{row.prixVente}</TableCell>
                      <TableCell>
                        <span>
                          <i
                            class="fa-solid fa-angles-right"
                            onClick={() => addToCart(row)}
                          ></i>
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
      <div>
        <ChartMobile />
      </div>
    </div>
  )
}

export default ArticleCard
