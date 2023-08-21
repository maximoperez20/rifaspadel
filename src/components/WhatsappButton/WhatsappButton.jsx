import React from "react";
import "./WhatsappButton.css";

import { AiOutlineWhatsApp } from "react-icons/ai";

function WhatsappButton() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={
        "https://api.whatsapp.com/send/?phone=+543518037592&text=Hola, estoy en la página web y quiero hacer una consulta!"
      }
    >
      <div className="botonWhatsapp">
        <span className="iconoWhatsapp">
          <AiOutlineWhatsApp size={'2.5rem'}/>
        </span>
      </div>
    </a>
  );
}

export default WhatsappButton;
