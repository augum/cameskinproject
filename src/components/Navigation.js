import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="sidemenu">
      <ul className="pt-6">
        <NavLink to="/">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white">
            Home
          </li>
        </NavLink>
        <NavLink to="/mobile">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white">
            Mobil command
          </li>
        </NavLink>
        <NavLink to="/depot">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white">
            Depot
          </li>
        </NavLink>
        <NavLink to="/commande">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white">
            Commande
          </li>
        </NavLink>
        <NavLink to="/depot">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white">
            ADministration
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
