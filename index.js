// import express
const express = require("express");
// import dotenv
require("dotenv").config();

// get PORT from .env
const PORT = process.env.PORT;
// instantiate express
const app = express();

app.listen(PORT, () => {
  console.log(`Application listening to port ${PORT}`);
});
