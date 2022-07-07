import React from 'react'
import DashAccueil from '../components/DashAccueil'
import Header from '../components/Header'
import Menu from '../components/Menu'

const Accueil = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
          <Menu />
          <DashAccueil />
        </div>
      </div>
    </div>
  )
}

export default Accueil
