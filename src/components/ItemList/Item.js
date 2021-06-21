import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
// import ItemDetail from "../ItemDetailContainer/ItemDetail";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className="grid">
      <div className="col-mb-2">
        <div className="card">
          <div className="item">
            <h3 className="card-title">{`${title}`}</h3>
            <Link to={`/${id}`}>
              <img
                className="img-thumbnail"
                src={`${pictureUrl}`}
                alt="..."
              ></img>
            </Link>
            <h4>{`${price}`}</h4>
            <ItemCount initial={1} stock={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
