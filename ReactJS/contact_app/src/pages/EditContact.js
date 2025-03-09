import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { editContact, fetchContactByName } from "../services/ServiceContact";

const EditContact = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const getContactByName = async () => {
      const contact = await fetchContactByName(name);
      if (contact) {
        setValue("name", contact.name);
        setValue("phone", contact.phone);
        setValue("email", contact.email);
      } else {
        console.log("Contact not found");
        navigate("/contact");
      }
    };
    getContactByName();
  }, [name, setValue, navigate]);

  const onSubmit = async (data) => {
    const updatedData = { ...data, oldName: name };
    const result = await editContact(updatedData);

    if (result) {
      navigate("/contact");
    }
  };

  return (
    <div className="container mt-3 w-50">
      <h1 className="text-center mb-3">Edit Contact</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", { required: true })}
              required
            />

            <label htmlFor="phone" className="form-label fw-semibold mt-3">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              {...register("phone", { required: true })}
              required
            />

            <label htmlFor="email" className="form-label fw-semibold mt-3">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email")}
            />

            <button className="btn btn-primary mt-3" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
