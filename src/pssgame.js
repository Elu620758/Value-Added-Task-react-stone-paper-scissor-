import React, { useState } from "react";
import "./game.css";

const StonePaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const choices = ["Stone", "Paper", "Scissors"];

  // Function to determine the winner
  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a Tie!";
    }
    if (
      (player === "Stone" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Stone")
    ) {
      return "You Win!";
    }
    return "Computer Wins!";
  };

  // Function to handle player's choice
  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);

    // Random choice for the computer
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];
    setComputerChoice(computer);

    // Determine the result
    const gameResult = determineWinner(choice, computer);
    setResult(gameResult);
  };

  return (
    <div className="game-container">
      <h1>Stone Paper Scissor</h1>
      <h1>Rock, Paper, Scissor Game's Rules</h1>
      <ul style={{listStyleType:'none'}}>
        <li>
          <strong>Rock beats Scissors:</strong> Rock crushes Scissors.
        </li>
        <li>
          <strong>Paper beats Rock:</strong> Paper wraps Rock.
        </li>
        <li>
          <strong>Scissors beats Paper:</strong> Scissors cut Paper.
        </li>
        <li>
          <strong>Same choice:</strong> It's a draw.
        </li>
      </ul>
      <div className="choices">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handlePlayerChoice(choice)}
            className="choice-button"
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="results">
        {playerChoice && (
          <p>
            <strong>Your Choice:</strong> {playerChoice}
          </p>
        )}
        {computerChoice && (
          <p>
            <strong>Computer's Choice:</strong> {computerChoice}
          </p>
        )}
        {result && <h2>{result}</h2>}
      </div>
    </div>
  );
};

export default StonePaperScissors;
