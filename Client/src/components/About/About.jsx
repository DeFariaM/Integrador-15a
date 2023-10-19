import React from "react";
import styles from "./About.module.css";
import AboutImg from "../assets/inicio2.png";

const { miP } = styles;

const About = () => {
  return (
    <div>
      <h1>¡Hola!</h1>
      <h3>
        Soy María De Faría, full stack developer y entusiasta del increíble
        mundo de la programación, gracias por estar aquí!
      </h3>
      <img src={AboutImg} alt="rick-and-morty" className={miP} />
    </div>
  );
};

export default About;
