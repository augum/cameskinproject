import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const users = useSelector((state) => state.connect.users)
  return (
    <div>
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
          {/* SEARCH FORM */}
          <form className="form-inline ml-3">
            <div className="input-group input-group-sm"></div>
          </form>
          {/* Right navbar links */}
          {users.map((user, index) => (
            <ul className="navbar-nav ml-auto">
              {/* Messages Dropdown Menu */}
              <li key={index}>{user.nom}</li>
              {/* Notifications Dropdown Menu */}
            </ul>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header
