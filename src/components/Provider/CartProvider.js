import React, {useState } from 'react';

import CartContext from '../../Context/CartContext';

export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  function getFromCart(id) {
    return cart.find(x => x.id === id);
  }

  function isInCart({ id }) {
    return id === undefined ? undefined : getFromCart(id) !== undefined;
  }

  function addToCart(obj) {
    if (isInCart(obj)) {
      console.log('Element already in cache store.');
      return;
    }
    setCart([...cart, obj]);
    console.log('Elemento agregado!');
  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, cartSize: cart.length }}
    >
      {children}
    </CartContext.Provider>
  );
}
