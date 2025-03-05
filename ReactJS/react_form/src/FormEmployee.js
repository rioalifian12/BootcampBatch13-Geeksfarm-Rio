import { useState } from "react";
import { useForm } from "react-hook-form";

const FormEmployee = () => {
  const [employee, setEmployee] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setEmployee(data);
    console.log(data);
  };

  return (
    <div className="container mt-3 w-25">
      <h1 className="text-center">Employee Form</h1>
      <div className="card">
        <div className="card-body m-3">
          <div className="mb-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">First Name</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    {...register("firstName")}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">Last Name</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    {...register("lastName")}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">Employed</label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    {...register("employed")}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">Education</label>
                <div className="col-sm-8">
                  <select className="form-select" {...register("education")}>
                    <option>-- Select --</option>
                    <option value="sd">SD</option>
                    <option value="smp">SMP</option>
                    <option value="sma">SMA</option>
                    <option value="s1">S1</option>
                    <option value="s2">S2</option>
                    <option value="s3">S3</option>
                  </select>
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label pt-0">
                  Expertise
                </label>
                <div className="col-sm-8">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="html"
                      value="html"
                      {...register("expertise")}
                    />
                    <label className="form-check-label">HTML</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="css"
                      value="css"
                      {...register("expertise")}
                    />
                    <label className="form-check-label">CSS</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="javascript"
                      value="javascript"
                      {...register("expertise")}
                    />
                    <label className="form-check-label">Javascript</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="nodejs"
                      value="nodejs"
                      {...register("expertise")}
                    />
                    <label className="form-check-label">NodeJS</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="reactjs"
                      value="reactjs"
                      {...register("expertise")}
                    />
                    <label className="form-check-label">ReactJS</label>
                  </div>
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label pt-0">
                  Prefered Technology
                </label>
                <div className="col-sm-8">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="frontend"
                      {...register("technology")}
                    />
                    <label className="form-check-label">Frontend</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="backend"
                      {...register("technology")}
                    />
                    <label className="form-check-label">Backend</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="fullstack"
                      {...register("technology")}
                    />
                    <label className="form-check-label">Fullstack</label>
                  </div>
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label pt-0">Notes</label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    {...register("notes")}
                  ></textarea>
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-sm-12 text-center">
                  <input
                    type="submit"
                    className="btn btn-primary me-2"
                    value="Submit"
                  />
                  <input
                    type="reset"
                    className="btn btn-secondary"
                    value="Reset"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="w-100 bg-secondary-subtle p-4">
                  <pre>{JSON.stringify(employee, null, 2)}</pre>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEmployee;
