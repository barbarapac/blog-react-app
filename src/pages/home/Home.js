import React from 'react';
import './Home.css';
import profileImage from '../../images/foto.png';
import PostsList from '../../components/postslist/PostsList';
import { newsData } from '../../data/DataPosts';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <div className="home-container">
          <div class="home-image">
            <img src={profileImage} alt="Foto da Pessoa" />
          </div>
          <div class="home-text-content">
              <h1>Seu nome</h1>
              <p>Coloque aqui sua bibliografia de forma resumida, Coloque aqui sua bibliografia de forma resumida Coloque aqui sua bibliografia de forma resumida Coloque aqui sua bibliografia de forma resumidaColoque aqui sua bibliografia de forma resumida, Coloque aqui sua bibliografia de forma resumida, Coloque aqui sua bibliografia de forma resumida, Coloque aqui sua bibliografia de forma resumida</p>
          </div>
      </div>


    <PostsList posts={newsData.slice(0, 3)} title={"Últimas do blog"} showLink={true}/>
  </div>

  );
};

export default Home;
