import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import DepotStock from './DepotStock'
import ValideCommand from './ValideCommand'
import { getStockdepot } from '../features/product.slice'

const Commandecomponent = () => {
  const [commande, setCommande] = useState([])
  const [lcommande, setLcommande] = useState([])

  const [search, setSearch] = useState()
  const [articleSearch, setArticleSearch] = useState()
  const [articledatexp, setArticledatexp] = useState()
  const [open, setOpen] = useState(true)
  const [visible, setVisible] = useState(false)
  const [tableVisible, setTableVisible] = useState(false)
  const [mobile, setMobile] = useState(false)

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
                  {commande.map((row) => (
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
                        setTableVisible(true)
                        setVisible(true)
                        setArticleSearch(lcom.article.id)
                        setArticledatexp(lcom.dateExpiration)
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
            <DepotStock
              open={tableVisible}
              onClose={() => setTableVisible(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commandecomponent
