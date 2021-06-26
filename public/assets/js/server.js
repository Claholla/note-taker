// Application dependencies
const express = require("express");
const app = express();

// Sets the port locally and for heroku
const PORT = process.env.PORT || 8080;

// Lets Express handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

