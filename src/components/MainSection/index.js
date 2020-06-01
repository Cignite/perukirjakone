import React from "react";
import { Link } from 'react-router-dom';

import Img from '../images/couple_big.jpg';
import logo from '../images/logo-white.svg'
import "./styles.scss";

function MainSection(props) {
  return (
    <div class="hero is-fullheight is-primary has-background">
      <img alt="Fill Murray" class="hero-background" src={Img} />
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <Link to="/" class="navbar-item">
                  <img src={logo} alt="Perukirjakone" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            We digitalise your last will
          </h1>
          <h3 class="subtitle">
            More description here
          </h3>
          <Link to="/register">
            <button
              className="button is-medium is-primary"
            >
              Buy €29,99
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
