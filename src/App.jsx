import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  renderCount++;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <div className="render-count">renderCount = {renderCount}</div>
        <div>
          description="This is a simple form using react-hook-form. It demonstrates
          how to register inputs and handle form submission."
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("firstName", {
            required: { value: true, message: "First name is required" },
            minLength: { value: 2, message: "First name must be at least 2 characters long" },
            maxLength: { value: 20, message: "First name must be at most 20 characters long" },
          })}
          placeholder="First Name"
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}

        <input
          type="text"
          {...register("lastName", {
            required: { value: true, message: "Last name is required" },
            minLength: { value: 2, message: "Last name must be at least 2 characters long" },
            maxLength: { value: 20, message: "Last name must be at most 20 characters long" },
          })}
          placeholder="Last Name"
        />
        {errors.lastName && (
          <p className="error-message">{errors.lastName.message}</p>
        )}

        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: { value: 8, message: "Password must be at least 8 characters long" },
            maxLength: { value: 20, message: "Password must be at most 20 characters long" },
          })}
          placeholder="Password"
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
