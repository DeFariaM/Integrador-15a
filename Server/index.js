const http = require("http");
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
  .listen(PORT, "localhost");
