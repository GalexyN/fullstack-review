const express = require('express');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();

// middleware
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

// set up router
app.use('/', routes);


let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

