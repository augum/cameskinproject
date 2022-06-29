import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
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
import ReactPaginate from 'react-paginate'
import NewUser from './NewUser'

const UserCard = () => {
  const articles = useSelector((state) => state.products.products)
  const [search, setSearch] = useState(' ')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //pagination fff
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

        <button className="boutonNew" onClick={() => handleOpen()}>
          Nouveau
        </button>
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
              <NewUser onClose={() => handleClose()} />
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default UserCard
