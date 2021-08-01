import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="flex-container">
      

      {items.map((item) => {
        return (
          <Item
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
