import React, { useEffect, useState } from "react";
import { Item } from "./Item"

const ItemList = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {});
  const getItem = new Promise ((resolve, reject) => {
    setTimeout(() => {
      Item !== [] ? resolve(Item) : reject("No hay productos cargados");
    }, 2000);
  });

  getItem
    .then((data) => {
      setItems(data);
    })
    .catch((error) => {
      console.log(error);
    }, []);

  return (
    <div className="ItemsList">
      {Items.map((item) => {
        return (
          <a className={` ${item.name}`} href={item.imagen}>
            {item.description}
          </a>
        );
      })}
    </div>
  );
};

export default ItemList;



