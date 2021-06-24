import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ id, title, description, price, pictureUrl }) {
  const [agregado, setAgregado] = useState(0);
  const onAdd = (amount) => {
    console.log(`Agregaste ${amount} productos`);
    setAgregado(amount);
  };

  return (
    <div className="grid">
      <div className="col-mb-2">
        <div className="card">
          <div className="item">
            <h3 className="card-title">{`${title}`}</h3>
            <p className="card-text">{`${description}`}</p>
            <img
              className="img-thumbnail"
              alt="..."
              src={`${pictureUrl}`}
            ></img>
            <h4>{`${price}`}</h4>
            {agregado && <Link to="/cart">Terminar compra</Link>}
            {!agregado && <ItemCount initial={0} stock={8} onAdd={onAdd} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
