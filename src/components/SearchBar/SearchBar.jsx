import styles from "./SearchBar.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PATHROUTES from "../../Helpers/PathRoutes.helper";
let { search, srcBtn, links, linksCont, inputCont } = styles;

export default function SearchBar(props) {
  const { onSearch } = props;

  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div>
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
