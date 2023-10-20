const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await Favorite.destroy({ where: { id: id } });

      const allFavs = await Favorite.findAll();
      return res.json(allFavs);
    }

    return res.status(500).json({ error: "Faltan datos" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = deleteFav;
