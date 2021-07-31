import React, { Component } from "react";
import logo from "../../assets/images/logomth.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to={"/"}>
          <img alt="logo" className="logo" src={logo}></img>
        </NavLink>

        <div className="nav nav-pills">
          <div className="top-bar">
            <NavLink className="nav-item" to={"/ItemList"}>
              Todos los Productos
            </NavLink>
            <NavLink className="nav-item" to={`/category/Lavado`}>
              Lavado
            </NavLink>
            <NavLink className="nav-item" to={`/category/Proteccion`}>
              Proteccion
            </NavLink>
            <NavLink className="nav-item" to={`/category/Mantenimiento`}>
              Mantenimiento
            </NavLink>
            <NavLink className="nav-item" to={`/category/Acondicionadores`}>
              Acondicionadores
            </NavLink>
            <NavLink className="nav-item" to={`/category/Micros`}>
              Micros
            </NavLink>
          </div>
          <CartWidget />

        </div>
      </nav>
    );
  }
}

export default Navbar;
