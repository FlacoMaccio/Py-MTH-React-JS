import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import CartList from "./CartList";

const Cart = () => {
  const cartHandler = useContext(CartContext);


  return (
    <div>
      <h3> Cantidad total de items {cartHandler.getItemsCount()} </h3>
      <h3> Monto Total ${cartHandler.getCartTotal()} </h3>      
      <CartList cartItems={cartHandler.cart} />
    
    </div>
  );
};

export default Cart;
