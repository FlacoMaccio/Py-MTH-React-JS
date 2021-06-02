import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import logo from '../../assets/images/logomth.png';

class Navbar extends Component{
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <img alt="logo" className="logo" src={logo}></img>
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                > 
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                {MenuItems.map((item, index) => {
                        return (
                          <a className= {`nav-link ${item.cName}`} href={item.url}>
                            {item.titulo}
                          </a>
                        );
                    })}
                  
                </div>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar;