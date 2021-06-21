
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail ({ id, title, description, price, pictureUrl }) {
    return (
    <div className="grid">
      <div className="col-mb-2">
        <div className="card">
          <div className="item">
            <h3 className="card-title">{`${title}`}</h3>
            <p className="card-text">{`${description}`}</p>
            <img className="img-thumbnail" alt="..." src={`${pictureUrl}`}></img>
            <h4>{`${price}`}</h4>
            <ItemCount initial={1} stock={8} />
          </div>
        </div>
      </div>
    </div>
  );
};


 

export default ItemDetail;



