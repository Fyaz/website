exports.service = function (app) {
    var path = require("path");
    const webapp = __dirname + "/../webapp/";

    // When the link '/' is entered, it'll open Page1.html
    app.get('/', function (req, res) {
        res.sendFile(path.join(webapp + "Page1.html"));
    });

    app.get('/example', function (req, res) {
        res.sendFile(path.join(webapp + "index.html"));
    });

    app.get('/portfolio', function (req, res) {
        res.sendFile(path.join(webapp + "portfolio.html"));
    });

    app.get('/error', function (req, res) {
        res.sendFile(path.join(webapp + "error.html"));
    });
}