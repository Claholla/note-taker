// Dependencies
const db = require("../../db/db.json");
const uniqid = require("uniqid");

// Routing
module.exports = (app) => {
    // API GET requests
    // This shows the db.json contents in plain text when the url is visited
    app.get("/api/notes", (req, res) => res.json(db));

    // API POST requests
    app.post("/api/notes", (req, res) => {
        let body = req.body;
        body.id = uniqid.process();
        db.push(body);
        // fs.writeFileSync("../../db/db.json", JSON.stringify(db));
        res.json(body);
    });
}