import React, { useEffect, useState } from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    
// const [items, setItems] = useState(initial)
//   const addItems = () => {
//     items < stock ? setItems(items+1) : alert ("Stock Agotado");
//   }
//   const removeItems = () => {
//     setItems(onAdd-1)
//   }
  
  
  return (
    <div className='container counter'>
      <h1>Contador Stock</h1>
      <div className='d-flex aling-items-center mb-1'>
      <i className="far fa-minus-square counterButton"></i>
      {/* <span className="counterAmount">{}</span> */}
      {/* <i className="far fa-plus-square counterButton"></i> */}
      <i className="bi bi-plus-square"></i>
      


        <button>
          {/* // onClick={() => {
            
          // }} */}
        
          Comprar
        </button>
      </div>
    </div>
  );
}
export default ItemCount;