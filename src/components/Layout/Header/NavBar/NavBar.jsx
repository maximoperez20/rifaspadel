import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logoImage from "./../../../../assets/logo.jpg";

function Navbar() {
  const [offset, setOffset] = useState(0);

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={"nav is-sticky"}>
      <a href="/" className="nav__brand">
        <img className="navbar-logo" src={logoImage} alt="RIFAS PADEL" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="/rifas" className="nav__link">
            Rifa
          </a>
        </li>{" "}
        <li className="nav__item">
          <a href="/number" className="nav__link">
            Mi Suerte
          </a>
        </li>
        <li className="nav__item">
          <a href="/tienda" className="nav__link">
            Tienda
          </a>
        </li>
        <li className="nav__item">
          <a href="/nosotros" className="nav__link">
            ¿Quienes Somos?
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
