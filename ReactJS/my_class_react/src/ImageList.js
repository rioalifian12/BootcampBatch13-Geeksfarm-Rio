import React, { Component, createRef } from "react";

class Input extends Component {
  imageRef = createRef();
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  componentDidMount() {
    this.setState({ height: this.imageRef.current.clientHeight });
  }

  render() {
    return (
      <div
        className="mb-4"
        style={{
          height: this.height,
        }}
      >
        <img
          src={this.props.urlImage}
          alt={this.props.alt}
          className="img-fluid"
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default Input;
