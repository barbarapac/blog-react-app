import React from 'react';
import './Home.css';
import profileImage from '../../images/foto.png'

const Home = () => {
  return (
    <div className="App">

      <div className="home App">
          <div class="image-content">
            <img src={profileImage} alt="Foto da Pessoa" />
          </div>
          <div class="text-content">
              <h1>Seu nome</h1>
              <p>Coloque aqui sua bibliografia de forma resumida, Coloque aqui sua bibliografia de forma resumida Coloque aqui sua bibliografia de forma resumida Coloque aqui sua bibliografia de forma resumidaColoque aqui sua bibliografia de forma resumida, Coloque aqui sua bibliografia de forma resumida, Coloque aqui sua bibliografia de forma resumida, Coloque aqui sua bibliografia de forma resumida</p>
          </div>
      </div>

      <div>
        <h2>Últimas do blog</h2>
      </div>
    </div>

  );
};

export default Home;
