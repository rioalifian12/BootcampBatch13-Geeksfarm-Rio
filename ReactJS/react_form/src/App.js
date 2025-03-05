import React from "react";
import Nav from "./Nav";
import FormEmployee from "./FormEmployee";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="mx-5 my-2">
        <FormEmployee />
      </div>
    </div>
  );
};

export default App;
