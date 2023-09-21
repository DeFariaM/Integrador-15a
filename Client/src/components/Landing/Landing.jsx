import React from "react";
import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";
import PATHROUTES from "../../Helpers/PathRoutes.helper";
import Form from "../Form/Form";

const { imgIndex, imgContainer, links, btnHome, contains } = styles;

const Landing = (props) => {
  const { login } = props;
  return (
    <div className={contains}>
      <Form login={login} />
    </div>
  );
};

export default Landing;
