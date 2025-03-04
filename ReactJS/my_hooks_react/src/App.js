import React from "react";
import { Provider } from "react-redux";
import Nav from "./Nav";
import Comment from "./Comment";
import Clock from "./Clock";
import SelectColor from "./SelectColor";
import Car from "./Car";
import Counter from "./ReduxApp/Counter";
import store from "./ReduxApp/store";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="mx-5 my-2">
        <SelectColor />
        <Car />
        <Clock />
        <Provider store={store}>
          <Counter />
        </Provider>
        <Comment />
      </div>
    </div>
  );
};

export default App;
