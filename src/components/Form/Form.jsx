import React, { useState } from "react";
import validation from "./validation";

export const Form = (props) => {
  const { login } = props;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Log In
      </button>
    </form>
  );
};

export default Form;
