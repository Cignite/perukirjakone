import React from "react";
import { Link } from 'react-router-dom';

import "./styles.scss";

function Footer(props) {
  return (
    <footer className="FooterComponent">
      <div className="container">
        <div className="is-centered">
          <ul>
            <li className="footer__item"> Maariankatu 1, 20100, Turku, Finland</li>
            <Link to="/termscondtions">
              <li className="footer__item">Käyttöehdot</li>
            </Link>
            <li className="footer__item"><i className="fa fa-envelope" aria-hidden="true" /> <a href="mailto:info@perukirjakone.fi">&nbsp;info@perukirjakone.fi</a></li>
          </ul>
        </div>
        <div className="social right">
          <span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                fill="#FFF"
              />
            </svg>
          </span>
          <span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                fill="#FFF"
              />
            </svg>
          </span>
          <span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="linkedin">
              <path
                d="M19,19H16V13.7A1.5,1.5 0 0,0 14.5,12.2A1.5,1.5 0 0,0 13,13.7V19H10V10H13V11.2C13.5,10.36 14.59,9.8 15.5,9.8A3.5,3.5 0 0,1 19,13.3M6.5,8.31C5.5,8.31 4.69,7.5 4.69,6.5A1.81,1.81 0 0,1 6.5,4.69C7.5,4.69 8.31,5.5 8.31,6.5A1.81,1.81 0 0,1 6.5,8.31M8,19H5V10H8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"
                fill="#FFF"
              />
            </svg>
          </span>
        </div>
        <div className="copyright left">Y-tunnus: 2453638-7</div>

      </div>
    </footer>
  );
}

export default Footer;
