import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { addOrder } from "../ItemListContainer/ItemData";
import CartForm from "./CartForm";

const Cart = () => {
  const { getItemsCount, getCartTotal, cart, removeItem } =
    useContext(CartContext);

  const saveOrder = (name, phone, mail) => {
    const orderItems = [];
    if (getItemsCount() == 0) {
      alert("El carrito se encuentra vacio");
      return;
    }
    cart.forEach((cartItem) => {
      const orderItem = {
        id: cartItem.id,
        title: cartItem.item.title,
        price: cartItem.item.price,
      };
      orderItems.push(orderItem);
    });
    const newOrder = {
      buyer: {
        name: name,
        phone: phone,
        email: mail,

      },

      total: getCartTotal(),
      items: orderItems,
    };
    addOrder(newOrder)
      .then(({ id }) => {
        alert(`Orden Creada. Este es tu ID: ${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3> Cantidad total de items {getItemsCount()} </h3>
      <h3> Monto Total ${getCartTotal()} </h3>
      <button onClick={() => saveOrder()}> Comprar </button>
      <div className="container">
        <div className="row">
          

          <div className="col">
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
                            onAction={() => {
                              removeItem(cartItem.item);
                            }}
                            label={"Quitar del carrito"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col">
            <CartForm onAction= {saveOrder}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
