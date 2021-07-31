// import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, description, price, pictureUrl }) => {
  const onAdd = (amount) => {
    console.log(`realizaste la compra de ${amount}`);
  };
  return (
    <div className="flex-container">
      <div className="flex-item">
        
          <div className="card-body">
            <h3 className="title">{`${title}`}</h3>
            <Link to={`/item/${id}`}>
              <img
                className="img-item"
                src={`${pictureUrl}`}
                alt="..."
              ></img>
            </Link>
            <h4>{`$${price}`}</h4>
            {/* <ItemCount initial={0} stock={8} onAdd={onAdd} /> */}
          </div>
        </div>
      
    </div>
  );
};

export default Item;
