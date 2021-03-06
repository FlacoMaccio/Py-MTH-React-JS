import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { addOrder } from "../ItemListContainer/ItemData";
import CartForm from "./CartForm";
import "./Cart.css";

const Cart = () => {
  const { getItemsCount, getCartTotal, cart, removeItem, clearCart } =
    useContext(CartContext);

  const saveOrder = (name, phone, mail) => {
    const orderItems = [];
    if (getItemsCount() === 0) {
      alert("El carrito se encuentra vacio");
      return;
    }
    cart.forEach((cartItem) => {
      const orderItem = {
        id: cartItem.id,
        title: cartItem.item.title,
        price: cartItem.item.price,
        pictureUrl: cartItem.item.pictureUrl,
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
        clearCart();
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="CartList">
              {getItemsCount() === 0 && <h2>Tu carrito esta vacio</h2>}
              {cart.map((cartItem) => {
                return ( 
                  <div className="grid" key={cartItem.id}>
                    <div className="col-mb-2">
                      <div className="card">
                        <div className="item">
                          <h3 className="card-title">{`${cartItem.item.title}`}</h3>
                          <h4>{`$${cartItem.item.price}`}</h4>
                          <p>{`Unidades: ${cartItem.quantity}`}</p>
                          <img
                            className="img-item"
                            alt="..."
                            src={`${cartItem.item.pictureUrl}`}
                          ></img>
                          <button
                            className="btn btn-secondary"
                            onClick={() => removeItem(cartItem.item)}
                          >
                            Quitar del carrito
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col">
            <h3> Cantidad total de productos {getItemsCount()} </h3>
            <h3> Total ${getCartTotal()} </h3>
            <div className="cartForm">
            {getItemsCount() !== 0 && <CartForm onAction={saveOrder} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
