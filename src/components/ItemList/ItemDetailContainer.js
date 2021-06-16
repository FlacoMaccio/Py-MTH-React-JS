import React, { useEffect, useState } from "react";
import  {getItem}  from "./ItemData";
import ItemDetail from "./ItemDetail";

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
