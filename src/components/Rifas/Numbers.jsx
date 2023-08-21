import { React, useState } from "react";
import tennisImage from "./../../assets/tennis.png";
import "./Numbers.css";

function Numbers() {
  const [enteredNumbers, setEnteredNumbers] = useState();
  const [markedNumbers, setMarkedNumbers] = useState([1, 2]);
  const [duplicatesArray, setDuplicatesArray] = useState([]);

  const buyNumber = (chosenNumber) => {
    window.open(
      "https://wa.me/+543518037592?text=¡Hola! Me encuentro en la sección de rifas de la página web. Deseo comprar el número: " +
        chosenNumber,
      "_blank"
    );
  };
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
      if (markedNumbers.includes(number)) {
        cells.push(
          <td key={`${i}-${j}`} className="unavailable">
            <img src={tennisImage} alt="X" className="tennis-ball" />
          </td>
        );
      } else {
        cells.push(
          <td
            key={`${i}-${j}`}
            onClick={() => {
              buyNumber(number);
            }}
          >
            {number}
          </td>
        );
      }
    }
  }
  // Create an array to store the table rows
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    // Create a table row and add it to the array
    rows.push(<tr key={i}>{cells.slice(i * numCols, (i + 1) * numCols)}</tr>);
  }
  return (
    <table className="numbers-grid-table">
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Numbers;
