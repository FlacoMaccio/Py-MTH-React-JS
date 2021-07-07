import ItemCount from "../ItemCount/ItemCount";

const CartListItem = ({ title, price, quantity  }) => {
  const onAdd = (amount) => {
    console.log(`realizaste la compra de ${amount}`);
  };
  return (
    <div className="grid">
      <div className="col-mb-2">
        <div className="card">
          <div className="item">
            <h3 className="card-title">{`${title}`}</h3>
             <h4>{`${price}`}</h4>
             <h5>{`${quantity}`}</h5>
            <ItemCount initial={quantity} stock={8} onAdd={onAdd} label={"Terminar Compra"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;