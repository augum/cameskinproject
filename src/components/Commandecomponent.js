import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import DepotStock from './DepotStock'
import ValideCommand from './ValideCommand'
import { getStockdepot } from '../features/product.slice'
import { Box } from '@mui/system'
import ReactPaginate from 'react-paginate'

const Commandecomponent = () => {
  const [commande, setCommande] = useState([])
  const [lcommande, setLcommande] = useState([])

  const [search, setSearch] = useState()
  const [articleSearch, setArticleSearch] = useState()
  const [visible, setVisible] = useState(false)
  const [tableVisible, setTableVisible] = useState(false)
  const [mobile, setMobile] = useState(false)

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

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const dispatch = useDispatch()

  const handlerCommande = () => {
    axios
      .get(`http://localhost:8083/api/lcommandesls?com=${search}`)
      .then((res) => setLcommande(res.data))
  }
  const handlerArticle = () => {
    axios
      .get(`http://localhost:8083/api/stockdepotarticleid?id=${articleSearch}`)
      .then((res) => dispatch(getStockdepot(res.data)))
  }
  useEffect(() => {
    axios
      .get('http://localhost:8083/api/commandefalses')
      .then((res) => setCommande(res.data))
  }, [commande])
  //pagination
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(commande.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(commande.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, commande])
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % commande.length
    setItemOffset(newOffset)
  }

  //fin pagination
  return (
    <div>
      <div className="container">
        <div className="leftGrid">
          <div className="tableau">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Code</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>D-mobile</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentItems.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.nom_mobile}</TableCell>
                      <TableCell>
                        <span>
                          <i
                            className="fa-solid fa-angles-right"
                            onClick={() => {
                              setSearch(row.id)
                              setMobile(row.id_mobile)
                              handlerCommande()
                            }}
                          ></i>
                        </span>
                      </TableCell>
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
            />
          </div>
        </div>
        <div className="rightGrid">
          <h2>Détail de la commande</h2>
          <div>
            <div>
              {lcommande.map((lcom) => (
                <ul>
                  <li>
                    <h3> {lcom.article.libelle}</h3>
                    <h3>{lcom.quantity}</h3>
                    <button
                      onClick={() => {
                        handleOpen()
                        setVisible(true)
                        setArticleSearch(lcom.article.id)
                        console.log(articleSearch)
                        handlerArticle()
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              {visible && (
                <ValideCommand mobile={mobile} articleSearch={articleSearch} />
              )}
            </div>
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
                  <DepotStock onClose={() => handleClose()} />
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commandecomponent
