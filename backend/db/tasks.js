const pool = require("./connection");

async function executeQuery(query, params) {
  try {
    const { rows } = await pool.query(query, params);
    return rows;
  } catch (err) {
    console.error("Database query error: ", err.message);
    throw new Error("Database operation failed.");
  }
}

async function getTasksByUserId(userId) {
  try {
    return await executeQuery("SELECT * FROM tasks WHERE user_id = $1;", [
      userId,
    ]);
  } catch (err) {
    console.error("Error in getTasks(): ", err.message);
    return { error: "Unable to fetch tasks." };
  }
}

async function insertTask(userId, text) {
  try {
    return await executeQuery(
      `INSERT INTO tasks (user_id, text) VALUES ($1, $2);`,
      [userId, text],
    );
  } catch (err) {
    console.error("Error in insertTask(): ", err.message);
    return { error: "Unable to insert task." };
  }
}

async function updateTaskDone(id, done) {
  try {
    return await executeQuery(
      `UPDATE tasks
       SET done = $1
       WHERE id = $2;`,
      [done, id],
    );
  } catch (err) {
    console.error("Error in updateTaskDone(): ", err.message);
    return { error: "Unable to update task." };
  }
}

async function updateTaskText(id, text) {
  try {
    return await executeQuery(
      `UPDATE tasks
       SET text = $1
       WHERE id = $2;`,
      [text, id],
    );
  } catch (err) {
    console.error("Error in updateTaskText(): ", err.message);
    return { error: "Unable to update task." };
  }
}

async function deleteTask(id) {
  try {
    return await executeQuery(
      `DELETE FROM tasks
       WHERE id = $1;`,
      [id],
    );
  } catch (err) {
    console.error("Error in deleteTask(): ", err.message);
    return { error: "Unable to delete task." };
  }
}

async function createDb() {
  try {
    return await executeQuery(
      "CREATE TABLE IF NOT EXISTS tasks (id SERIAL PRIMARY KEY, user_id INT NOT NULL, text VARCHAR(255) NOT NULL, done BOOLEAN DEFAULT FALSE, created DATE DEFAULT CURRENT_DATE);",
      [],
    );
  } catch (err) {
    console.error("Error in createDb(): ", err.message);
    return { error: "Unable to create database." };
  }
}

async function deleteDb() {
  try {
    return await executeQuery("DROP TABLE tasks;", []);
  } catch (err) {
    console.error("Error in deleteDb(): ", err.message);
    return { error: "Unable to delete database." };
  }
}

module.exports = {
  getTasksByUserId,
  insertTask,
  updateTaskText,
  updateTaskDone,
  deleteTask,
  createDb,
  deleteDb,
};
