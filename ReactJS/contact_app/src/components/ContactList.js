import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { fetchContact } from "../services/ServiceContact";

const ContactList = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContact();
  }, []);

  //   fetch all contacts
  const getContact = async () => {
    const contacts = await fetchContact();
    setContact(contacts);
  };

  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {contact.length > 0 ? (
          contact.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td className="d-flex gap-2">
                <NavLink
                  to={`/contact/${data.name}`}
                  className="btn btn-primary"
                  role="button"
                >
                  Detail
                </NavLink>
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
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No contacts found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ContactList;
