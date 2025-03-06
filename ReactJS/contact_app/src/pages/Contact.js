import React from "react";
import { NavLink } from "react-router";
import ContactList from "../components/ContactList";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="my-3">This is Contact Page</h1>
      <NavLink to={"/contact/add"} className="btn btn-success" role="button">
        Add Contact
      </NavLink>
      <ContactList />
    </div>
  );
};

export default Contact;
