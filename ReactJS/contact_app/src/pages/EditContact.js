import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { editContact, fetchContactByName } from "../services/ServiceContact";

const EditContact = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const getContactByName = async () => {
      try {
        const contact = await fetchContactByName(name);
        if (contact) {
          setValue("name", contact.name);
          setValue("phone", contact.phone);
          setValue("email", contact.email);
        } else {
          console.log("Contact not found");
          navigate("/contact");
        }
      } catch (error) {
        console.log(error.response.data.errors);
        navigate("/contact");
      }
    };
    getContactByName();
  }, [name, setValue, navigate]);

  const onSubmit = async (data) => {
    try {
      const updatedData = { ...data, oldName: name };
      await editContact(updatedData);
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
      <h1 className="my-3">Edit Contact</h1>
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

            {getErrorMessage("general") && (
              <div className="alert alert-danger">
                {getErrorMessage("general")}
              </div>
            )}

            <button className="btn btn-primary m-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
