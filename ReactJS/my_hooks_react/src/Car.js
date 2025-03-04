import React, { useState } from "react";

const Car = () => {
  // Create a function with Hooks
  // value state menggunakan object
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <div>
      <div className="my-2">
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button type="button" onClick={updateColor}>
          Blue
        </button>
      </div>
    </div>
  );
};

export default Car;
