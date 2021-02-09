const express = require('express');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');

let app = express();

// middleware
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// set up router
app.use('/', routes);


let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

