export const Item = [
    {   id: 1,
        name: "Shampoo",
        picture: "/",
        price: 1000
        
    },
    {
        id: 2,
        name: "Micro",
        picture: "/",
        price: 2000
    },
    {
        id: 3,
        name: "Manopla",
        picture: "/",
        price: 3000
    },
    {
        id: 4,
        name: "Cera",
        picture: "/",
        price: 4000
    },
    {
        id: 5,
        name: "Lavado",
        picture: "/",
        price: 5000
    },
]

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

export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemInicial);
        }, 2000);
    });
}




