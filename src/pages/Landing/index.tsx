import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';


function Landing() {
  return (
    <div id="page-landing">
      <div id="landing-page-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua Plataforma de nutricionistas online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Questionário
          </a>


          <a href="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Consultar
          </a>
        </div>

        <span className="total-conection">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;