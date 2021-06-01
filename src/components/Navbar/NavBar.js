import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
    render() {
        return(
            <nav calssName='NavBarItems'> 
                <h1 className='menu-logo'>MTH CarDetail </h1>
                <div className='navItems'>
                    
                </div> 
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
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