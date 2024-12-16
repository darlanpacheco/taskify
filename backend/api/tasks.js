async function tasksApi(app, db) {
  app.get("/api/tasks/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const data = await db.getTasksByUserId(id);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  app.post("/api/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    try {
      const data = await db.insertTask(id, text);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  app.patch("/api/tasks/done/:id", async (req, res) => {
    const { id } = req.params;
    const { done } = req.body;

    try {
      const data = await db.updateTaskDone(id, done);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  app.patch("/api/tasks/text/:id", async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    try {
      const data = await db.updateTaskText(id, text);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  app.delete("/api/tasks/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const data = await db.deleteTask(id);
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });
}

module.exports = tasksApi;
