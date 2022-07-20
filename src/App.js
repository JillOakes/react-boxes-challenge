import React from "react";
import boxes from "./boxes";
import Box from "./Box";

function App() {
  // Initialize state with the default value of the array pulled in from boxes.js
  const [squares, setSquares] = React.useState(boxes);

  // This is the imperative way of writing it, next will be the declarative way of writing it.
  function toggle(id) {
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  // Map over the state array and display each one as a square
  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  return (
    <div className="App">
      <main>{squareElements}</main>
    </div>
  );
}

export default App;
