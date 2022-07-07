import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="#" className="brand-link">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#">
                  <i className="fa-brands fa-mixer"></i>
                </a>
              </li>
            </ul>
            <span className="brand-text font-weight-light">Scommercial</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/c3.png"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  CAMESKIN
                </a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Les boutiques mobiles
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <NavLink to="/livraison">
                      <li className="nav-item">
                        <p>Espace de vente</p>
                      </li>
                    </NavLink>

                    <NavLink to="/mobile">
                      <li className="nav-item">
                        <p>Etablir bon de commande</p>
                      </li>
                    </NavLink>
                    <NavLink to="/mobile">
                      <li className="nav-item">
                        <p>Gestion de stock</p>
                      </li>
                    </NavLink>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>
                      Dépot
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <NavLink to="/depot">
                      <li className="nav-item">
                        <p>Détail stock</p>
                      </li>
                    </NavLink>
                    <NavLink to="/commande">
                      <li className="nav-item">
                        <p>Liste de commande</p>
                      </li>
                    </NavLink>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                      Administration
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <NavLink to="/home">
                      <li className="nav-item">
                        <p>Gestion produit</p>
                      </li>
                    </NavLink>
                  </ul>
                  <ul className="nav nav-treeview">
                    <NavLink to="/user">
                      <li className="nav-item">
                        <p>Création d'utilisateurs</p>
                      </li>
                    </NavLink>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    )
  }
}
