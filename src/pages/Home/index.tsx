import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Su marketplace de colecta de residuos.</h1>
          <p>Ayudamos para encontrar puntos de colecta de forma eficiente.</p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>

            <strong>Cadastre un punto de colecta</strong>
          </Link>
        </main>

      </div>
    </div>
  )
}

export default Home;