import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { fetchContact, deleteContact } from "../services/ServiceContact";

const Contact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const contacts = await fetchContact();
    setContact(contacts);
  };

  const handleDelete = async (name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ?`);
    if (confirmDelete) {
      await deleteContact(name);
      getContact();
    }
  };

  return (
    <div className="container">
      <h1 className="my-3">This is Contact Page</h1>
      <NavLink to={"/contact/add"} className="btn btn-success" role="button">
        Add Contact
      </NavLink>
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
                  <NavLink
                    to={`/contact/edit/${data.name}`}
                    className="btn btn-warning"
                    role="button"
                  >
                    Edit
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.name)}
                  >
                    Delete
                  </button>
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
    </div>
  );
};

export default Contact;
