const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    await Favorite.destroy({ where: { id: id } });
    const allFavs = await Favorite.findAll();

    return res.json(allFavs);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = deleteFav;
