import React, { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";
import bg1 from "../assets/inicio3.png";

const {
  contenedor,
  input,
  btn,
  label,
  error,
  contenedorInput,
  imgLogin,
  wrapperAll,
  imgW,
} = styles;

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
    <div className={wrapperAll}>
      <div className={contenedor}>
        <div className={imgW}>
          <img src={bg1} className={imgLogin}></img>
        </div>
        <form>
          <div className={contenedorInput}>
            <label className={label} htmlFor="email">
              Email:
            </label>

            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={input}
            />
            <br />
            <span className={errors.email ? error : null}>{errors.email}</span>
          </div>
          <div className={contenedorInput}>
            <label className={label} htmlFor="password">
              Password:
            </label>

            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className={input}
            />
            <br />
            <span className={errors.password ? error : null}>
              {errors.password}
            </span>
          </div>
          <button className={btn} type="submit" onClick={handleSubmit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
