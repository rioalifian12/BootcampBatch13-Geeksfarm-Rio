import React, { Component } from "react";
import Nav from "./Nav";
import Comment from "./Comment";
import { generateComments } from "./generateComment";
import Clock from "./Clock";
import Counting from "./buttonClick";
import Input from "./Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: generateComments(5),
    };
  }

  render() {
    const message = "Hi there!";

    return (
      <div>
        <Nav />
        <div>
          <h1>{message}</h1>
          {/* <input type="number" min={5} style={{ border: "3px solid red" }} />
        <h1>{new Date().toLocaleTimeString()}</h1> */}
          <Counting />
          <Clock />
          <Input />
          <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            {this.state.comments.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
