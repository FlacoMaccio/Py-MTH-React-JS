const listProducts = [
  {
    id: 1,
    title: "Shampoo NXT",
    description: "Shampoo sintetico Meguiars",
    price: "$3000",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_758427-MLA26840267441_022018-O.webp",
  },
  {
    id: 2,
    title: "Cera NXT",
    description: "Cera Sintentica Meguiars",
    price: "$4500",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX03Xdy0fFcaQVFkuIER4VLJJ8c4_YiyGeFfMlt3VWBuKMv1hv9Ih8XdeVppET0Oe0_xmhg463&usqp=CAc",
  },
  {
    id: 3,
    title: "Ultimate Quick Detailer",
    description: "Quick Detailer/Quick Wax Meguiars",
    price: "$3500",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-1oWHykX1lyl4-J3kE71_ILXohvmICZUWtcKM2-FHMexGw5zoucIY02A1_1iUPvAYDWbrmpTw5E&usqp=CAc"
  },
  {
    id: 4,
    title: "Tire Gel",
    description: "Acondicionador de cubuiertas Meguiars",
    price: "$3000",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIsJPbjZ-T2sB_0bQnXe_HbhMpQ51vszEQZgwlBWGtngOCdXpUQ-BPVteKey5V7Q2kYyBLwQ5&usqp=CAc",
  },
  {
    id: 5,
    title: "Microfibra",
    description: "Microfibra de secado Meguiars",
    price: "$5000",
    pictureUrl:
      "https://www.meguiarsdirect.com/pub/media/catalog/product/cache/image/500x500/beff4985b56e3afdbeabfc89641a4582/x/2/x2020_3pkmicrofiber_peg.png",
  },
];



export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listProducts);
    }, 2000);
  });
}
