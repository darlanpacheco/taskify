const express = require("express");
const cors = require("cors");

const usersDb = require("./db/users");
const tasksDb = require("./db/tasks");
const usersApi = require("./api/users");
const loginApi = require("./api/login");
const tasksApi = require("./api/tasks");
const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

usersApi(app, usersDb);
loginApi(app, usersDb);
tasksApi(app, tasksDb);

app.all("*", (_, res) => {
  res.status(404).json({ message: "Url not allowed" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
