const bcrypt = require("bcrypt");

function loginApi(app, db) {
  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const data = await db.getUserByEmail(email);
      const user = data[0];

      if (user) {
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
          console.log(`Logged in [${user.name}, ${user.email}].`);
          res.json({
            id: user.id,
            name: user.name,
            email: user.email,
          });
        } else {
          res.json({ error: "Incorrect password." });
        }
      } else {
        res.json({ error: "Incorrect email." });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  });
}

module.exports = loginApi;
