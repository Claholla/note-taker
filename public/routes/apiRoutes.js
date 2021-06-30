// Dependencies
const db = require("../../db/db.json");


// Routing
module.exports = (app) => {
    // API GET requests
    // This shows the db.json contents in plain text when the url is visited
    app.get("/api/notes", (req, res) => res.json(db));

    // API POST requests
    app.post("/api/notes", (req, res) => {
        db.push(req.body);
        res.json(true);
    });
}