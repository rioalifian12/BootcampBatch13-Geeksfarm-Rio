import React, { Component } from "react";
import axios from "axios";
import ImageList from "./ImageList";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", data: [], height: 0 };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // handleSubmit(event) {
  //   alert("A name was submitted " + this.state.value);
  //   event.preventDefault();
  // }

  async onSearchSubmit(event) {
    event.preventDefault();
    const result = await axios.get(
      `https://api.unsplash.com/search/photos?query=${this.state.value}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_ACCESS}`,
        },
      }
    );
    this.setState({ data: result.data.results });
  }

  render() {
    console.log(this.state.height);

    return (
      <div className="mt-3">
        <div className="card">
          <h5 className="card-header">Image Search</h5>
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
        <div style={{ columns: 4 }}>
          {this.state.data.map((img) => (
            <ImageList
              key={img.id}
              urlImage={img.urls.regular}
              alt={img.alt_description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Input;
