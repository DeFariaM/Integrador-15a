const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ force: false }).then(() =>
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  })
);

//! WEB SERVER
/* const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    const id = Number(url.split("/").pop());

    if (url.includes("/rickandmorty/character")) {
      getCharById(res, id);
    }
  })
  .listen(PORT, "localhost"); */
