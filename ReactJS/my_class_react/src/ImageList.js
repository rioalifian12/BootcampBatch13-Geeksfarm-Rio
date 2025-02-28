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
    console.log(this.imageRef);

    return (
      <div
        style={{
          height: this.height,
        }}
      >
        <img
          src={this.props.urlImage}
          alt={this.props.alt}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default Input;
