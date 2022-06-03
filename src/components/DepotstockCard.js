import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getStockdepot } from '../features/product.slice'
import DepotStock from './DepotStock'

const DepotstockCard = ({ article }) => {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(`http://localhost:8083/api/stockdepotarticleid?id=${article}`)
      .then((res) => dispatch(getStockdepot(res.data)))
  }, [article])

  return (
    <div className="card">
      <DepotStock />
    </div>
  )
}

export default DepotstockCard
