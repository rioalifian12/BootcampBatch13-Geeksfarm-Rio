import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { addContact } from "../services/ServiceContact";

const AddContact = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const onSubmit = async (contact) => {
    try {
      await addContact(contact);
      navigate("/contact");
    } catch (error) {
      setError(error.response.data.errors);
    }
  };

  const getErrorMessage = (fieldName) => {
    const errorObj = error.find((err) => err.path === fieldName);
    return errorObj ? errorObj.msg : "";
  };

  return (
    <div className="container mt-3 w-50">
      <h1 className="my-3">Add New Contact</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="m-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${
                  getErrorMessage("name") ? "is-invalid" : ""
                }`}
                id="name"
                required
                {...register("name", { required: true })}
              />
              {getErrorMessage("name") && (
                <div className="invalid-feedback">
                  {getErrorMessage("name")}
                </div>
              )}
            </div>

            <div className="m-3">
              <label htmlFor="phone" className="form-label fw-semibold">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className={`form-control ${
                  getErrorMessage("phone") ? "is-invalid" : ""
                }`}
                id="phone"
                required
                {...register("phone", { required: true })}
              />
              {getErrorMessage("phone") && (
                <div className="invalid-feedback">
                  {getErrorMessage("phone")}
                </div>
              )}
            </div>

            <div className="m-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                className={`form-control ${
                  getErrorMessage("email") ? "is-invalid" : ""
                }`}
                id="email"
                {...register("email", { required: false })}
              />
              {getErrorMessage("email") && (
                <div className="invalid-feedback">
                  {getErrorMessage("email")}
                </div>
              )}
            </div>

            <button className="btn btn-primary m-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
