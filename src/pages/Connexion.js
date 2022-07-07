import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useRoutes } from 'react-router-dom'
import { isEmpty } from '../components/Utilis'
import { getConnectedData } from '../features/connect.slice'

const Connexion = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  let isConnected = false
  const user = useSelector((state) => state.connect.users)
  const dispatch = useDispatch()

  const handleConnect = async (e) => {
    e.preventDefault()
    await axios
      .get(
        `http://localhost:8083/api/usersConnect?pseudo=${login}&&motPasse=${password}`,
      )
      .then((res) => {
        dispatch(getConnectedData(res.data))
      })
  }

  return (
    <div>
      <div className="containerConnexion">
        {!isEmpty(user) && <Navigate to="/accueil" replace={true} />}
        <form onSubmit={(e) => handleConnect(e)}>
          <div className="entete">
            <h1>CONNEXION</h1>
          </div>

          <div className="pseudo-container">
            <label for="pseudo">Pseudo</label>
            <input
              type="text"
              autocomplete="off"
              id="pseudo"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className="password-container">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              autocomplete="off"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Valider" />
        </form>
      </div>
    </div>
  )
}

export default Connexion
