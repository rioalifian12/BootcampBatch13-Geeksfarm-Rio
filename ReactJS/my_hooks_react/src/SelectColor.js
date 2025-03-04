import React, { useState } from "react";

const SelectColor = () => {
  // Create a function with Hooks
  const [color, setColor] = useState("red");

  return (
    <div className="my-2">
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </div>
  );
};

export default SelectColor;
