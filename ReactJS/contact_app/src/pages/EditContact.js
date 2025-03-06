import React from "react";

const AddContact = () => {
  return (
    <div className="container mt-3 w-50">
      <h1 className="text-center mb-3">Contact Form</h1>
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <form action="/create" method="post">
              {/* <% if (results.length > 0) { %> <% results.forEach(result => { %>
          <p className="text-danger"><%= result.msg %></p>
          <% }) %> <% } %> */}
              <label for="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value="<%= data.name %>"
                required
              />

              <label for="phone" className="form-label fw-semibold mt-3">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value="<%= data.phone %>"
                required
              />

              <label for="email" className="form-label fw-semibold mt-3">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value="<%= data.email %>"
              />

              <button className="btn btn-primary mt-3" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
