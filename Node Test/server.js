'use strict';
var http = require('http') // Servlet operations
var fs = require('fs') // Filesys
var url = require('url'); // Url parsing
const express = require('express');
const app = express();
var path = require("path");

// Custom modules
var webpage_lookup = require('./scripts/index.js');
const port = process.env.PORT || 1337;


app.get('/', function (req, res) {
    var q = url.parse(req.url, true);
    var filename = webpage_lookup.getFile(q.pathname);
    res.sendFile(path.join(__dirname + filename));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


