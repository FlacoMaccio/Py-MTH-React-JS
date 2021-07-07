import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import CartList from "./CartList";

const Cart = () => {
  const cartHandler = useContext(CartContext);


  return (
    <div>
      <h1>Estos son los productos agregados</h1>
      <CartList cartItems={cartHandler.cart} />
    
    </div>
  );
};

export default Cart;
