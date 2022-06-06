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
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ApproDepot from './ApproDepot'

const DepotStock = () => {
  const articleLots = useSelector((state) => state.products.stockdepotproducts)
  const [articleStockDepot, setArticleStockDepot] = useState([])
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
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleraddstockdepot = (row) => {
    setArticleStockDepot(row)
    handleOpen()
  }
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalRight">
          <div className="content">
            {articleLots && (
              <div className="tableau">
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Lot</TableCell>
                        <TableCell>Quantité</TableCell>
                        <TableCell>Expiration</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {articleLots.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.lot}
                          </TableCell>
                          <TableCell>{row.qte}</TableCell>
                          <TableCell>{row.dateExpiration}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
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
                <ApproDepot
                  article={articleStockDepot}
                  onClose={() => handleClose()}
                />
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default DepotStock
