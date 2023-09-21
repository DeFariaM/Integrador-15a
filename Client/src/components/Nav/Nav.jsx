import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from "./Nav.module.css";

const {links, menuLink, barraSrc} = styles;

const Nav = (props) => {
    const {onSearch} = props;
  return (
    <div>
        <div className={barraSrc}>
          <SearchBar onSearch={onSearch} />
        </div>
    </div>
  )
}

export default Nav