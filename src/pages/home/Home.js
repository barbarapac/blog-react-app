import React from 'react';
import './Home.css';
import profileImage from '../../images/foto.png';
import PostsList from '../../components/postslist/PostsList';
import { newsData } from '../../data/DataPosts';

const Home = () => {
  return (
    <div className="App">
      <div className="home-container">
          <div class="home-image">
            <img src={profileImage} alt="Foto da Pessoa" />
          </div>
          <div class="home-text-content">
              <h1>Bárbara Antunes Pacheco</h1>
              <p>
                Bacharel em Engenharia de Software pela Universidade Tecnológica Federal do Paraná. Atuo como desenvolvedora sênior Back-End, com foco na linguagem C# e framework .Net Core.

                O cerne do meu trabalho está em superar desafios complexos de software, aplicando princípios de Clean Code e boas práticas de programação para desenvolver não apenas código funcional, mas também código testável e otimizado. Considero-me uma pessoa dedicada e colaborativa, sempre pronta para contribuir e aprender.

                Meus esforços atuais estão direcionados para aprimorar minha compreensão sobre arquitetura de software e desenvolver minhas habilidades de liderança técnica.
              </p>
          </div>
      </div>
    <PostsList posts={newsData.slice(0, 3)} title={"Últimas do blog"} showLink={true}/>
    <br/>
  </div>

  );
};

export default Home;
