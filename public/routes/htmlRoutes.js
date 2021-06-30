// Dependencies
// Path allows the server to route to the correct HTML files
const path = require("path");

// Routing
module.exports = (app) => {
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../notes.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
};

