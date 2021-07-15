import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { addOrder } from "../ItemListContainer/ItemData";

const Cart = () => {
  const { getItemsCount, getCartTotal, cart } = useContext(CartContext);

  const saveOrder = () => {
    const orderItems = [];
    cart.forEach(cartItem => {
      const orderItem = {
        id: cartItem.id,
        title: cartItem.item.title,
        price: cartItem.item.price,
      }
      orderItems.push(orderItem);
    });
    const newOrder = {
      buyer: {
        email: 'ia@gmail.com',
        name: 'Ignacio Aedo',
        phone: '+56989786677'
      },

      total: getCartTotal(),
      items: orderItems,
    };
    addOrder(newOrder)
      .then(({ id }) => {

        alert(`Orden Creada. Este es tu ID: ${id}`);
      })
      .catch(error => {

        console.log(error);
      });
  }


  const onAdd = (amount) => {
    console.log(`realizaste la compra de ${amount}`);
  };


  return (
    <div>
      <h3> Cantidad total de items {getItemsCount()} </h3>
      <h3> Monto Total ${getCartTotal()} </h3>
      <button onClick={() => saveOrder()} > Comprar </button>
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
