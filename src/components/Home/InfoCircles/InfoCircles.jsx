import React from "react";
import './InfoCircles.css'
import {
  AiOutlineComment,
  AiOutlineSafety,
  AiOutlineSafetyCertificate,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";

function InfoCircles() {
  return (
    <div className="info-circles">
      <div className="row">
        <div className="col info-circles__item">
          <AiOutlineSafety size={"4rem"} />
          <span>Garantía en tus compras</span>
        </div>
        <div className="col info-circles__item">
          <AiOutlineDollarCircle size={"4rem"} />
          <span>Medios de pago</span>
        </div>
        <div className="col info-circles__item">
          <AiOutlineComment size={"4rem"} />
          <span>Atención personalizada</span>
        </div>
        <div className="col info-circles__item">
          <LiaShippingFastSolid size={"4rem"} />
          <span>Envío gratis</span>
        </div>
      </div>
    </div>
  );
}

export default InfoCircles;
