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
import { useDispatch } from 'react-redux'
import { getStockdepot } from '../features/product.slice'
import DepotStock from './DepotStock'

const DepotstockCard = ({ article }) => {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState()
  const dispatch = useDispatch()

  const handlerArticle = () => {
    setSearch(article.id)
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8083/api/stockdepotarticleid?id=${search}`)
      .then((res) => dispatch(getStockdepot(res.data)))
  }, [search])

  return (
    <div className="card">
      <div
        className="flex"
        onClick={() => {
          setVisible(!visible)
          handlerArticle()
        }}
      >
        {article.id}
        {article.libelle}
        <img
          src="./asset/img/ouverture.svg"
          alt=""
          className={`relativecursor-pointer rounded-full
        -right-3 top-9 w-7 border-2 border-dark-purple ${
          visible && 'rotate-180'
        }`}
        />
      </div>

      {visible && <DepotStock />}
    </div>
  )
}

export default DepotstockCard
