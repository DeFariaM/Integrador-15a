//actions
import { addFav, removeFav } from "../../redux/actions";
//hooks/devTools
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
//styles
import styles from "./Card.module.css";
const { btn, images, link } = styles;

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const location = useLocation();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite} className={btn}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={btn}>
          ​🤍​
        </button>
      )}
      <div>
        {location.pathname !== "/favorites" && (
          <button onClick={() => onClose(id)} className={btn}>
            <strong>X</strong>
          </button>
        )}
      </div>
      <NavLink to={`/detail/${id}`} className={link}>
        {" "}
        <h2>{name}</h2>
      </NavLink>

      <div>
        <img className={images} src={image} alt="" />
      </div>
      <div>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
