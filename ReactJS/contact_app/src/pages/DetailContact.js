import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { fetchContactByName } from "../services/ServiceContact";

const DetailContact = () => {
  const [contactDetail, setContactDetail] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getContactByName = async () => {
      const contact = await fetchContactByName(name);
      if (contact) {
        setContactDetail(contact);
      } else {
        console.log("Contact not found");
        navigate("/contact");
      }
    };
    getContactByName();
  }, [name, setContactDetail, navigate]);

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
      <NavLink to={"/contact"} className="btn btn-primary" role="button">
        Back
      </NavLink>
    </div>
  );
};

export default DetailContact;
