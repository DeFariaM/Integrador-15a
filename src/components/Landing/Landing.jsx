import React from "react";
import Rick from "../assets/Rick_and_Morty.svg";
import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";
import PATHROUTES from "../../Helpers/PathRoutes.helper";
import Form from "../Form/Form";

const { imgIndex, imgContainer, links, btnHome, contains } = styles;

const Landing = (props) => {
  const { login } = props;
  return (
    <div className={contains}>
      <div>
        <img src={Rick} alt="logo Rick y Morty" className={imgIndex} />
      </div>
      <Form login={login} />
    </div>
  );
};

export default Landing;
