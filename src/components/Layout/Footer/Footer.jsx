import React from "react";
import "./Footer.css";

import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div id="footer">
      <div className="social-media">
        <p>Seguinos en nuestras redes</p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/rifaspadel.df">
            <BsFacebook size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/rifaspadel.df">
            <BsInstagram size={"3rem"} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=+543518037592&text=Hola,%20estoy%20en%20la%20p%C3%A1gina%20web%20y%20quiero%20hacer%20una%20consulta!">
            <BsWhatsapp size={"3rem"} />
          </a>
        </div>
      </div>
      <p className="copyright-text">
        COPYRIGHT © RIFAS PADEL DF 2023. TODOS LOS DERECHOS RESERVADOS.
        POLITICAS DE PRIVACIDAD
      </p>
    </div>
  );
}

export default Footer;
