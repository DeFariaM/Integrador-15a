import React, { useState } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "../Favorites/Favorites.module.css";
const { select, selectWrapper } = styles;

const Favorites = (props) => {
  const { myFavorites, onClose } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div className={selectWrapper}>
        <select className={select} onChange={handleOrder} name="" id="">
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select className={select} onChange={handleFilter} name="" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
