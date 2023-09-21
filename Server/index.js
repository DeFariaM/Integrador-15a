const http = require("http");
const characters = require("./utils/data");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
      const id = Number(url.split("/").pop());
      const character = characters.find((char) => {
        return char.id === id;
      });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    }
  })
  .listen(PORT, "localhost");
