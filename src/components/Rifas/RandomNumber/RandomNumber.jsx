import React, { useEffect, useState } from "react";
import "./RandomNumber.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Confetti from "react-confetti";
const numbersArray = [];
let numbersAvailable = [];

for (let i = 1; i < 101; i++) {
  if (!numbersArray.includes(i)) {
    numbersAvailable.push(i);
  }
}

function RandomNumber() {
  // Confetti Utils States
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [confettiOpacity, setConfettiOpacity] = useState("1");
  const [showConfetti, setShowConfetti] = useState(false);

  //   Spinner
  const [showSpinner, setShowSpinner] = useState(false);

  //   Number given to the user
  const [luckyNumber, setLuckyNumber] = useState();

  // Show Generate Number Button
  const [showGenerateNumber, setShowGenerateNumber] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", detectWindowSize);

    return () => {
      window.removeEventListener("resize", detectWindowSize);
    };
  }, windowDimension);

  const detectWindowSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const fadeOutInterval = () => {
    const fadeOut = setInterval(() => {
      setConfettiOpacity((prevOpacity) => {
        const newOpacity = parseFloat(prevOpacity) - 0.05; // Adjust the decrement value as needed
        console.log("maximo opaciti: ", newOpacity);
        return Math.max(newOpacity, 0);
      });
    }, 500);

    setTimeout(() => {
      clearTimeout(fadeOut);
      setShowConfetti(false);
    }, 8000);
  };
  const generateRandomNumber = () => {
    setShowGenerateNumber(false);
    setLuckyNumber("");
    setShowSpinner(true);
    let randomNumber = Math.floor(Math.random() * numbersAvailable.length); // Generates a random integer between 0 and 100
    console.log(numbersAvailable[randomNumber]);
    setTimeout(() => {
      setShowSpinner(false);
      setLuckyNumber(numbersAvailable[randomNumber]);
      setShowConfetti(true);
      setConfettiOpacity(1);
      fadeOutInterval();
      //   hideConfetti();
    }, 3000);
  };

  return (
    <div className="number-generator-container container">
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={4000}
          opacity={confettiOpacity}
        />
      )}
      <div>
        <div className="number-generator-presentation">
          <h1 className="number-generator-title">TU NUMERO DE LA SUERTE</h1>
          <p className="number-generator-parragraph">
            ¡Bienvenido a nuestra experiencia de suerte instantánea! ¿Alguna vez
            has deseado tener un número especial que te acompañe en tu día? ¡Hoy
            es tu oportunidad de descubrirlo! Nuestra mágica generadora de
            números de la suerte está aquí para brindarte un número entre 1 y
            100 que podría iluminar tu jornada.
          </p>
          <p className="number-generator-parragraph">
            ¿Cómo funciona? Es simple y emocionante a la vez. Al hacer clic en
            el botón 'Generar Número', estarás abriendo la puerta a un valor
            completamente aleatorio y único para vos.
          </p>
          <p className="number-generator-parragraph">
            Solo se te brindará un número disponible, aunque en alguno de los
            casos puede ocurrir la posibilidad de que el número haya sido
            elegido por otro participante en el mismo momento.
          </p>
        </div>
        <div className="generated-numbers-conainer text-center">
          <div className="lucky-number">
            <h3 className="lucky-number-text">{luckyNumber}</h3>
            {showSpinner && (
              <div
                class="spinner-border m-0 spinner-random-number"
                role="status"
              >
                <span class="visually-hidden"></span>
              </div>
            )}
            {!luckyNumber && showGenerateNumber && (
              <div>
                <button
                  onClick={generateRandomNumber}
                  className="btn btn-lg btn-success btn-generate-number"
                >
                  GENERAR NUMERO
                </button>
              </div>
            )}
            {luckyNumber && (
              <>
                <a
                  href={`https://wa.me/+543518037592?text=¡Hola!%20Quiero%20reservar%20mi%20numero%20de%20la%20suerte%20para%20la%20rifa,%20Numero:%20${luckyNumber}`}
                  target="_blank"
                >
                  <button className="btn btn-success btn-book-number">
                    <AiOutlineWhatsApp size={"2.5rem"} />{" "}
                    <span>COMPRAR EL NUMERO {luckyNumber}</span>
                  </button>
                </a>

                <button
                  onClick={generateRandomNumber}
                  className="btn btn-secondary btn-lg btn-try-again"
                >
                  INTENTAR DE NUEVO
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomNumber;
