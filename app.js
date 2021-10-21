require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
require("./config/passport")(passport);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// import models

// routes & controllers
const user = require("./controllers/users");
const text = require("./controllers/text");

app.get("/", (req, res) => {
  res.json({
    name: "Type Time API",
    message: "The quick brown fox jumped over the lazy dog",
  });
});

app.use("/users", user);
app.use("/text", text);

// Another way to do the exact same thing
// app.use("/customers", require("./controllers/customers"));

const PORT = process.env.PORT || 8000;

// listen to port
app.listen(PORT, () => console.log(`Listening on PORT`, PORT));
