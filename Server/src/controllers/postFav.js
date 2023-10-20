const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  try {
    if (id && name && origin && status && image && species && gender) {
      await Favorite.findOrCreate({
        where: { id, name, origin, status, image, species, gender },
      });
      const allFavs = await Favorite.findAll();
      return res.json(allFavs);
    }

    return res.status(401).send("Faltan datos");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postFav;
