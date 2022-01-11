import React from 'react';
import {ReactComponent as GithubIcon} from '../../assets/img/github.svg'; 
import './styles.scss';

const Navbar = () =>(

    <header>
    <nav className="container">
      <div className = "dsmovie-nav-content">
        <h1>DSMovie</h1>
        <a href="https://github.com/rodrigoschlichta" target="_blank" rel="noreferrer">
        <div className="dsmovie-contact-container">
                  <GithubIcon />
                  <p className="dsmovie-contact-link">/rodrigoschlichta</p>
              </div>
        </a>
      </div>

    </nav>
  </header>
);

export default Navbar;