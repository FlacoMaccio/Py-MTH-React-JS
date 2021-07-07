import CartListItem from "./CartListItem";

const CartList = ({ cartItems }) => {
    console.log(cartItems);
  return (
    <div className="CartList">
      {cartItems.map((cartItem) => {
        return (
          <CartListItem
            id={cartItem.item.id}
            title={cartItem.item.title}            
            price={cartItem.item.price}
            quantity= {cartItem.quantity}

          />
        );
      })}
    </div>
  );
};

export default CartList;