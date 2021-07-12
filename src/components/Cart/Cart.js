import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const Cart = () => {
  const cartHandler = useContext(CartContext);
  const onAdd = (amount) => {
    console.log(`realizaste la compra de ${amount}`);
  };

  return (
    <div>
      <h3> Cantidad total de items {cartHandler.getItemsCount()} </h3>
      <h3> Monto Total ${cartHandler.getCartTotal()} </h3>
      <div className="CartList">
        {cartHandler.cart.map((cartItem) => {
          return (
            <div className="grid">
              <div className="col-mb-2">
                <div className="card">
                  <div className="item">
                    <h3 className="card-title">{`${cartItem.item.title}`}</h3>
                    <h4>{`${cartItem.item.price}`}</h4>
                    <h5>{`${cartItem.quantity}`}</h5>
                    <ItemCount
                      initial={cartItem.item.quantity}
                      stock={8}
                      onAdd={onAdd}
                      label={"Terminar Compra"}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
