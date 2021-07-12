import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const Cart = () => {
  const {getItemsCount, getCartTotal, cart} = useContext(CartContext);
  const onAdd = (amount) => {
    console.log(`realizaste la compra de ${amount}`);
  };

  return (
    <div>
      <h3> Cantidad total de items {getItemsCount()} </h3>
      <h3> Monto Total ${getCartTotal()} </h3>
      <div className="CartList">
        {cart.map((cartItem) => {
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
