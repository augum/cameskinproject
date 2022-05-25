import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Commande from './pages/Commande'
import Depot from './pages/Depot'
import Home from './pages/Home'
import Mobile from './pages/Mobile'

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/depot" element={<Depot />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
