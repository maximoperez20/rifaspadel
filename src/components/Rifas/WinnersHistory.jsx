import React from "react";
import "./WinnersHistory.css";
const historyWinners = [
  { rifaNumber: 1, winnerNumber: 70 },
  { rifaNumber: 2, winnerNumber: 45 },
  { rifaNumber: 3, winnerNumber: 88 },
  { rifaNumber: 4, winnerNumber: 19 },
  { rifaNumber: 5, winnerNumber: 52 },
  { rifaNumber: 6, winnerNumber: 3 },
  { rifaNumber: 7, winnerNumber: 91 },
  { rifaNumber: 8, winnerNumber: 76 },
  { rifaNumber: 9, winnerNumber: 13 },
  { rifaNumber: 10, winnerNumber: 64 },
  { rifaNumber: 11, winnerNumber: 7 },
  { rifaNumber: 12, winnerNumber: 97 },
  { rifaNumber: 13, winnerNumber: 35 },
  { rifaNumber: 14, winnerNumber: 84 },
];

function WinnersHistory() {
  return (
    <div className="winners-history__container">
      <h1 className="text-center">HISTORIAL </h1>
      <table class="table align-middle">
        <thead>
          <tr>
            <th>NUMERO DE RIFA</th>
            <th>NUMERO GANADOR</th>
          </tr>
        </thead>
        <tbody>
          {historyWinners.map((item) => (
            <tr>
              <td>{item.rifaNumber}</td>
              <td>{item.rifaNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WinnersHistory;
