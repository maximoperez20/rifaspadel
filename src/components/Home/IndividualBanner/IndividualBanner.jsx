import React from "react";
import "./IndividualBanner.css";
/*
interface Props {
  title: string;
  subtitle: string;
  imageTitle: string;
  imageSubtitle: string;
  buttonText: string;
}*/
export default function IndividualBanner() {
  return (
    <div className="individual-banner">
      <div className="individual-banner__header">
        <h2 className="fs-1">Descrubí tu destino</h2>
      </div>
      <div
        className="individual-banner__content bg-cover h-auto text-white object-fill"
        style={{
          backgroundImage:
            "url(https://vairo.com/padel/wp-content/uploads/2023/01/banner-falda-lady-team2-1.jpg.webp)",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="">
          <p className="fs-1 fw-bolder">A un paso de tu número de la suerte</p>
          <p className="fs-3 fw-medium">
            Ahora podés dejar tu suerte al destino y utilizar nuestra aplicación
            de generador de números, con un solo click obtendrás el número que
            te dará suerte en tu día.
          </p>
          <button type="button" className="btn btn-secondary fs-4">
            PROBAR MI SUERTE
          </button>
        </div>
      </div>
    </div>
  );
}
