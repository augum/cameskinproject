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
    var doc = new jsPDF('p', 'pt', 'a4', 'false')
    doc.html(document.querySelector('#facture'), {
      callback: function (pdf) {
        pdf.save('Facture.pdf')
      },
    })
  }
  return (
    <div>
      {cart.commandes?.map((commande) => (
        <div className="my-5 page" size="A4">
          <div id="facture" className="p-5">
            <section className="store-user mt-5">
              <div className="col-10">
                <div className="row bb pb-3">
                  <div className="col-7">
                    <p>FACTURE</p>
                  </div>
                  <div className="col-5">
                    {' '}
                    <button onClick={() => pdf()}>Imprimer</button>
                  </div>
                </div>
              </div>
            </section>
            <section className="store-user mt-5">
              <div className="col-10">
                <div className="row bb pb-3">
                  <div className="col-7">
                    <p>Client</p>
                    <h2>{commande.nomClient}</h2>
                    <p className="adress">
                      777 Av. pharmacie <br /> Kinshasa MA 2525
                      <br />
                      RD Congo
                    </p>
                    <div className="txt mt-2">TXN: xxxxx</div>
                  </div>
                  <div className="col-5">
                    <p></p>
                    <h2>Cameski</h2>
                    <p className="adress">
                      777 Av. pharmacie <br /> Kinshasa MA 2525
                      <br />
                      RD Congo
                    </p>
                    <div className="txt mt-2">TXN: xxxxx</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="store-user mt-5">
              <div className="col-10">
                <div className="row bb pb-3">
                  <div>
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
                                '&:last-child td, &:last-child th': {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {lfac.libelle}
                              </TableCell>
                              <TableCell>{lfac.quantity}</TableCell>
                              <TableCell>{lfac.prixVente}</TableCell>
                              <TableCell>
                                {lfac.quantity * lfac.prixVente}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </div>
            </section>
            <section className="store-user mt-5">
              <div className="col-10">
                <div className="row bb pb-3">
                  <div className="col-5">
                    <p>TOTAL</p>
                  </div>
                  <div className="col-7">{commande.totalAmount}</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Facture
