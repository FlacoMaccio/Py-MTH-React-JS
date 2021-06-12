import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import logo from '../../assets/images/logomth.png';
import CartWidget from '../CarWidget';


class Navbar extends Component{
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img alt="logo" className="logo" src={logo}></img>
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                > 
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                {MenuItems.map((item) => {
                        return (
                          <a className= {`nav-link ${item.cName}`} href={item.url}>
                            {item.titulo}
                          </a>
                        );
                    })}
                  <CartWidget />
                </div>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar;