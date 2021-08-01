import React, { useEffect, useState } from "react";
import { getItemsByCategory, getItems } from "./ItemData";

import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  const { categoryid } = useParams();
  useEffect(() => {
    
    if (categoryid === undefined) {
      getItems()
        .then((data) => {
          setItems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        }, []);
    } else {
      getItemsByCategory(categoryid)
        .then((data) => {
          
          setItems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        }, []);
    }
  }, [categoryid]);

  return <ItemList items={Items} />;
};

export default ItemListContainer;
