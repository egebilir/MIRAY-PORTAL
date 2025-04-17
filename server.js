const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const INTERNET_REDIRECT_URL = "172.10.3.1";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/login", (req, res) => {
  const { cabin, name, surname } = req.body;
  if (cabin && name && surname) {
    res.redirect("/portal");
  } else {
    res.send('Please enter all required details. <a href="/">Go Back</a>');
  }
});

app.get("/portal", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "portal.html"));
});

app.get("/internet", (req, res) => {
  res.redirect(INTERNET_REDIRECT_URL);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
