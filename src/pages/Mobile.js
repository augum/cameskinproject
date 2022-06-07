import { useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import DashboardMobile from '../components/DashboardMobile'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Navigation from '../components/Navigation'

const Mobile = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
          <Menu />
          <DashboardMobile />
        </div>
      </div>
    </div>
  )
}

export default Mobile
