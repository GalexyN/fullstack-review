const express = require('express');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 1128;

let app = express();

// middleware
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

// set up router
app.use('/', routes);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

