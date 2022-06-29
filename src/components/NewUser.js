import React from 'react'

const NewUser = () => {
  return (
    <div className="container">
      <form action="">
        <div className="pseudo-container">
          <label for="pseudo">Pseudo</label>
          <input type="text" autocomplete="off" id="pseudo" />
          <span></span>
        </div>

        <div className="nom-container">
          <label for="nom">Nom</label>
          <input type="text" autocomplete="off" id="nom" />
        </div>
        <div className="prenom-container">
          <label for="prenom">Prénom</label>
          <input type="text" autocomplete="off" id="prenom" />
        </div>

        <div className="password-container">
          <label for="password">Mot de passe</label>
          <input type="password" autocomplete="off" id="password" />
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
