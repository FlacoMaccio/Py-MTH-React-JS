import React from 'react';
import logo from '../../assets/images/portada.jpg'
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = () => {
    
    const onAdd = (amount) => {
       console.log(amount) 
    }

    return (
        <div>
            <img src={logo} class="img-fluid" alt="logo"></img>
            <ItemCount initial={1} stock={20} onAdd={onAdd}/>
        </div>
    )
}
 
export default ItemListContainer;