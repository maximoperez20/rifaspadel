import React, { useState, useEffect } from "react";
import "./NumberGrid.css";
import tennisImage from "./../assets/tennis.png";

const numeroMarcadosPorNostros = [];
function NumberGrid(params) {
  useEffect(() => {
    let savedNumbers = localStorage.getItem("numberList");
    if (savedNumbers) {
      console.log("Saved numbers: ", savedNumbers);
      setEnteredNumbers(savedNumbers);
      const numbers = savedNumbers.split(",").map(Number);
      setMarkedNumbers(numbers);
    }
  }, []);

  const [enteredNumbers, setEnteredNumbers] = useState();
  const [markedNumbers, setMarkedNumbers] = useState([]);
  const [duplicatesArray, setDuplicatesArray] = useState([]);
  // Generate 10 rows and 10 columns
  const numRows = 10;
  const numCols = 10;

  // Create an array to store the table cells
  const cells = [];

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // Calculate the number to display
      const number = i * numCols + j + 1;

      // Create a table cell and add it to the array
      if (
        markedNumbers.includes(number) ||
        numeroMarcadosPorNostros.includes(number)
      ) {
        cells.push(
          <td key={`${i}-${j}`}>
            <img src={tennisImage} alt="X" className="tennis-ball"/>
          </td>
        );
      } else {
        cells.push(<td key={`${i}-${j}`}>{number}</td>);
      }
    }
  }

  // Create an array to store the table rows
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    // Create a table row and add it to the array
    rows.push(<tr key={i}>{cells.slice(i * numCols, (i + 1) * numCols)}</tr>);
  }

  function duplic() {
    var myArray = [];
    for (let i = 0; i < markedNumbers.length; i++) {
      for (let j = i + 1; j < markedNumbers.length; j++) {
        if (markedNumbers[i] === markedNumbers[j]) {
          myArray.push(markedNumbers[i]);
          console.log("array de duplicados", myArray);
        }
      }
    }

    return myArray;
  }

  const handleTextAreaChange = (e) => {
    let textAreaContent = e.target.value;
    setEnteredNumbers(textAreaContent);
  };
  const handleSubmitNumbers = () => {
    const numbers = enteredNumbers.split(",").map(Number);
    setMarkedNumbers(numbers);
    localStorage.setItem("numberList", enteredNumbers);
  };

  const cleanNumberList = () => {
    let confirmationText = prompt("escribe LIMPIAR para continuar");
    console.log("conf text", confirmationText);
    if (confirmationText.toLowerCase() == "limpiar") {
      setEnteredNumbers("");
      setMarkedNumbers([]);
      localStorage.removeItem("numberList");
    }
  };
  return (
    <div className="numbers-grid">
      <div className="input-numbers">
        <h3>Ingresar Numeros</h3>
        <textarea
          className="text-area-input"
          onChange={handleTextAreaChange}
          value={enteredNumbers}
        ></textarea>
        <br />
        <button
          className="btn btn-primary btn-lg button-submit-numbers"
          onClick={handleSubmitNumbers}
        >
          Cargar Numeros
        </button>
        <button
          className="btn btn-secondary btn-block button-clean-numbers"
          onClick={cleanNumberList}
        >
          Limpiar
        </button>
      </div>
      <hr />
      <table className="numbers-grid-table">
        <tbody>{rows}</tbody>
      </table>

      <p>
        Numeros vendidos: <b>{markedNumbers.length}</b>
      </p>

      <p>
        {markedNumbers.map((elem, index) => (
          <> {elem} -</>
        ))}

        {
          <>
            <p className="alert">NUMEROS DUPLICADOS</p>
            {duplic().map((elem, index) => (
              <span key={index}>{elem} - </span>
            ))}
          </>
        }
      </p>
    </div>
  );
}

export default NumberGrid;
