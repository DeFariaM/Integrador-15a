const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").pop();
      getCharById(res, id);
    }
  })
  .listen(PORT, "localhost");
