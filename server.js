// Application dependencies
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// Sets the port locally and for heroku
const PORT = process.env.PORT || 8080;

// Lets Express handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use("/static", express.static(path.join(__dirname, "public")));

// Router - determines url request destination
require("./public/routes/apiRoutes")(app);
require("./public/routes/htmlRoutes")(app);

// Listener
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});