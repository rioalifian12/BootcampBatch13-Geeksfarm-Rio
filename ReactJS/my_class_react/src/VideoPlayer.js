import React, { Component } from "react";
import axios from "axios";
import VideoList from "./VideoList";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", data: [], selectedVideo: null };

    this.handleChange = this.handleChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async onSearchSubmit(event) {
    event.preventDefault();
    try {
      const result = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.state.value}&key=AIzaSyDxtZQO-Ooruy3bGnjJcORvNWDplQqHX1M`
      );
      this.setState({
        data: result.data.items,
        selectedVideo: result.data.items[0],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { data, selectedVideo } = this.state;
    const mainVideo = selectedVideo || (data.length > 0 ? data[0] : null);

    return (
      <div className="mt-3">
        <div className="card">
          <h5 className="card-header">Video Search</h5>
          <div className="card-body">
            <div className="mb-3">
              <form onSubmit={this.onSearchSubmit}>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <input
                  type="submit"
                  className="btn btn-primary mt-3"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {data.length > 0 && (
            <div className="col-md-8">
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${mainVideo.id.videoId}`}
                  title={mainVideo.snippet.title}
                  allowFullScreen
                ></iframe>
              </div>

              <div className="card mt-3">
                <div className="card-body">
                  <h3 className="card-title">{mainVideo.snippet.title}</h3>
                  <p className="card-text">{mainVideo.snippet.description}</p>
                </div>
              </div>
            </div>
          )}

          <div className="col-md-4">
            {data.map((video, index) => (
              <VideoList
                key={index}
                video={video}
                onVideoSelect={this.onVideoSelect}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
