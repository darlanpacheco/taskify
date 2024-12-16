const bcrypt = require("bcrypt");

async function usersApi(app, db) {
  app.get("/api/users", async (_, res) => {
    try {
      const data = await db.getUsers();
      console.log(data);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const data = await db.getUserById(id);
      console.log(data);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  app.post("/api/users", async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const data = await db.insertUser(name, email, hashedPassword);
      console.log(data);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  app.patch("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
      const data = await db.updateUser(id, name, email, password);
      console.log(data);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  app.delete("/api/users/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const data = await db.deleteUser(id);
      console.log(data);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });
}

module.exports = usersApi;
