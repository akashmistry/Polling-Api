const express = require("express");

const app = express();

const port = 2620;

const db = require("./config/mongoose");

// TO PUT AlL ENTERED VALUES IN BODY KEY
app.use(express.urlencoded({ extended: true }));

// ROUTES INDEX
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error in connecting to the server");
  }
  console.log("Firing up the express server on ", port, " 🔥🤙🏻");
});
