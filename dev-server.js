var express = require('express');
var app = express();

app.use('/', express.static('./dest'))

app.listen(3000);
