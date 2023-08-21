import { React, useState } from "react";
import NumberGrid from "../NumberGrid";
import WinnersHistory from "./WinnersHistory";
import Numbers from "./Numbers";
function Rifas() {
  return (
    <div className="rifas-container container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">RIFA Nº 15</h1>
          <Numbers />
          <p className="fw-medium mt-4">
            ¡Bienvenido! En esta sección, te presentamos la lista de números
            disponibles para la rifa. Por favor, revisa cuidadosamente la lista
            y cuando hayas decidido qué número te gustaría comprar, simplemente
            haz clic en el número correspondiente y se te redigira a un chat
            directo con nosotros. Si tienes alguna pregunta o necesitas ayuda, no
            dudes en hacérnoslo saber. ¡Buena suerte!
          </p>
        </div>
        <div className="col">
          <WinnersHistory />
        </div>
      </div>
    </div>
  );
}

export default Rifas;
