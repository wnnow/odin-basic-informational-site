const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");
  res.sendFile(filePath);
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "public", "about.html");
  res.sendFile(filePath);
});

app.get("/contact", (req, res) => {
  const filePath = path.join(__dirname, "public", "contact-me.html");
  res.sendFile(filePath);
});

app.get("*", (req, res) => {
  const filePath = path.join(__dirname, "public", "404.html");
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
