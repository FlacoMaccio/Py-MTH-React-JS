import React, { useEffect, useState } from "react";
import { getItem } from "../ItemListContainer/ItemData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();
  useEffect(() => {
    getItem(itemId)
      .then((doc) => {
        if (!doc.exists) {
          return;
        }
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);
  return (
    <ItemDetail
      id={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
      pictureUrl={item.pictureUrl}
    />
  );
};

export default ItemDetailContainer;
