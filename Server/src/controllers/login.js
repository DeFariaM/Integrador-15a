const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (email && password) {
      const user = await User.findOne({ where: { email: email } });

      if (!user)
        return res.status(404).json({ error: "Usuario no encontrado" });
      if (user.password !== password) {
        return res.status(403).json({ error: "Contraseña incorrecta" });
      }

      return res.json({ access: true });
    }

    return res.status(400).json({ error: "Faltan datos de usuario" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = login;
