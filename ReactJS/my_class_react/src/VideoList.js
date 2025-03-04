import React, { Component } from "react";

class VideoList extends Component {
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <ul className="list-group">
        <li
          className="list-group-item d-flex align-items-center"
          onClick={() => onVideoSelect(video)}
        >
          <img
            src={video.snippet.thumbnails.default.url}
            className="mx-3"
            alt={video.snippet.title}
            style={{ cursor: "pointer" }}
          />
          {video.snippet.title}
        </li>
      </ul>
    );
  }
}

export default VideoList;
