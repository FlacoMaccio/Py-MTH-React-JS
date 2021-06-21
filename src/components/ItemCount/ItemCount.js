import React, { useEffect, useState } from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock, add}) => {
    
const [items, setItems] = useState(initial)
  const addItems = () => {
    items < stock ? setItems(items+1) : alert ("Stock Agotado");
  }
  const removeItems = () => {
    0 == items ? alert('El minimo de ventas es 1 unidad') : setItems(items-1); 
  }
  const agregarAlCarrito = () => {
    alert (`Agregaste ${items} al carrito`);
    setItems(0);
  }
  const terminarCompra = () => {
    items >= 1 ? alert(`Desea terminar la comprar? Agregaste ${items} al carrito`) :
    setItems(0);  
    }
  
  return (
    <div className="flex-container">
      
      <div className="container-counter">
        <i className="far fa-minus-square counterButton" onClick={removeItems}></i>
        <span className="counterAmount">{items}</span>        
        <i className="far fa-plus-square counterButton" onClick={addItems}></i>            
      </div>
      <div>
      {items >= 1 ? (
        <button className='btn btn-secondary' onClick= {terminarCompra}> Terminar compra</button>
      ) : (
        <button className='btn btn-secondary' onClick={agregarAlCarrito}> Agregar producto</button>
      )}
      </div>
      
    </div>
  );
}
export default ItemCount;