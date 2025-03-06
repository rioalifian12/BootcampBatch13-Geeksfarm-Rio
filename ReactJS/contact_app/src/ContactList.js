import React from "react";

const ContactList = () => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td className="d-flex gap-2">
        <a
          className="btn btn-primary"
          href="contact/detail/<%= contact.name %>"
          role="button"
        >
          Detail
        </a>
        <a
          className="btn btn-warning"
          href="contact/edit/<%= contact.name %>"
          role="button"
        >
          Edit
        </a>
        <form action="/delete" method="post">
          <input
            type="hidden"
            id="delete"
            name="delete"
            value="<%= contact.name %>"
          />
          <button className="btn btn-danger" type="submit">
            Delete
          </button>
        </form>
      </td>
    </tr>
  );
};
