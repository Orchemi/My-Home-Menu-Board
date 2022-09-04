import { Link } from "react-router-dom";

function RandomDice() {
  return (
    <span id="diceContainer">
      <Link to="/">
        <img src="img/dice.png" alt="random dice" id="randomDice" />
      </Link>
    </span>
  );
}

export default RandomDice;
