import React, { useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import Navigation from '../components/Navigation'

const Livraison = () => {
  const [open, setOpen] = useState(true)
  const livraison = true
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
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <ArticleCard livraison={livraison} />
        </div>
      </div>
    </div>
  )
}

export default Livraison
