const axios = require("axios");

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

module.exports = getCharById;
