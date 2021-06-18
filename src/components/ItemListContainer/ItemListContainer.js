import React from "react";
import logo from "../../assets/images/portada.jpg";

import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const onAdd = (amount) => {
    console.log(amount);
  };

  return (
    <div>
      <Link to="/ItemList/">
        <img src={logo} className="img-fluid" alt="logo"></img>
      </Link>
     
    </div>
  );
};

export default ItemListContainer;
