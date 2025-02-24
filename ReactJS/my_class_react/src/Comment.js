import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({ like: prevState.like + 1 }));
  };

  render() {
    const { author, avatar, date, text } = this.props;
    return (
      <div className="comment">
        <span className="avatar">
          <img src={avatar} alt={author} />
        </span>
        <div className="content">
          <span className="author">{author}</span>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{text}</div>
          <span className="metadata">{this.state.like} Likes</span>
          <div className="actions">
            <button className="like" onClick={this.handleLike}>
              Like
            </button>
            <button className="reply">Reply</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
