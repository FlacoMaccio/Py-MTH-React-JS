import React from 'react';
import logo from '../../assets/images/portada.jpg'
import ItemCount from '../ItemCount/ItemCount';
import ItemsList  from '../ItemList/ItemList';


const ItemListContainer = () => {
    
    const onAdd = (amount) => {
       console.log(amount) 
    }

    return (
        <div>
            <img src={logo} className="img-fluid" alt="logo"></img>
            <ItemsList />
            {/* <ItemCount initial={1} stock={8} onAdd={onAdd}/> */}
        </div>
    )
}
 
export default ItemListContainer;