import React from "react";
import boxes from "./boxes";
import Box from "./Box";

function App() {
  // Initialize state with the default value of the array pulled in from boxes.js
  const [squares, setSquares] = React.useState(boxes);

  //Toggle function uses setSquares to make a new array, map over each square, check its id against the one
  // we're looking for. If it matches, make a new square there but overwrite the on property.
  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
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
