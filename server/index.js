const express = require('express');
const routes = require('./routes/routes.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

// set up router
app.use('/', routes);


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

