import { faker } from "@faker-js/faker";

function Comment() {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <span className="avatar">
          <img src={faker.image.avatar()} alt={faker.person.firstName()}></img>
        </span>
        <div className="content">
          <span className="author">{faker.person.firstName()}</span>
          <div className="metadata">
            <span className="date">{faker.date.recent().toLocaleString()}</span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
          <div className="actions">
            <button className="reply">Reply</button>
          </div>
        </div>
      </div>
      <div className="comment">
        <span className="avatar">
          <img src={faker.image.avatar()} alt={faker.person.firstName()}></img>
        </span>
        <div className="content">
          <span className="author">{faker.person.firstName()}</span>
          <div className="metadata">
            <span className="date">{faker.date.recent().toLocaleString()}</span>
          </div>
          <div className="text">
            <span>{faker.lorem.sentence()}</span>
          </div>
          <div className="actions">
            <button className="reply">Reply</button>
          </div>
        </div>
      </div>
      <div className="comment">
        <span className="avatar">
          <img src={faker.image.avatar()} alt={faker.person.firstName()}></img>
        </span>
        <div className="content">
          <span className="author">{faker.person.firstName()}</span>
          <div className="metadata">
            <span className="date">{faker.date.recent().toLocaleString()}</span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
          <div className="actions">
            <button className="reply">Reply</button>
          </div>
        </div>
      </div>
      <div className="comment">
        <span className="avatar">
          <img src={faker.image.avatar()} alt={faker.person.firstName()}></img>
        </span>
        <div className="content">
          <span className="author">{faker.person.firstName()}</span>
          <div className="metadata">
            <span className="date">{faker.date.recent().toLocaleString()}</span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
          <div className="actions">
            <button className="reply">Reply</button>
          </div>
        </div>
      </div>
      <div className="comment">
        <span className="avatar">
          <img src={faker.image.avatar()} alt={faker.person.firstName()}></img>
        </span>
        <div className="content">
          <span className="author">{faker.person.firstName()}</span>
          <div className="metadata">
            <span className="date">{faker.date.recent().toLocaleString()}</span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
          <div className="actions">
            <button className="reply">Reply</button>
          </div>
        </div>
      </div>
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
