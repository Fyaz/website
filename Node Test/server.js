'use strict';
const express = require('express');
const app = express();
var redir_request = require('./scripts/pager.js');

const port = process.env.PORT || 1337;

// Redirect to the specified page
redir_request.service(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


