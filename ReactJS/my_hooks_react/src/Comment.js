import { generateComments } from "./generateComment";

function Comment() {
  const comments = generateComments();

  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>

      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <span className="avatar">
            <img src={comment.avatar} alt={comment.author}></img>
          </span>
          <div className="content">
            <span className="author">{comment.author}</span>
            <div className="metadata">
              <span className="date">{comment.date}</span>
            </div>
            <div className="text">{comment.text}</div>
            <div className="actions">
              <button className="reply">Reply</button>
            </div>
          </div>
        </div>
      ))}

      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
        </div>
        <div className="ui blue labeled submit icon button">
          <i className="icon edit"></i> Add Reply
        </div>
      </form>
    </div>
  );
}

export default Comment;
