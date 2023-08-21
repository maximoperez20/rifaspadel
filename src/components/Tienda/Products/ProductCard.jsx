import React from "react";
import "./ProductCard.css";
function ProductCard(props) {
  return (
    <div className="col mb-5">
      <div className="card">
        <img className="card-img-top" src={props.imageUrl} alt={props.name} />
        <div className="card-body product-description p-4">
          <div className="text-center">
            <h5 className="fw-bolder product-description-text">{props.name}</h5>
            ${props.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="product-actions">
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://wa.me/+543518037592?text=¡Hola! Estoy navegando en la página web y me encuentro interesado en la compra de la paleta ${props.name}`}
            >
              <button className="btn btn-add-to-cart">COMPRAR</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
