import React, { useState } from "react";

import CartContext from "../../Context/CartContext";

export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  function getFromCart(id) {
    return cart.find((x) => x.id === id);
  }

  function isInCart({ id }) {
    return id === undefined ? undefined : getFromCart(id) !== undefined;
  }

  function getItemsCount() {
    let count = 0;
    cart.forEach((cartItem) => {
      count = count + cartItem.quantity;
    });
    return count;
  }

  function addToCart(item, quantity) {
    const cartItem = {
      item: item,
      quantity: quantity,
      id: item.id,
    };

    if (isInCart(cartItem)) {
      console.log("Element already in cache store.");
      return;
    }

    setCart([...cart, cartItem]);
    console.log("Elemento agregado!");
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        cartSize: cart.length,
        getItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
