const listProducts = [
  {
    id: 1,
    title: "shampoo",
    description: "meguiars",
    price: "$3000",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_758427-MLA26840267441_022018-O.webp",
  },
  {
    id: 2,
    title: "shampoo",
    description: "meguiars",
    price: "$3000",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_758427-MLA26840267441_022018-O.webp",
  },
  {
    id: 3,
    title: "shampoo",
    description: "meguiars",
    price: "$3000",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_758427-MLA26840267441_022018-O.webp",
  },
  {
    id: 4,
    title: "shampoo",
    description: "meguiars",
    price: "$3000",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_758427-MLA26840267441_022018-O.webp",
  },
  {
    id: 5,
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
      resolve(listProducts);
    }, 2000);
  });
}
