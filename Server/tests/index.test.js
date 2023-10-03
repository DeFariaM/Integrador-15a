const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de rutas", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      return await agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Responde con un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("species");
      expect(body).toHaveProperty("gender");
      expect(body).toHaveProperty("status");
      expect(body).toHaveProperty("origin");
      expect(body).toHaveProperty("image");
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/900").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Ruta de login retorna access: true", async () => {
      const { body } = await agent.get("/rickandmorty/login?email=&password=");
      expect(body.access).toBe(true);
    });

    it("Ruta de login retorna access: false", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=mdf@h.com&password=1234"
      );
      expect(body.access).toBe(false);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: "1", name: "nombre 1" };
    const character2 = { id: "2", name: "nombre 2" };

    it("Devuelve el arreglo enviado por body", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character1);
      expect(body).toContainEqual(character1);
    });

    it("Devuelve el arreglo enviado por body con los dos personajes", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character2);
      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    const character1 = { id: "1", name: "nombre 1" };
    const character2 = { id: "2", name: "nombre 2" };

    it("Devuelve los personajes sin modificar cuando se manda un ID inválido", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/999");
      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });

    it("Elimina correctamente el personaje cuando se manda un ID válido", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/1");
      expect(body).not.toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });
  });
});
