import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Accueil from './pages/Accueil'
import Commande from './pages/Commande'
import Connexion from './pages/Connexion'
import Depot from './pages/Depot'
import Home from './pages/Home'
import Livraison from './pages/Livraison'
import Mobile from './pages/Mobile'
import User from './pages/User'

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/livraison" element={<Livraison />} />
        <Route path="/depot" element={<Depot />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
