import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import Rick from "../assets/detail.png";
const { dataWrap, imgWrap, infoWrap, h2, img, imgRick, imgRickW } = styles;

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={infoWrap}>
      <div className={imgRickW}>
        <img className={imgRick} src={Rick} />
      </div>
      <div className={dataWrap}>
        <h2 className={h2}>Name | {character?.name}</h2>
        <h2 className={h2}>Status | {character?.status}</h2>
        <h2 className={h2}>Specie | {character?.species}</h2>
        <h2 className={h2}>Gender | {character?.gender}</h2>
        <h2 className={h2}>Origin | {character.origin?.name}</h2>
        <h2 className={h2}>Location | {character.location?.name}</h2>
      </div>
      <div className={imgWrap}>
        <img src={character?.image} alt="" className={img} />
      </div>
    </div>
  );
};

export default Detail;
