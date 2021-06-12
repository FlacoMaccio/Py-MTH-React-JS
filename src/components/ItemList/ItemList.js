import React, { useEffect, useState } from "react";
import  Item from "./Item";

const ItemList = () => {
  const ItemInicial = [
    {
      id: 1,
      title: "shampoo",
      description: "meguiars",
      price: "$3000",
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_758427-MLA26840267441_022018-O.webp",
    },
  ];

  const [Items, setItems] = useState(ItemInicial);
  useEffect(() => {});
  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      Item !== [] ? resolve(Item) : reject("No hay productos cargados");
    }, 2000);
  });

  //   getItem
  //     .then((data) => {
  //       setItems(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     }, []);

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



