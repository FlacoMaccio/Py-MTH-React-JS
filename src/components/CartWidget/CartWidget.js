// import { computeHeadingLevel } from '@testing-library/dom';
import React, { useContext } from "react";
import logo from "../../assets/images/cart.svg";
import CartContext from "../../Context/CartContext";
import "./CartWidget.css";

const CarWidget = () => {
  const { getItemsCount } = useContext(CartContext);

  return (
    <div className="cartIcono">
      <img alt="logo" className="logo" src={logo}></img>
      <label className="cartnumber"> {getItemsCount()} </label>
    </div>
  );
};

export default CarWidget;
