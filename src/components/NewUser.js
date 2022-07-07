import axios from 'axios'
import React, { useState } from 'react'

const NewUser = ({ onClose }) => {
  const [pseudo, setPseudo] = useState('')
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [motPasse, setMotPass] = useState('')

  const handleUser = (e) => {
    e.preventDefault()

    if (pseudo !== '' && nom !== '' && motPasse !== '') {
      const data = {
        pseudo,
        nom,
        prenom,
        motPasse,
      }
      axios.post('http://localhost:8083/api/users', data)
      onClose()
    } else {
      console.log('Veuillez remplir tus les champs obligatoirs')
    }
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleUser(e)}>
        <div className="pseudo-container">
          <label for="pseudo">Pseudo</label>
          <input
            type="text"
            autocomplete="off"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
          />
          <span></span>
        </div>

        <div className="nom-container">
          <label for="nom">Nom</label>
          <input
            type="text"
            autocomplete="off"
            id="nom"
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="prenom-container">
          <label for="prenom">Prénom</label>
          <input
            type="text"
            autocomplete="off"
            id="prenom"
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>

        <div className="password-container">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            autocomplete="off"
            id="password"
            onChange={(e) => setMotPass(e.target.value)}
          />
          <p id="progress-bar"></p>
          <span></span>
        </div>

        <div className="confirm-container">
          <label for="confirm">Confirmer mot de passe</label>
          <input type="password" autocomplete="off" id="confirm" />
          <span></span>
        </div>

        <input type="submit" value="Valider" />
      </form>
    </div>
  )
}

export default NewUser
