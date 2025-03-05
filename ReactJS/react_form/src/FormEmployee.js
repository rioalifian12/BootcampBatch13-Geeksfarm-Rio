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
    <div className="container mt-3 w-50">
      <h1 className="text-center">Employee Form</h1>
      <div className="card">
        <div className="card-body m-3">
          <div className="mb-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex mb-3 gap-5">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("firstName")}
                />
              </div>
              <div className="d-flex mb-3 gap-5">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("lastName")}
                />
              </div>
              <div className="d-flex mb-3 gap-5">
                <label>Employed</label>
                <input
                  type="checkbox"
                  value="isEmployed"
                  {...register("employed")}
                />
              </div>

              <div className="d-flex mb-3 gap-5">
                <label>Education</label>
                <select className="form-select" {...register("education")}>
                  <option value="sd">SD</option>
                  <option value="smp">SMP</option>
                  <option value="sma">SMA</option>
                  <option value="s1">S1</option>
                  <option value="s2">S2</option>
                  <option value="s3">S3</option>
                </select>
              </div>

              <div className="d-flex mb-3 gap-5">
                <label>Expertise</label>
                <input
                  type="checkbox"
                  name="html"
                  value="html"
                  {...register("expertise")}
                />
                <label>HTML</label>
                <input
                  type="checkbox"
                  name="css"
                  value="css"
                  {...register("expertise")}
                />
                <label>CSS</label>

                <input
                  type="checkbox"
                  name="javascript"
                  value="javascript"
                  {...register("expertise")}
                />
                <label>Javascript</label>

                <input
                  type="checkbox"
                  name="nodejs"
                  value="nodejs"
                  {...register("expertise")}
                />
                <label>NodeJS</label>

                <input
                  type="checkbox"
                  name="reactjs"
                  value="reactjs"
                  {...register("expertise")}
                />
                <label>ReactJS</label>
              </div>

              <div className="d-flex mb-3 gap-5">
                <label>Prefered Technology</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="frontend"
                    {...register("technology")}
                  />
                  <label>Frontend</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="backend"
                    {...register("technology")}
                  />
                  <label>Backend</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="fullstack"
                    {...register("technology")}
                  />
                  <label>Fullstack</label>
                </div>
              </div>

              <div className="d-flex mb-3 gap-5">
                <label>Notes</label>
                <textarea
                  className="form-control"
                  {...register("notes")}
                ></textarea>
              </div>

              <div className="d-flex mb-3 gap-3 justify-content-center">
                <input
                  type="submit"
                  className="btn btn-primary mt-3"
                  value="Submit"
                />
                <input
                  type="reset"
                  className="btn btn-secondary mt-3"
                  value="Reset"
                />
              </div>
              <div className="w-100 bg-secondary-subtle">
                <p>{JSON.stringify(employee)}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEmployee;
