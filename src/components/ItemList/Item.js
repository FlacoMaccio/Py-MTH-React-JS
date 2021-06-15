import ItemCount from "../ItemCount/ItemCount";
// import ItemListContainer from "../ItemListContainer/ItemListContainer";
const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className="grid">
      <div className="col-mb-2">
        <div className="card">
          <div className="item">
            {/* {`${id}`} */}
            <h3 className="card-title">{`${title}`}</h3>
            <p className="card-text">{`${description}`}</p>
            <img className="card-img-top" className="img-thumbnail" src={`${pictureUrl}`}></img>
            {`${price}`}
            <ItemCount initial={1} stock={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
