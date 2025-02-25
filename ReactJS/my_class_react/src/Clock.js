import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.thick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  thick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Current Time</h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
