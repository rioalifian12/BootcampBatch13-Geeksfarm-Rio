import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router";
import { fetchContactByName } from "../services/ServiceContact";

const DetailContact = () => {
  const [contactDetail, setContactDetail] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getContactByName(name);
  }, [name]);

  //   fetch contact by name
  const getContactByName = async (name) => {
    const contact = await fetchContactByName(name);
    setContactDetail(contact);
  };

  return (
    <div className="container">
      <h1 className="my-3">Detail Contact Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{contactDetail.name}</td>
            <td>{contactDetail.phone}</td>
            <td>{contactDetail.email}</td>
          </tr>
        </tbody>
      </table>
      <NavLink
        to={"/contact"}
        className="btn btn-primary"
        role="button"
        style={{ width: "150px" }}
      >
        Back
      </NavLink>
    </div>
  );
};

export default DetailContact;
