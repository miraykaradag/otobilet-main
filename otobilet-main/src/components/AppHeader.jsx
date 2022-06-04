import React from "react";
import { NavLink } from "react-router-dom";
import BlackLogo from "/src/logo/otobilet_black.png";


// navbar kısmını oluşturduğum bölüm.


const AppHeader = () => {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="mh-logo">
          <img src={BlackLogo} width="130" height="70" alt="Otobilet logo" />
        </h1>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className="content__item">
              <NavLink to="/" className="link link--io">
                Anasayfa
              </NavLink>
            </li>
            <li className="content__item">
              <NavLink to="/biletlerim" id="biletlerim" className="link link--io">
                Biletlerim
              </NavLink>
            </li>
            <li className="content__item">
              <NavLink to="/girisyap" className="link link--io">
                Giriş Yap
              </NavLink>
            </li>
            <li className="content__item">
              <NavLink to="/kayitol" className="link link--io">
                Kayıt Ol
              </NavLink>
            </li>
            <li className="content__item">
              <NavLink to="/iletisim" className="link link--io">
                İletişim
              </NavLink>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default AppHeader;
