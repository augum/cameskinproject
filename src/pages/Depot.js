import React, { useState } from 'react'
import DashboardDepot from '../components/DashboardDepot'
import Header from '../components/Header'
import Menu from '../components/Menu'

const Depot = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
          <Menu />
          <DashboardDepot />
        </div>
      </div>
    </div>
  )
}

export default Depot
