import React from 'react';
import './Header.css'; // Import custom CSS

const Header = () => {
  return (
    <header className="header bg-light py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="header-name">
              <h1>Batdulguun Enkhtuya</h1>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <nav className="header-nav">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="mailto:batdulguunenkhtuya@gmail.com">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="CV.pdf" download>Resumé</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;