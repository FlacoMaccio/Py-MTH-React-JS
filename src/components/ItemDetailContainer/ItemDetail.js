import ItemCount from "../ItemCount/ItemCount";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import "./ItemDetail.css";

function ItemDetail({ id, title, description, price, pictureUrl }) {
  const cartHandler = useContext(CartContext);

  const onAdd = (amount) => {
    console.log(`Agregaste ${amount} productos`);
    const item = { id, title, description, price, pictureUrl };
    cartHandler.addToCart(item, amount);
  };

  const agregado = cartHandler.isInCart({ id });

  const removeItem = () => {
    cartHandler.removeItem({ id, title, description, price, pictureUrl });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="card">
              <div className="item">
                <h3 className="card-title">{`${title}`}</h3>
                <img className="img-item" alt="..." src={`${pictureUrl}`}></img>

                <div className="cols">
                  <p className="card-text">{`${description}`}</p>

                  <h4>{`$${price}`}</h4>

                  {agregado && (
                    <Link className="link" to="/cart">
                      Terminar compra
                    </Link>
                  )}
                  {/* {agregado && <button onClick={removeItem}> Borrar item</button>} */}
                  {!agregado && (
                    <ItemCount
                      initial={0}
                      stock={8}
                      onAction={onAdd}
                      label={"Agregar al Carrito"}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
