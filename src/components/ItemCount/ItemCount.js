import React, { useEffect, useState } from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    
const [items, setItems] = useState(initial)
  const addItems = () => {
    items < stock ? setItems(items+1) : alert ("Stock Agotado");
  }
  const removeItems = () => {
    1 == items ? alert('El minimo de ventas es 1 unidad') : setItems(items-1); 
  }
  const agregarAlCarrito = () => {
    alert (`Agregaste ${items} al carrito`);
    setItems(1);
  }
  return (
    <div className="container counter">
      
      <div className="container counter">
        <i className="far fa-minus-square counterButton" onClick={removeItems}></i>
        <span className="counterAmount">{items}</span>
        <i className="far fa-plus-square counterButton" onClick={addItems}></i>            
      </div>
      <button className='btn btn-secondary' onClick = {agregarAlCarrito}> Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCount;