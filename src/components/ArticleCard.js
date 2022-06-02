import { formControlUnstyledClasses } from '@mui/base'
import {
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { addProductTocart } from '../features/card.slice'
import { getProductsData } from '../features/product.slice'
import ChartMobile from './ChartMobile'
import NewProduct from './NewProduct'
import { Box } from '@mui/system'

const ArticleCard = ({ commande }) => {
  const articles = useSelector((state) => state.products.products)
  console.log(articles)
  const [search, setSearch] = useState(' ')
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)
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
  //pagination
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(articles.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(articles.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, articles])
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length
    setItemOffset(newOffset)
  }
  //fin pagination
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
        {!commande && (
          <button className="boutonNew" onClick={() => handleOpen()}>
            Nouveau
          </button>
        )}
      </div>

      <div className="paginateContainer">
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
                  {currentItems.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.libelle}
                      </TableCell>
                      <TableCell>{row.prixAchat}</TableCell>
                      <TableCell>{row.prixVente}</TableCell>
                      {commande && (
                        <TableCell>
                          <span>
                            <i
                              className="fa-solid fa-angles-right"
                              onClick={() => addToCart(row)}
                            ></i>
                          </span>
                        </TableCell>
                      )}
                      {!commande && (
                        <TableCell>
                          <span>
                            <i
                              class="fa-solid fa-pen-to-square"
                              onClick={() => addToCart(row)}
                            ></i>
                          </span>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          </div>
        )}
      </div>
      <div className="secondT">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <NewProduct onClose={() => handleClose()} />
            </Typography>
          </Box>
        </Modal>
      </div>
      {commande && (
        <div>
          <ChartMobile />
        </div>
      )}
    </div>
  )
}

export default ArticleCard
