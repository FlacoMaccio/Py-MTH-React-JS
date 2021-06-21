import React, { useEffect, useState } from "react";
import  Item from "./Item";
import {getItems} from "./ItemData"
import { useParams } from "react-router-dom";


const ItemList = () => {

  const [Items, setItems] = useState([]);
  const { categoryid } = useParams();
  useEffect(() => {
    console.log("este es item category: "+categoryid);
    getItems()
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  }, [Items, categoryid]);

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





