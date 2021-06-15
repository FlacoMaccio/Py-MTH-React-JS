import React, { useEffect, useState } from "react";
import  {getItem}  from "./ItemData";
import  Item from "./Item";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    
    useEffect(() => {
      getItem()
        .then((data) => {
            console.log(data)
          setItem(data);
        })
        .catch((error) => {
          console.log(error);
        }, []);
    });
  
    return (
        <Item
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        pictureUrl={item.pictureUrl}
      />
    );
};

export default ItemDetailContainer;
