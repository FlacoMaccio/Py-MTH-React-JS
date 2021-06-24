import React, { useEffect, useState } from "react";
import { getItemByCategory, getItems } from "./ItemData";

import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";


const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  const { categoryid } = useParams();
  useEffect(() => {
    console.log("este es item category: " + categoryid);
    if (categoryid === undefined) {
      getItems()
        .then((data) => {
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        }, []);
    } else {
      getItemByCategory(categoryid)
        .then((data) => {
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        }, []);
    }
  }, [Items, categoryid]);

  return (
    <ItemList  items={Items}/>
  );
};

export default ItemListContainer;

