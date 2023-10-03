const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    let { data } = await axios(URL + id);
    const { name, gender, species, origin, image, status, location } = data;
    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
      location,
    };
    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = getCharById;

//! PROMESAS
/*   axios(URL + id)
  .then(({ data }) => {
    const { name, gender, species, origin, image, status, location } = data;
    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
      location,
    };

    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  })
  .catch((err) => {
    res.status(500).send(err.message);
  }); */

//! WEB SERVER

/* const axios = require("axios");

function getCharById(res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const { name, gender, species, origin, image, status, location } = data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
        location,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      return res.end(err.message);
    });
}

module.exports = getCharById; */
