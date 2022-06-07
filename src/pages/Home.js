import React, { useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import DashboardHome from '../components/DashboardHome'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
          <Menu />
          <DashboardHome />
        </div>
      </div>
    </div>
  )
}

export default Home
