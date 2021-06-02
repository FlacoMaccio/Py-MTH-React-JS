import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"

class Navbar extends Component{
    render() {
        return(
            <nav calssName='NavBarItems'> 
                <h1 className='menu-logo'>MTH CarDetail </h1>
                <div className='menu-icon'>
                    
                </div> 
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.titulo}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;