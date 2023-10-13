import styles from "./SearchBar.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PATHROUTES from "../../Helpers/PathRoutes.helper";
import Logo from "../assets/logo.png";
import littleLogo from "../assets/littleLogo.png";
let {
  search,
  srcBtn,
  links,
  linksCont,
  inputCont,
  wrapper,
  logo,
  logoWrap,
  smallLogo,
} = styles;

export default function SearchBar(props) {
  const { onSearch } = props;

  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={wrapper}>
      <div className={logoWrap}>
        <img className={logo} src={Logo} alt="Logo Rick y Morty" />
        <img className={smallLogo} src={littleLogo} />
      </div>
      <div className={linksCont}>
        <NavLink to={PATHROUTES.HOME} className={links}>
          {" "}
          Home{" "}
        </NavLink>

        <NavLink to={PATHROUTES.ABOUT} className={links}>
          {" "}
          About{" "}
        </NavLink>
        <NavLink to={PATHROUTES.FAVORITES} className={links}>
          {" "}
          Favorites{" "}
        </NavLink>
      </div>

      <div className={inputCont}>
        <input
          type="search"
          placeholder="Ingresa el ID"
          onChange={handleChange}
          value={id}
          className={search}
        />
        <button
          onClick={() => {
            onSearch(id);
          }}
          className={srcBtn}>
          Agregar
        </button>
      </div>
    </div>
  );
}
