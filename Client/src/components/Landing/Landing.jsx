import React from "react";
import styles from "./Landing.module.css";
import Form from "../Form/Form";

const { contains } = styles;

const Landing = (props) => {
  const { login } = props;
  return (
    <div className={contains}>
      <Form login={login} />
    </div>
  );
};

export default Landing;
