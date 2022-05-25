import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import ValideCommand from '../components/ValideCommand'
import { useDispatch, useSelector } from 'react-redux'
import { getStockdepot } from '../features/product.slice'
import Depot from './Depot'
import DepotStock from '../components/DepotStock'
const Commande = () => {
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
    <div className="flex">
      <div
        className={`${
          open ? 'w-72' : 'w-10'
        } duration-300 h-screen bg-menu relative`}
      >
        <img
          src="./asset/img/controle.png"
          className={`absolute cursor-pointer rounded-full
        -right-3 top-9 w-7 border-2 border-dark-purple ${
          !open && 'rotate-180'
        }`}
          onClick={() => setOpen(!open)}
        />
        <div className={`${!open && 'hidden'} origin-left duration-200`}>
          <Navigation />
        </div>
      </div>
      <div className="container">
        <div className="flex-right">
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
                            class="fa-solid fa-angles-right"
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
        <div className="flex-left">
          <div>
            <div>
              {lcommande.map((lcom) => (
                <ul>
                  <li
                    onClick={() => {
                      setTableVisible(true)
                      setVisible(true)
                      setArticleSearch(lcom.article.id)
                      setArticledatexp(lcom.dateExpiration)
                      handlerArticle()
                    }}
                  >
                    <h3> {lcom.article.libelle}</h3>
                    <h3>{lcom.quantity}</h3>
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
        </div>
      </div>
      <div>
        <div className="tableau">{tableVisible && <DepotStock />}</div>
      </div>
    </div>
  )
}
export default Commande
