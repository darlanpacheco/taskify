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

async function getUsers() {
  try {
    return await executeQuery("SELECT * FROM users;", []);
  } catch (err) {
    console.error("Error in getUsers(): ", err.message);
    return { error: "Unable to fetch users." };
  }
}

async function getUserById(id) {
  try {
    return await executeQuery("SELECT * FROM users WHERE id = $1;", [id]);
  } catch (err) {
    console.error("Error in getUserById(): ", err.message);
    return { error: "Unable to fetch user by ID." };
  }
}

async function getUserByEmail(email) {
  try {
    return await executeQuery("SELECT * FROM users WHERE email = $1;", [email]);
  } catch (err) {
    console.error("Error in getUserByEmail(): ", err.message);
    return { error: "Unable to fetch user by email." };
  }
}

async function insertUser(name, email, password) {
  try {
    return await executeQuery(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
      [name, email, password],
    );
  } catch (err) {
    console.error("Error in insertUser(): ", err.message);
    return { error: "Unable to insert user." };
  }
}

async function updateUser(id, name, email, password) {
  try {
    return await executeQuery(
      `UPDATE users
       SET name = $1, email = $2, password = $3
       WHERE id = $4;`,
      [name, email, password, id],
    );
  } catch (err) {
    console.error("Error in updateUser(): ", err.message);
    return { error: "Unable to update user." };
  }
}

async function deleteUser(id) {
  try {
    return await executeQuery(
      `DELETE FROM users
       WHERE id = $1
       RETURNING *;`,
      [id],
    );
  } catch (err) {
    console.error("Error in deleteUser(): ", err.message);
    return { error: "Unable to delete user." };
  }
}

async function createDb() {
  try {
    return await executeQuery(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, password TEXT NOT NULL, created DATE DEFAULT CURRENT_DATE);",
      [],
    );
  } catch (err) {
    console.error("Error in createDb(): ", err.message);
    return { error: "Unable to create database." };
  }
}

async function deleteDb() {
  try {
    return await executeQuery("DROP TABLE users;", []);
  } catch (err) {
    console.error("Error in deleteDb(): ", err.message);
    return { error: "Unable to delete database." };
  }
}

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  insertUser,
  updateUser,
  deleteUser,
  createDb,
  deleteDb,
};
