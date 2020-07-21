import React from "react";
import { Link } from 'react-router-dom';

import Img from '../images/couple_big.jpg';
import logo from '../images/logo-white.svg'
import "./styles.scss";

function MainSection(props) {
  return (
    <div className="hero is-fullheight is-dark has-background">
      <img alt="Fill Murray" className="hero-background is-transparent" src={Img} />
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/">
                  <img src={logo} alt="Perukirjakone" className="perulogo" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Tee perukirja netissä
          </h1>
          <h3 className="subtitle">
            Tietokoneesi avulla!
          </h3>
          <Link to="/aloita">
            <button
              className="button is-medium is-primary"
            >
              Aloita tästä
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
