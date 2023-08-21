import React from "react";
import ProductCard from "./ProductCard";
const paddleRackets = [
  {
    name: "Royal Padel Cross Future Full Carbono",
    price: 199.99,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_943844-MLA70564460925_072023-F.webp",
  },
  {
    name: "Head Graphene 360+ Alpha Pro",
    price: 229.99,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_920360-MLA47093495350_082021-F.webp",
  },
  {
    name: "Babolat Pure Aero",
    price: 179.99,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_723079-MLA53042929061_122022-F.webp",
  },
  {
    name: "Royal Padel R30 Mendoza Premier Edition",
    price: 189.99,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_993522-MLA71011291469_082023-F.webp",
  },
  {
    name: "Royal Padel M27 España Foam Rugosa",
    price: 209.99,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_901892-MLA70419478395_072023-F.webp",
  },
  {
    name: "Dunlop CX 200",
    price: 169.99,
    imageUrl: "https://example.com/images/paddle6.jpg",
  },
  {
    name: "Volkl V-Feel 10 320g",
    price: 219.99,
    imageUrl: "https://example.com/images/paddle7.jpg",
  },
  {
    name: "Pacific BXT X Fast Pro",
    price: 179.99,
    imageUrl: "https://example.com/images/paddle8.jpg",
  },
  {
    name: "Technifibre T-Fight 305 XTC",
    price: 189.99,
    imageUrl: "https://example.com/images/paddle9.jpg",
  },
  {
    name: "Srixon Revo CX 2.0",
    price: 199.99,
    imageUrl: "https://example.com/images/paddle10.jpg",
  },
];
function Products() {
  return (
    <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {paddleRackets.map((item) => (
            <ProductCard
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default Products;
