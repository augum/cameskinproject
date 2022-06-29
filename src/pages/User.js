import React from 'react'
import DashboardUser from '../components/DashboardUser'
import Header from '../components/Header'
import Menu from '../components/Menu'

const User = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
          <Menu />
          <DashboardUser />
        </div>
      </div>
    </div>
  )
}

export default User
