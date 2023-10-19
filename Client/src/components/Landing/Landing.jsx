import React from "react";
import styles from "./Landing.module.css";
import Form from "../Form/Form";

const { contains } = styles;

const Landing = (props) => {
  const { login } = props;
  return (
    <div className={contains}>
      <h1>¡Bienvenidos al buscador de Rick y Morty!</h1>
      <Form login={login} />
    </div>
  );
};

export default Landing;
