import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const DepotStock = () => {
  const artticleLots = useSelector((state) => state.products.stockdepotproducts)
  return (
    <div>
      <div className="tableau">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Lot</TableCell>
                <TableCell>Quantité</TableCell>
                <TableCell>Expiration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artticleLots.map((row) => (
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
    </div>
  )
}

export default DepotStock
