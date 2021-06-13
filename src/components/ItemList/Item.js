const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className="item">
      {`${id}`}
      {`${title}`}
      {`${description}`}
      {`${price}`}
      {`${pictureUrl}`}
    </div>
  );
};

export default Item;
