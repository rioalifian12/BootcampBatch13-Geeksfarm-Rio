import React, { Component } from "react";

class VideoList extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center">
          <img src={this.props.url} className="mx-3" alt={this.props.title} />
          {this.props.title}
        </li>
      </ul>
    );
  }
}

export default VideoList;
