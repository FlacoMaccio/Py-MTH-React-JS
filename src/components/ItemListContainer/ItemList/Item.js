import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="flex-item">
      <div className="card-body">
        <h3 className="title">{`${title}`}</h3>
        <Link to={`/item/${id}`}>
          <img className="img-item" src={`${pictureUrl}`} alt="..."></img>
        </Link>
        <h4>{`$${price}`}</h4>
      </div>
    </div>
  );
};

export default Item;
