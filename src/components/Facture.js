import React from 'react'
import jsPDF from 'jspdf'
import { useSelector } from 'react-redux'
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
const Facture = ({ onClose }) => {
  const cart = useSelector((state) => state.livraisons)

  const pdf = () => {
    var doc = new jsPDF('p', 'pt', 'a4')
    doc.html(document.querySelector('#facture'), {
      callback: function (pdf) {
        pdf.save('Facture.pdf')
      },
    })
  }
  return (
    <div>
      {cart.commandes?.map((commande) => (
        <div>
          <div className="facture" id="facture">
            <div className="entete">
              <img src="dist/img/c3.png" alt="logo" />
            </div>
            <div className="titre">
              <h2>FACTURE</h2>
            </div>
            <div className="info">
              <div className="client">{commande.nomClient}</div>
              <div className="reference">date</div>
            </div>

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
                      <TableCell>Qté</TableCell>
                      <TableCell>Prix</TableCell>
                      <TableCell>Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {commande.lfactureMobiles?.map((lfac) => (
                      <TableRow
                        key={lfac.articleId}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {lfac.libelle}
                        </TableCell>
                        <TableCell>{lfac.quantity}</TableCell>
                        <TableCell>{lfac.prixVente}</TableCell>
                        <TableCell>{lfac.quantity * lfac.prixVente}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="foot">
              <p>TOTAL</p>
              <div className="total">{commande.totalAmount}</div>
            </div>
          </div>
          <button onClick={() => pdf()}>Imprimer</button>
        </div>
      ))}
    </div>
  )
}

export default Facture
