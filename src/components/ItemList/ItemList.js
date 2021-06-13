import React, { useEffect, useState } from "react";
import  Item from "./Item";
import getItems from "./ItemData"

const ItemList = () => {
  const [Items, setItems] = useState([]);
  
  useEffect(() => {
    getItems()
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });

  return (
    <div className="ItemsList">
      {Items.map((item) => {
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





