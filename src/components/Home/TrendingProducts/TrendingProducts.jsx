import React from "react";
import "./TrendingProducts.css";
import ProductCard from "../../Tienda/Products/ProductCard";
const trendingRackets = [
  {
    name: "Royal Padel Cross Future Full Carbono",
    price: 199.99,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_943844-MLA70564460925_072023-F.webp",
  },
  {
    name: "Head Graphene 360+ Alpha Pro",
    price: 229.99,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_920360-MLA47093495350_082021-F.webp",
  },
  {
    name: "Babolat Pure Aero",
    price: 179.99,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_723079-MLA53042929061_122022-F.webp",
  },
  {
    name: "Royal Padel R30 Mendoza Premier Edition",
    price: 189.99,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_993522-MLA71011291469_082023-F.webp",
  },
];
function TrendingProducts() {
  return (
    <div className="individual-banner">
      <div className="individual-banner__header">
        <h2 className="fs-1">Paletas en tendencia</h2>
      </div>
      <div className="trending-products__content">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {trendingRackets.map((item) => (
            <ProductCard
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
