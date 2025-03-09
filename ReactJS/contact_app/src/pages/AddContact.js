import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { addContact } from "../services/ServiceContact";

const AddContact = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (contact) => {
    const response = await addContact(contact);
    if (response) {
      navigate("/contact");
    }
  };

  return (
    <div className="container">
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
                className="form-control"
                id="name"
                required
                {...register("name", { required: true })}
              />
            </div>

            <div className="m-3">
              <label htmlFor="phone" className="form-label fw-semibold">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                required
                {...register("phone", { required: true })}
              />
            </div>

            <div className="m-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email", { required: false })}
              />
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
