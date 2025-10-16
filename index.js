// server.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());



// Test route
app.get("/", (req, res) => {
  res.send("Hello from the backend! 🚀");
});

// Example API route
app.get("/api/message", (req, res) => {
  res.json({ message: "This is data from the new backend!" });
});

// New API route to fetch all courses from the database
app.get("/api/courses", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM courses");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch courses from database" });
  }
});

// Start server
app.listen(PORT, () => {http://localhost:${PORT}
  console.log(`Backend running on `);
});
