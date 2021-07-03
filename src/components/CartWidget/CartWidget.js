// import { computeHeadingLevel } from '@testing-library/dom';
import React, { Component, useContext } from "react";
import logo from "../../assets/images/cart.svg";
import CartContext from "../../Context/CartContext"

const CarWidget = () => {
  const cartHandler = useContext(CartContext);
console.log(cartHandler.cartSize);
  return (
    <div>
      <img alt="logo" className="logo" src={logo}></img>
      <label> {cartHandler.cartSize} </label>
      
    </div>
  );
};

export default CarWidget;
