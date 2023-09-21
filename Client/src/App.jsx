//Styles
import "./App.css";
//Components
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Nav from "./components/Nav/Nav.jsx";
import Landing from "./components/Landing/Landing";
import Favorites from "./components/Favorites/Favorites";
//Helpers
import PATHROUTES from "./Helpers/PathRoutes.helper";
//DevTools
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  //characters
  const [characters, setCharacters] = useState([]);

  //onSearch => Nav
  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        const repeat = characters.some((el) => el.id === data.id);
        if (data.id) {
          if (!repeat) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        }
      })
      .catch((error) => window.alert("!No existe un personaje con ese ID!"));
  }

  //onClose => Cards
  function onClose(id) {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  }

  //Seguridad => Login => Form
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "";
  const PASSWORD = "";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //Render del navBar
  const location = useLocation();
  console.log(characters);

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        <Route path="/" element={<Landing login={login} />}></Route>
        <Route
          path={PATHROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path={PATHROUTES.ABOUT} element={<About />}></Route>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}></Route>
        <Route
          path={PATHROUTES.FAVORITES}
          element={<Favorites onClose={onClose} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
