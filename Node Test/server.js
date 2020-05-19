'use strict';
var http = require('http'); // Servlet operations
var fs = require('fs'); // Filesys
var url = require('url'); // Url parsing

// Custom modules
var fp = require('./scripts/index.js');

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = fp.getFile("." + q.pathname);
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        } 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(port);
